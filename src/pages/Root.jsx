import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Root() {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const [keyword, setKeyword] = useState("");
  const handleSetKeyWord = (input) => {
    setKeyword(input);
    navigate(`/search/${input}`);
  };

  return (
    <article className="w-screen min-h-screen">
      <SearchBar handleSetKeyWord={handleSetKeyWord} />
      <article className="px-[10%]">
        <QueryClientProvider client={queryClient}>
          <Outlet keyword={keyword} />
        </QueryClientProvider>
      </article>
    </article>
  );
}
