"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-foreground">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={"/logo/svg/logo-no-background.svg"}
              width={200}
              height={200}
              alt="VisioTalk Logo"
            />
          </Link>
          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full pt-16 gap-6 text-secondary-foreground">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full",
                          { "bg-primary": isActive }
                        )}
                      >
                        {link.icon}
                        <p className=" font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
