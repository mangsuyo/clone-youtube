import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Root() {
  const [keyword, setKeyword] = useState("");

  const handleSetKeyWord = (input) => {
    setKeyword(input);
  };

  return (
    <article className="w-screen min-h-screen">
      <SearchBar handleSetKeyWord={handleSetKeyWord} />
      <article className="px-[10%]">
        <Outlet />
      </article>
    </article>
  );
}
