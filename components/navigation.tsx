"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { CommandDialogComponent } from "@/components/command-dialog";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { WorkAvailabilityBadge } from "@/components/work-availability-badge";

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header
        className={cn(
          "fixed -bottom-32 z-20 mx-auto mb-4 w-full px-4 delay-500 animate-out sm:static sm:z-auto sm:mb-0 sm:mt-4 sm:h-16 sm:max-w-6xl sm:transition-none sm:delay-0 lg:px-0",
          visible && "bottom-0 left-0 animate-in"
        )}
      >
        {defaultAuthor.availableForWork && (
          <div className="mx-auto mb-2 text-center sm:hidden">
            <Link href="/now" aria-label="Go to Now page">
              <WorkAvailabilityBadge />
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2 rounded-full border-b border-primary/40 bg-white/30 bg-clip-padding px-3 py-2 shadow-md backdrop-blur-md sm:container dark:bg-black/30 dark:text-white sm:justify-between sm:rounded-lg sm:px-3">
          <div className="flex items-center justify-start">
            <div className="group aspect-square h-auto w-10 overflow-hidden rounded-full border border-black">
              <Link href="/" aria-label="Go to Home">
                <Image
                  className="duration-300 group-hover:scale-110"
                  width={40}
                  height={40}
                  src="/avatar.png"
                  alt={defaultAuthor.name}
                />
              </Link>
            </div>
            {defaultAuthor.availableForWork && (
              <Link href="/now" aria-label="Go to Now page" className="ml-2 hidden sm:block">
                <WorkAvailabilityBadge />
              </Link>
            )}
          </div>
          <div className="order-3 sm:order-2 sm:ml-auto">
            <nav className="ml-auto hidden space-x-6 text-sm font-medium sm:block sm:w-full">
              <Navbar />
            </nav>
            <nav className="sm:hidden">
              <MobileNav />
            </nav>
          </div>
          <div className="order-2 flex w-full items-center gap-2 sm:order-3 sm:w-fit">
            <CommandDialogComponent />
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
