import React from "react";
import Image from "next/image";

import logoImage from "../../assets/branding/renderr_squar.png";

const HeroSection = ({align}: {align: string}) => {
  return (
    <>
      <div className="flex">
        <Image src={logoImage} alt="logo" width={90} className="pb-[60px]" />
        <span className="text-7xl text-[#0D0B16] leading-[80px] ml-[20px] font-medium">RENDERR</span>
      </div>
      <h1 className={`text-2xl text-[#0D0B16] font-bold pb-[40px] text-${align}`}>DISCOVER THE WORLD'S TOP VIDEO<br />EDITORS & THUMBNAIL ARTISTS</h1>
      <p className={`text-${align}`}>Remixedit is the leading destination to find & showcase creative work<br />and home to the world's best video editing enthusiasts.</p>
    </>
  );
};

export default HeroSection;
