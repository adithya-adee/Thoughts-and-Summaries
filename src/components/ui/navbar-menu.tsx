"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const MenuItem = ({
  item,
  onClick,
}: {
  item: string;
  onClick?: () => void;
}) => {
  return (
    <Link className="relative" href={item.toLowerCase()} onClick={onClick}>
      <motion.p
        initial={{ y: -10, opacity: 0.5 }}
        transition={{ type: "spring", duration: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        className="mr-4 ml-4 cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item[0].toUpperCase() + item.slice(1)}
      </motion.p>
    </Link>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};
