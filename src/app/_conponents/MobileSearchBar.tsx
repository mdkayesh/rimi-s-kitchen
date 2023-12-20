"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

type MobileSearchBarProps = {
  isSearchOpen: boolean;
};

const MobileSearchBar = ({ isSearchOpen }: MobileSearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    router.push(`/recipes?q=${searchValue}`);
  };

  return (
    <div
      className={`${
        isSearchOpen ? "w-[250px]" : "w-0"
      } recipe-search-bar mt-5 absolute top-1/2 left-0 -translate-x-full shadow-lg transition-all duration-300 overflow-hidden z-50`}
    >
      <form
        className="flex rounded-3xl bg-bg_secondary gap-2 items-center px-3 py-1 focus-within:shadow-lg border border-transparent focus-within:border-primary transition-all duration-300 w-full"
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          title="search"
          className="text-2xl hover:text-primary transition-all duration-300"
        >
          <IoSearch />
        </button>
        <input
          type="search"
          name="search"
          placeholder="Hit enter to search..."
          className="bg-transparent py-1 outline-none border-none w-full block"
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default MobileSearchBar;
