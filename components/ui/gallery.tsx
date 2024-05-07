"use client"
import React, { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart, AiFillEye } from 'react-icons/ai';

const GalleryItem = (
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
            <img src={src} className="rounded-[10px] opacity-75 hover:opacity-100 cursor-pointer transition duration-500 ease-in-out" alt="image 3" />
            <div className="pt-2">
                <div className="float-left">
                    <img src={ownerSrc} className="rounded-full inline" alt="" width="30" height="30" />
                    <label className="ml-2">{ownerName}</label>
                </div>
                <div className="float-right">
                    <div className="flex gap-x-1.5">
                        <AiFillEye style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                        <span>{viewerCount / 1000}k</span>
                        <AiFillHeart style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                        <span>{followedCount}</span>
                    </div>
                </div>
                <div className="absolute top-0 right-0 m-1">
                    <div className="flex">
                        {bookMark
                            ?
                            <span className="bg-white p-2 rounded-full m-1 cursor-pointer" onClick={toggleBookmark}>
                                <BsFillBookmarkFill style={{ 'fontSize': '16px', 'lineHeight': '20px', 'color': 'orange' }} />
                            </span>
                            :
                            <span className="bg-white p-2 rounded-full m-1 cursor-pointer" onClick={toggleBookmark}>
                                <BsBookmark style={{ 'fontSize': '16px', 'lineHeight': '20px', 'color': 'grey' }} />
                            </span>}
                        {favourite ?
                            <span className="bg-white p-2 rounded-full m-1 cursor-pointer" onClick={toggle}>
                                <AiFillHeart style={{ 'fontSize': '16px', 'lineHeight': '20px', 'color': '#FF4444' }} />
                            </span>
                            :
                            <span className="bg-white p-2 rounded-full m-1 cursor-pointer" onClick={toggle}>
                                <AiOutlineHeart style={{ 'fontSize': '16px', 'lineHeight': '20px', 'color': 'grey' }} />
                            </span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
