"use client";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { apiCaller } from "@/app/network";
import { AiReport, Domain, ReportResponse } from "@/app/modal";
import { PersonalityOverview } from "@/app/components/visualization/PersonalityOverview";
import { DetailedSections } from "@/app/components/sections/DetailedSection";

export default function Big5Page({ params }: { params: { slug: string } }) {
  const [report, setReport] = useState<ReportResponse | null>(null);
  const [reportLoading, setReportLoading] = useState(true);
  const { slug } = params;

  useEffect(() => {
    const getReportByTestId = async () => {
      try {
        setReportLoading(true);
        const response = await apiCaller({
          method: "GET",
          path: `/report/${slug}`,
        });
        if (response) {
          setReport(response);
          setReportLoading(false);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Error fetching report:", error);
        return false;
      }
    };

    let pollingCount = 0;
    const maxPolls = 12; // 60 seconds total with 5 second intervals

    const pollReport = async () => {
      const success = await getReportByTestId();

      if (!success && pollingCount < maxPolls) {
        pollingCount++;
        if (pollingCount === 6) {
          // After 30 seconds
          alert("Report generation taking little while, please be with us");
        }
        setTimeout(pollReport, 10000); // Poll every 5 seconds
      }
    };

    pollReport();

    return () => {
      pollingCount = maxPolls; // Stop polling on unmount
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#F9F7F7]">
      <Header title="BIG 5 Personality Assessment" />
      <main className="pt-20 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12" id="overview">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Assessment Report
            </h1>
            {reportLoading ? (
              <>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  {"Analyzing your responses. Please wait 30 seconds."}
                </p>
                <p className="text-[12px] text-gray-600 max-w-2xl mx-auto">
                  Powered by MindSarthi AI
                </p>
              </>
            ) : (
              <>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Congratulations <strong>{report?.name || "Human"}!</strong>
                </p>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Your personality insights are unlocked{" "}
                </p>
              </>
            )}
          </div>
          <div className="mb-8" id="domains">
            <PersonalityOverview data={report?.report as Domain[]} />
          </div>
          <DetailedSections aiReport={report?.aiReport as AiReport[]} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
