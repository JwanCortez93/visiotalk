import { ReactNode } from "react";
import StreamVideoProvider from "../_providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisioTalk",
  description: "Where Distance Disappears",
  icons: {
    icon: "/logo/png/visiotalk-favicon-color.png",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
