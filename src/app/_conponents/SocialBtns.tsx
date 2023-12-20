import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";

const socialIcons = [
  {
    title: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/adritaislam.rimi.12",
  },
  {
    title: "Youtube",
    icon: <TbBrandYoutube />,
    url: "https://www.youtube.com/@Rimis.kitchen",
  },
  {
    title: "Instagram",
    icon: <BsInstagram />,
    url: "https://www.instagram.com/adrita_islam_rimi/",
  },
];

const SocialBtns = () => {
  return (
    <ul className="social-btns flex gap-4 justify-center items-center">
      {socialIcons.map((i) => (
        <li key={i.title}>
          <a
            href={i.url}
            target="_blank"
            rel="noopener noreferrer"
            title={i.title}
            className="p-3 border-2 text-lg border-primary block rounded-full hover:bg-primary transition-all duration-300"
          >
            {i.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialBtns;
