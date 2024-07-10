"use client";
import ServerComponent from "@/components/Servers/ServerComponent";
import React from "react";
import Contact from "./contact";

function page() {
  return (
    <div>
      <h1>Contact</h1>
      <Contact>
        <ServerComponent />
      </Contact>
    </div>
  );
}

export default page;
