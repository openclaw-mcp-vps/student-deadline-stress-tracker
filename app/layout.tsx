import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Deadline Stress Tracker",
  description: "Track student stress levels via deadlines. Monitor assignments, exams, and workload to predict stress and suggest interventions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6efa2c57-bfc5-4c8a-b635-0f8b9c6312c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
