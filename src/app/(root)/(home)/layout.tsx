import { ReactNode } from "react";
import NavBar from "./_components/NavBar";
import SideBar from "./_components/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisioTalk",
  description: "Where Distance Disappears",
  icons: {
    icon: "/logo/png/visiotalk-favicon-color.png",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <NavBar />
      <div className="flex">
        <SideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
