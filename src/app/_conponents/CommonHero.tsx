import Link from "next/link";
import React from "react";

type CommonHeroProps = {
  title: string;
  img: string;
};

const CommonHero = ({ title, img }: CommonHeroProps) => {
  return (
    <section
      className="common-hero bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-gradient-to-t from-bg_primary to-transparent py-32">
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-center uppercase text-heading">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
