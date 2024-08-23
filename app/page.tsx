"use client";

import Header from "@/components/header";
import PropertyItems from "@/components/property-items";
import SidebarDesktop from "@/components/sidebar-desktop";
import SidebarMobile from "@/components/sidebar-mobile";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });

  return (
    <main>
      <Header />
      <div
        className={`container ${
          isDesktop ? "flex md:px-12 lg:px-14" : "flex-col"
        } py-4`}
      >
        {isDesktop ? <SidebarDesktop /> : <SidebarMobile />}
        <PropertyItems />
      </div>
    </main>
  );
}
