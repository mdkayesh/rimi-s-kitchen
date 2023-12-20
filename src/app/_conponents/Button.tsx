import {
  ReactNode,
  useRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import Link, { LinkProps } from "next/link";
//   import { Link, LinkProps } from "react-router-dom";
//   import useMagnetEffect from "../../../hooks/useMagnetEffect";

interface ButtonProps {
  children: ReactNode;
  btnClass?: string;
  variant?: "primary" | "secondary";
  tag: "link" | "button" | "a";
}

type linkType = {
  tag: "link";
} & LinkProps;

type anchorType = {
  tag: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type btnType = {
  tag: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps & (linkType | btnType | anchorType)) => {
  const { children, btnClass, tag, variant = "primary", ...rest } = props;
  // const btnRef = useRef<HTMLButtonElement>(null);
  // const btnLinkRef = useRef<HTMLAnchorElement>(null);

  // Apply useMagnetEffect based on the tag
  // useMagnetEffect(tag === "link" || tag === "a" ? btnLinkRef : btnRef);

  if (tag === "link") {
    return (
      <Link
        className={`button ${btnClass}`}
        // ref={btnLinkRef}
        data-cursor="-hidden invisible"
        {...(rest as linkType)} // Cast to linkType
      >
        <span>{children}</span>
      </Link>
    );
  } else if (tag === "button") {
    return (
      <button
        className={`button ${btnClass}`}
        // ref={btnRef}
        data-cursor="-hidden invisible"
        {...(rest as btnType)} // Cast to btnType
      >
        <span>{children}</span>
      </button>
    );
  } else {
    return (
      <a
        className={`button ${btnClass}`}
        // ref={btnLinkRef}
        target="_blank"
        data-cursor="-hidden invisible"
        {...(rest as anchorType)} // Cast to linkType
      >
        <span>{children}</span>
      </a>
    );
  }
};

export default Button;
