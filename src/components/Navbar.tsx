"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navigate: string[] = ["blogs", "books", "portfolio"];
  const [active, setActive] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("active") || navigate[0]
      : navigate[0]
  );

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu>
          {navigate
            .filter((item) => item !== active)
            .map((item) => (
              <MenuItem
                key={item}
                item={item}
                onClick={() => setActive(item)}
              />
            ))}
        </Menu>
      </div>
    </div>
  );
}
