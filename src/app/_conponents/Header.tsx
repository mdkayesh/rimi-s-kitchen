"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavSearchBar from "./NavSearchBar";
import HumbergerMenu from "./HumbergerMenu";
import MoblieMenu from "./MoblieMenu";
import { navlinks } from "@/data/data";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import MobileSearchBar from "./MobileSearchBar";
import CloseToOutClick from "./CloseToOutsideClick";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState("");
  const pathName = usePathname();

  const isActive = (url: string) => {
    if (url === "/") {
      return pathName === url;
    } else {
      return pathName.includes(url);
    }
  };

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        currentScrollPos < 100
          ? setIsScroll("top-0 bg-transparent")
          : setIsScroll("bg-bg_tertiary top-0 sticky translate-y-0");
      } else {
        setIsScroll("-translate-y-full");
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header z-50 shadow-lg ${isScroll} transition-all duration-500`}
      >
        <div className="container">
          <nav className="flex justify-between items-center gap-4 py-3">
            <div className="logo w-1/3 text-lg font-semibold whitespace-nowrap">
              <Link href={"/"} className="flex items-center gap-3 ">
                <Image
                  width={100}
                  height={100}
                  src="/logo.png"
                  alt="logo"
                  className="w-12 h-12 min-w-[48px] min-h-[48px]"
                />
                <span>{`Rimi's Kitchen`}</span>
              </Link>
            </div>

            {/* links */}
            <ul className="gap-5 items-center w-full justify-center hidden lg:flex">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className={`${
                      isActive(link.url) ? "text-primary" : ""
                    } uppercase transition-colors hover:text-primary`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* humberger menu */}
            <div className="lg:hidden flex items-center gap-3">
              <CloseToOutClick onClose={() => setIsSearchOpen(false)}>
                <div className="relative">
                  <button
                    type="button"
                    title="search"
                    className="text-3xl hover:text-primary transition-all duration-300 pt-2"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    <IoSearch />
                  </button>
                  <MobileSearchBar isSearchOpen={isSearchOpen} />
                </div>
              </CloseToOutClick>
              <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {/* searchbar */}

            <NavSearchBar />
          </nav>
        </div>
      </header>
      <MoblieMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
