"use client";

import React, { ReactNode, useEffect, useRef } from "react";

type CloseToOutClickProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
};

const CloseToOutClick = ({
  children,
  onClose,
  className,
}: CloseToOutClickProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const ref = containerRef.current! as HTMLDivElement;
      if (ref && !ref?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CloseToOutClick;
