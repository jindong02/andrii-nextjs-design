"use client";

import React from "react";
import {usePathname} from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return <p>Post: {pathname}</p>;
};

export default Page;
