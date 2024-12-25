import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "MindSarthi : Big 5 Assessment";
const smallDescription = "AI powered assessment of your personality";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: title,
  description: smallDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          name="keywords"
          content="mental health support, anxiety management, depression treatment, mental wellness tips, therapy near me, stress relief techniques, counseling services, emotional well-being, mental health stigma, PTSD symptoms, cognitive behavioral therapy, mindfulness meditation, mental health awareness, bipolar disorder, schizophrenia care, self-care strategies, panic attacks, workplace mental health, mental health resources, therapy for teens, eating disorders, grief counseling, holistic mental health, ADHD treatment, psychotherapy, mental health in schools, seasonal affective disorder, mental health first aid, stress and anxiety, mental health apps, therapist online, mental health hotline, mental illness recovery, mental health advocacy, coping mechanisms, mental health workshops, social anxiety, mental health for parents, depression symptoms, mental health diet, PTSD therapy, mental health medication, mental health and exercise, mental health podcasts, mental health challenges, therapy for veterans, youth mental health, mental health statistics, psychological disorders, mental health blogs"
        />
        <meta name="author" content="MindSarthi Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={smallDescription} />
        <meta property="og:description" content={smallDescription} />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://mindsarthi.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={smallDescription} />
        <meta name="twitter:image" content="/favicon/favicon-32x32.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-GGBJ26KTBW" />
    </html>
  );
}
