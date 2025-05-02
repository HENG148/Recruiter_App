'use client'

import Footer from "@/components/footer/page";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const excludePaths = ["login", "register"];
  const excludePathsForFooter = [
    "login",
    "register",
  ];
  const shouldDisplayNavbar = !excludePaths.some((path) => pathname.includes(path));
  const shouldDisplayFooter = !excludePathsForFooter.some((path) => pathname.includes(path));

  return (
    <>
      <div>
        {shouldDisplayNavbar && <NavBar />}
        <div className={`${
          shouldDisplayNavbar && !pathname.includes("select-gender") && "pt-[43.5px] relative"
        }`}
        >
          {children}
        </div>
        {shouldDisplayFooter && <Footer />}
      </div>
    </>
  )
}