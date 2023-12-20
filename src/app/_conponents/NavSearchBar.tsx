import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const NavSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    router.push(`/recipes?q=${searchValue}`);
  };

  return (
    <div className="nav-search-bar w-1/3 hidden lg:block">
      <form
        className="flex rounded-3xl bg-bg_secondary gap-2 items-center px-3 py-1 focus-within:shadow-lg border border-transparent focus-within:border-primary transition-all duration-300"
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
          className="bg-transparent py-1 outline-none border-none"
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default NavSearchBar;
