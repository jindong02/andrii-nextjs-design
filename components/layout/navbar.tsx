"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import logoImage from "../../assets/branding/renderr_squar.png";
import { BsBellFill } from 'react-icons/bs';
import { BiSolidMessageAltMinus } from 'react-icons/bi';

const navbar = () => {

    const [show, setShow] = useState<boolean>(false);
    const dropdownRef = useRef(null);
    
    const toggleMenu = () => {
        setShow(!show);
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const parentElement = document.getElementById('dropdownmenu');
            const tergetElement = event.target;
            if (parentElement && !parentElement.contains(tergetElement)) {
              setShow(false);
            }
        };
      
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [])

    return (
        <div className="fixed flex top-[20px] right-[10px] pl-[20px] pr-[20px] w-full z-50">
            <div className="flex-none items-center lg:!flex lg:basis-auto">
                <Link
                    className="ml-2 mr-5 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    href="/">
                    <Image src={logoImage} alt="logo" width={60} />
                </Link>
            </div>

            <div className="flex-grow pl-0 md:pl-[240px]">
                <div className="flex md:flex-1 h-[54px] w-[700px] bg-white border border-lightGray rounded-full px-5 items-center text-secondaryBlack mx-auto">
                    <GoSearch className="w-6 h-6" />
                    <form>
                        <input
                            className="pl-4 w-full h-full focus:outline-none !w-[600px]"
                            placeholder="Search everywhere"
                        />
                    </form>
                </div>
            </div>

            <div className="flex-none">
                <div className="flex items-center justify-center">
                    <span className="text-4xl m-2 cursor-pointer text-[#333333]">
                        <BiSolidMessageAltMinus />
                    </span>
                    <span className="text-4xl m-2 cursor-pointer text-[#333333]">
                        <BsBellFill />
                    </span>
                    <div 
                        className="relative inline-block text-left"
                        id="dropdownmenu"
                    >
                        <button onClick={() => toggleMenu()}>
                            <img src="/images/users/reviewed6.png" alt="profile" className="rounded-full w-[50px] h-[50px] mr-4 ml-4 border-2 border-[#FFFFFF]" loading="lazy" />
                        </button>
                        <div
                            ref={dropdownRef} 
                            className={`${show ? '' : 'hidden'} absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg`}>
                            <div className="py-1 p-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <img src="/images/users/reviewed6.png" alt="profile" className="inline rounded-full w-[40px] h-[40px] border-2 border-[#FFFFFF]" loading="lazy" />
                                    <label className="ml-3">Hanna George</label>
                                </a>
                                <a href="/profile?type=work" className="block px-4 py-4 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-[#333333]" role="menuitem">Profile</a>
                                <a href="/settings?page=general" className="block px-4 py-4 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-[#333333] border-b" role="menuitem">Settings</a>
                                <a href="/signin" className="block px-4 py-4 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-[#333333]" role="menuitem">Sign out</a>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/upload"
                        className="bg-[#6B54EA] rounded-[10px] h-[52px] w-[120px] items-center justify-center text-white font-medium mx-1 text-md leading-[52px] text-center"
                    >
                        Upload
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default navbar;
