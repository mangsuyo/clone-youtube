import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

export default function SearchBar({ handleSetKeyWord }) {
  const [text, setText] = useState("");
  const handleSearchInputChange = (event) => {
    setText(event.target.value);
  };
  const handleSearchContentSubmit = (event) => {
    event.preventDefault();
    handleSetKeyWord(text);
  };

  const { keyword } = useParams();

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  return (
    <header className="px-[10%] py-[2%] mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="images/youtube-logo.avif" className="w-12 h-12 mr-2" />
          <h1 className="text-xl font-medium cursor-pointer">
            <Link to="/">Youtube</Link>
          </h1>
        </div>
        <form
          className="w-[70%] flex items-center border-2"
          onSubmit={handleSearchContentSubmit}
        >
          <input
            className="w-[90%] pl-5 py-2 outline-none"
            type="text"
            placeholder="Search..."
            value={text}
            onChange={handleSearchInputChange}
          />
          <button className="w-[10%] flex justify-end">
            <CiSearch className="text-2xl mr-4" />
          </button>
        </form>
      </div>
    </header>
  );
}
