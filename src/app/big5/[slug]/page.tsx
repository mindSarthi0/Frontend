"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { apiCaller } from "@/app/network";
import { ReportResponse } from "@/app/modal";

export default function Big5Page({ params }: { params: { slug: string } }) {
  const [report, setReport] = useState<ReportResponse | null>(null);
  const [reportLoading, setReportLoading] = useState(true);
  const { slug } = params;

  useEffect(() => {
    const getReportByTestId = async () => {
      try {
        const response = await apiCaller({
          method: "GET",
          path: `/report/${slug}`,
        });
        setReport(response);
        setReportLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    getReportByTestId();
  }, [slug]);

  const renderReport = () => {
    if (reportLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {report?.report.map((domain, index) => (
          <div key={index}>{domain.name}</div>
        ))}
      </div>
    );
  };

  const renderAiReport = () => {
    if (reportLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {report?.aiReport.map((aiReport, index) => (
          <div key={index}>{aiReport.generatedContent.insights}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F7F7]">
      <Header title="BIG 5 Personality Assessment" />

      <main className="container mx-auto px-4 py-[72px]">
        <div>{renderReport()}</div>
        <div>{renderAiReport()}</div>
      </main>
      <Footer />
    </div>
  );
}
