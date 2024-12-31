"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50")}>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Books">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Blogs"
            ></MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Me">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}
