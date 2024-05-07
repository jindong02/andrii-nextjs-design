"use client";

import Header from "@/components/layout/header";
import React from "react";
import type {} from 'redux-thunk/extend-redux';
import HeroSection from "@/components/sections/heroSection";
import ButtonGroup from "@/components/sections/buttonGroup";

const Home = () => {
  return (
    <div className="relative h-[100%] bg-gradient-to-r from-[#6B54EA44] via-[#EB1C5344] to-[#FFA24044] flex items-center justify-center md:pt-10 rounded-[16px]">
      <div className="w-full rounded-[14px] flex flex-col items-center pt-[30px] px-[24px]">
        <Header />
        <HeroSection align="center" />
        <ButtonGroup />
      </div>
    </div>
  );
};

export default Home;
