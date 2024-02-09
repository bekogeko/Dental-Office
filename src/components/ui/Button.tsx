import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  variant: "default" | "sm" | "lg" | "xl" | "full";
  href: string;
}
function Button({ children, variant, href }: buttonProps) {
  return (
    <Link
      href={href}
      className={classNames({
        "flex items-center justify-center rounded-md bg-shark-950 px-4 py-2 text-white transition hover:bg-shark-900":
          true,
        " px-4 py-2 ": variant == "sm",
        "  px-3  py-2": variant == "lg",
        " px-12 py-2 ": variant == "xl",
        "  px-5 py-2 ": variant == "full",
      })}
    >
      {children}
    </Link>
  );
}

export default Button;
