"use client";

import React from "react";
import SocialBtns from "./SocialBtns";
import { navlinks } from "@/data/data";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="footer bg-bg_tertiary mt-20">
      <div className="container py-20 text-center">
        <ScrollToTop />
        <h3 className="text-3xl font-semibold capitalize mt-4">Follow me</h3>

        <div className="mt-6">
          <SocialBtns />
        </div>

        {/* links */}
        <ul className="gap-5 items-center w-full justify-center mt-6 flex flex-wrap">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`uppercase transition-colors hover:text-primary`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
