import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full text-secondary-foreground bg-primary px-6 py-4 lg:px-10">
      <Link href="/" className="hidden items-center gap-1 lg:flex">
        <Image
          src={"/logo/svg/logo-no-background.svg"}
          width={200}
          height={200}
          alt="VisioTalk Logo"
        />
      </Link>
      <Link href="/" className="lg:hidden flex items-center gap-1">
        <Image
          src={"/logo/png/visiotalk-favicon-color.png"}
          width={50}
          height={50}
          alt="VisioTalk Logo"
        />
      </Link>
      <div className="flex-between gap-5 ">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
