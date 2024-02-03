import type { Metadata } from "next";

import "./globals.css";
import 'remixicon/fonts/remixicon.css'



export const metadata: Metadata = {
  title: "Antarctic.px",
  description: "Antarctic.px is a digital creator specializing in website and mobile application development. We aim to provide informative solutions for complex businesses, facilitating product sales in broader markets. Additionally, we excel in designing media for business information and promotional purposes.",
  other: {
    'theme-color': '#fff',
    'og:type': 'website',
    'og:url': 'antarctic.px'
  },
  // icons: {
  //   icon: '/img/logo.png'
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="relative">{children}</body>
    </html>
  );
}
