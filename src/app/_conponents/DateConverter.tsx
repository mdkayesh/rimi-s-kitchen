"use client";
import moment from "moment";
import React from "react";

const DateConverter = ({ publishedAt }: { publishedAt: string }) => {
  const m = moment(publishedAt).format("LL");

  return (
    <div>
      <p>{m}</p>
    </div>
  );
};

export default DateConverter;
