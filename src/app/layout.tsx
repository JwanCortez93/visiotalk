import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisioTalk",
  description: "Where Distance Disappears",
  icons: {
    icon: "/logo/png/visiotalk-favicon-color.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "logo/svg/logo-no-background.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#f5f3f4",
            colorPrimary: "#660708",
            colorInputBackground: "#d3d3d3",
            colorNeutral: "white",

            colorBackground: "#161a1d",
          },
        }}
      >
        <body className={`${inter.className} bg-background`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
