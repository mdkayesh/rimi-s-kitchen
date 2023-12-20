import Image from "next/image";
import Link from "next/link";
import React from "react";
import HumbergerMenu from "./HumbergerMenu";
import { navlinks } from "@/data/data";
import { usePathname } from "next/navigation";
import SocialBtns from "./SocialBtns";
type MoblieMenuProps = {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const MoblieMenu = ({ isOpen, setIsOpen }: MoblieMenuProps) => {
  const pathName = usePathname();

  return (
    <div
      className={`mobile-menu ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-0 right-0 w-full h-screen bg-black/60 flex justify-end z-[99] transition-all duration-300 overflow-y-auto overflow-x-hidden`}
      onClick={() => setIsOpen(false)}
    >
      <nav
        className={`flex flex-col justify-between bg-bg_secondary w-full max-w-[360px] py-4 px-7 absolute top-0 h-full transition-all duration-300 ${
          isOpen ? "right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="header">
          <div className="flex justify-between items-center">
            <div className="logo flex items-center gap-3 text-lg font-semibold whitespace-nowrap">
              <Link href={"/"}>
                <Image
                  width={100}
                  height={100}
                  src="/logo.png"
                  alt="logo"
                  className="w-12 h-12 min-w-[48px] min-h-[48px]"
                />
              </Link>
              {`Rimi's Kitchen`}
            </div>
            <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          {/* links */}
          <ul className="flex flex-col gap-4 mt-7">
            {navlinks.map((link) => (
              <li key={link.title} onClick={() => setIsOpen(false)}>
                <Link
                  scroll={true}
                  href={link.url}
                  className={`${
                    pathName === link.url
                      ? "after:min-w-[20px] before:min-w-[20px] text-primary"
                      : ""
                  } hover:text-primary transition-all duration-500 active_link`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer">
          <hr className="mb-6 border border-gray-700" />
          <SocialBtns />
          <a
            href={`mailto:mrskhan9485@gmail.com`}
            className="my-4 text-center block text-gray-400 transition-colors duration-300 hover:text-primary"
          >
            mrskhan9485@gmail.com
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MoblieMenu;
