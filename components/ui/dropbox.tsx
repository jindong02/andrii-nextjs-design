"use client"
import React, { useState } from "react";
import Image from "next/image";
import dragdropImage from "../../assets/branding/dragdrop.png";

const DropBox = () => {

    const [file, setFile] = useState<any>();
    const [src, setSrc] = useState<string>('');
    const openFileCommonDialog = () => {
        var input = document.getElementById('project');
        if(input != null){
            input.click();
        }
    }

    const setProject = (e:any) => {
        setFile(e.target.files[0])
        var input = e.target;
        var reader = new FileReader();
        if (input.files && input.files[0]) {
            reader.readAsDataURL(input.files[0]);
            reader.onload = function () {
                setSrc(reader.result as string);
            };
        }
    }

    return (
        <div 
            className="border border-[1px] rounded-[10px] p-[10px] border-dashed border-[#6B54EA] text-center cursor-pointer"
            onClick={() => openFileCommonDialog()}
        >
            <img src={src} className="mx-auto" />
            { !src && <div className="pt-[30px] pb-[80px] text-center" style={{ 'textAlign': '-webkit-center'}}>
                <Image src={dragdropImage} alt="dragdrop" />
                <p className="text-[18px] font-medium">Drag your drop media, or <span className="text-[#6B54EA]">browse</span></p>
                <p className="text-[12px]">Maximum uploaded file size: 100MB</p>
            </div>}
            <input id="project" type="file" className="hidden" accept="image/*" onChange={setProject} />
        </div>
    );
};

export default DropBox;
