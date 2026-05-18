import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jiaming Wang",
  description:
    "Personal academic homepage for Jiaming Wang, featuring research in efficient LLM post-training, multimodal evaluation, code intelligence, and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
