"use client"
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi2';

const HireItem = (
    { checked, ownerName, viewerCount, followedCount, bookmarked, src, ownerSrc }
        :
        { checked: boolean, ownerName: string, viewerCount: number, followedCount: number, bookmarked: boolean, src: string, ownerSrc: string }
) => {

    const [favourite, setFavourite] = useState<Boolean>(false);
    const [bookMark, setBookMark] = useState<Boolean>(false);

    useEffect(() => {
        setFavourite(checked)
    }, [checked]);

    useEffect(() => {
        setBookMark(bookmarked)
    }, [bookmarked]);


    const toggle = () => {
        setFavourite(!favourite);
    }

    const toggleBookmark = () => {
        setBookMark(!bookMark);
    }

    return (
        <div className="relative bg-white rounded-[10px] p-5 border">
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    <img src={ownerSrc} alt="profile" className="rounded-full w-[90px] h-[90px] mr-4 ml-4" loading="lazy" />
                </div>
                <div className="col-span-7">
                    <img src={src} className="rounded-[10px] opacity-75 hover:opacity-100 cursor-pointer transition duration-500 ease-in-out" alt="image 3" />
                </div>
            </div>
            <div className="grid grid-cols-12 mt-5">
                <div className="col-span-10">
                    <h1 className="text-2xl">{ownerName}</h1>
                    <div className="flex gap-x-1.5">
                        <HiUser style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                        <span className="mr-3">{viewerCount / 1000}k</span>
                        <AiFillEye style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                        <span className="mr-3">{viewerCount / 1000}k</span>
                        <AiFillHeart style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                        <span className="mr-3">{followedCount}</span>
                    </div>
                </div>
                <div className="col-span-2">
                    <span className="block text-center">Works</span>
                    <p className="text-center font-bold text-2xl">{followedCount}</p>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-6 pt-5">
                    <button className="bg-[#6B54EA] hover:bg-[#563ddb] text-white rounded-[10px] h-[52px] w-full items-center justify-center font-medium mx-1 text-md leading-[52px] border-[1px] border-solid float-right">
                        Hire
                    </button>
                </div>
                <div className="col-span-6 pt-5">
                    <button className="bg-[#FFFFFF] hover:bg-[#FCFCFC] text-[#333333] rounded-[10px] h-[52px] w-full items-center justify-center font-medium mx-1 text-md leading-[52px] border-[1px] border-solid float-left">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HireItem;
