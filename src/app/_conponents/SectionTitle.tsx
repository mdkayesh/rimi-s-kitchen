import React from "react";

type SectionTitleProps = {
  subtitle: string;
  title: string;
  align?: "left" | "center" | "right";
};

const SectionTitle = ({
  subtitle,
  title,
  align = "center",
}: SectionTitleProps) => {
  const alignment =
    align === "left"
      ? "text-start"
      : align === "right"
      ? "text-end"
      : "text-center";
  return (
    <div className={`section-title ${alignment}`}>
      <h4 className="font-semibold text-lg uppercase text-slate-400">
        {subtitle}
      </h4>
      <h1 className="text-4xl font-semibold mt-1 text-heading">{title}</h1>
    </div>
  );
};

export default SectionTitle;
