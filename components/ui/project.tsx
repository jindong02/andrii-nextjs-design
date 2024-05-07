"use client"
import React, { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart, AiFillEye } from 'react-icons/ai';

const ProjectItem = (
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
        <div className="relative">
            <img src={src} className="rounded-[6px] opacity-75 hover:opacity-100 cursor-pointer transition duration-500 ease-in-out" alt="image 3" />
            <div className="absolute bottom-[10px] left-[15px]">
                <span className="text-white font-bold block bg-[#33333388] p-[4px] inline">{viewerCount / 1000}k</span>
                <label className="text-white font-bold block">Project Name {ownerName}</label>
            </div>
        </div>
    );
};

export default ProjectItem;
