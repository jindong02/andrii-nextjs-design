import React from "react";
import HireItem from "../ui/hireitem";

const TalentSection = () => {
  return (
    <div className="mt-16 w-full pb-[100px]">
      <div className="flex flex-1 w-full">
        <div className="flex-none items-center lg:!flex lg:basis-auto">
          <h1 className="text-3xl font-bold leading-[52px] inline">HIRING</h1>
        </div>

        <div className="flex-grow"></div>

        <div className="flex-none">
          <div className="flex items-center justify-center">
            <div className="h-[52px] w-[130px] border rounded-[16px] pr-[10px] pl-[10px] mr-[10px]">
              <span className="leading-[52px] mr-[10px] ml-[10px]">Filter</span>
              <button className="gb_Le h-[52px] float-right" type="button" role="button" data-tooltip="Show search options" aria-label="Advanced search options">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                </svg>
              </button>
            </div>
            <select className="h-[52px] border rounded-[16px] pr-[10px] pl-[10px]">
              <option>Top Rated</option>
              <option>Following</option>
              <option>Recent</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-1">
            <HireItem
              checked={true}
              ownerName="Austin Barry"
              viewerCount={1200}
              followedCount={500}
              bookmarked={false}
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
