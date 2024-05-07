import React from "react";
import DropBox from "../ui/dropbox";

const UploadSection = () => {
  return (
    <div className="mt-16 w-full">
      <div>
        <h1 className="text-3xl font-bold leading-[52px] inline">UPLOAD WORK</h1>
        <div className="float-right">
          <button className="bg-[#FCFCFC] hover:bg-[#EAEAEA] rounded-[10px] h-[52px] w-[150px] items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[52px] border">Save as draft</button>
          <button className="bg-[#333333] hover:bg-[#444444] rounded-[10px] h-[52px] w-[220px] items-center justify-center text-white font-medium mx-1 text-md leading-[52px] border">Publish to Remixedit</button>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="h-full ml-0 mr-0 md:ml-[16%] md:mr-[16%] mt-[50px]">
        <div
          className="g-6 flex h-full flex-wrap items-top justify-center lg:justify-between">
          <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-5/12 xl:w-5/12">
            <div className="mb-6">
              <label className="leading-10">Project Name</label>
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-[1px] border-solid border-slate-100 rounded-xl !bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="Add a name" />
            </div>

            <div className="mb-6">
              <label className="leading-10">Project Image</label>
              <DropBox />
            </div>

          </div>

          <div className="mb-12 md:mb-0 md:w-9/12 lg:w-5/12 xl:w-5/12">

            <div className="mb-6">
              <label className="leading-10">Repository link</label>
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-[1px] border-solid border-slate-100 rounded-xl !bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="https://" />
            </div>

            <div className="mb-6">
              <label className="leading-10">Demo link</label>
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-[1px] border-solid border-slate-100 rounded-xl !bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="https://" />
            </div>

            <div className="mb-6">
              <label className="leading-10">Youtubu link</label>
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-[1px] border-solid border-slate-100 rounded-xl !bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="https://" />
            </div>

            <div className="mb-6">
              <label className="leading-10">Vimeo link</label>
              <input
                type="text"
                className="block min-h-[auto] w-full rounded border-[1px] border-solid border-slate-100 rounded-xl !bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="https://" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
