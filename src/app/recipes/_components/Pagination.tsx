"use client";

import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";

type PaginationProps = {
  totalPage: number;
};

const Pagination = ({ totalPage }: PaginationProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  // const value = useAppSelector((state) => state.pagination.value);

  const currentPage = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 5;

  return (
    <div className="pagination mt-10">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <button
            title="prev"
            type="button"
            className={`rounded-lg border h-10 w-10 flex justify-center items-center border-primary hover:text-white hover:bg-primary transition-colors duration-300 text-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed`}
            disabled={currentPage <= "1" ? true : false}
            onClick={() =>
              router.push(`${pathName}?page=${Number(currentPage) - 1}`)
            }
          >
            <MdFirstPage />
          </button>
        </li>
        {[...Array(totalPage)].map((_, page) => (
          <li key={page}>
            <button
              type="button"
              className={`${
                page + 1 === Number(currentPage) ? "bg-primary text-white" : ""
              } rounded-lg border h-10 w-10 flex justify-center items-center border-primary hover:text-white hover:bg-primary transition-colors duration-300 text-xl font-semibold`}
              onClick={() => router.push(`${pathName}?page=${page + 1}`)}
            >
              {page + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            title="prev"
            type="button"
            className={`rounded-lg border h-10 w-10 flex justify-center items-center border-primary hover:text-white hover:bg-primary transition-colors duration-300 text-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed`}
            disabled={Number(currentPage) >= totalPage ? true : false}
            onClick={() =>
              router.push(`${pathName}?page=${Number(currentPage) + 1}`)
            }
          >
            <MdLastPage />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
