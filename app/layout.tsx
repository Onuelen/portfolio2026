import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ji Seong Jun | Frontend & UI Developer",
  description:
    "사용자 경험과 정보 구조를 설계하고 실제 웹 인터페이스로 구현하는 Frontend, UI/UX, Publishing 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
