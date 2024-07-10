"use client";

import React, { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <input
      className="p-2 rounded-xl border-2 border-zinc-300"
      type="text"
      value={searchQuery}
      placeholder="search..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
