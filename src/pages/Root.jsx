import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Root() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSetKeyWord = (input) => {
    setKeyword(input);
    navigate(`/search/${input}`);
  };
  return (
    <article className="w-screen min-h-screen">
      <SearchBar handleSetKeyWord={handleSetKeyWord} />
      <article className="px-[10%]">
        <Outlet keyword={keyword} />
      </article>
    </article>
  );
}
