import React, { useEffect, useState } from "react";
import ProjectItem from "../ui/project";
import { BsPinterest, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter, useSearchParams } from "next/navigation";

const ProfileSection = () => {
  const router  = useRouter();
  const searchParams  = useSearchParams();
  const [type, setType] = useState<string>('');

  useEffect(() => {
    if(searchParams.get('type')){
      setType(searchParams.get('type')!)
    }
  }, [searchParams])

  return (
    <div className="mt-16 w-full pb-[100px]">
      <div className="pt-10">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <img src="/images/users/reviewed6.png" alt="user" width={80} className="rounded-full mb-[20px]" />
            <span className="text-md leading-5">Member since: May 17, 2019</span><br />
            <label className="text-4xl font-bold leading-loose">Hanna George</label>
            <p className="text-md mb-[30px] leading-5">Video Editor | After Effect | Artist</p>
            <button className="bg-[#6B54EA] hover:bg-[#563ddb] text-white rounded-[10px] h-[46px] w-[100px] items-center justify-center font-medium text-md leading-[46px] border-[1px] border-solid">
              Follow
            </button>
            <button className="bg-[#FFFFFF] hover:bg-[#FCFCFC] text-[#333333] rounded-[10px] h-[46px] w-[100px] items-center justify-center font-medium text-md leading-[46px] border-[1px] border-solid ml-[10px]">
              Hire me
            </button>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-3">
            <img src="/images/users/reviewed6.png" alt="user" width={80} className="invisible" />
            <label className="text-xl leading-10">ABOUT</label>
            <p className="text-md">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <label className="text-md flex mt-4">
              <span className="text-lg text-[#333333] mr-1"><FaMapMarkerAlt /></span><span>Toronto, Canada</span>
            </label>
          </div>
          <div className="col-span-2 ml-auto">
            <img src="/images/users/reviewed6.png" alt="user" width={80} className="invisible" />
            <label className="text-xl leading-10">SOCIAL WEB</label>
            <div className="flex">
              <a href="#" className="pr-6 pt-3 text-2xl">
                <FaFacebookF />
              </a>
              <a href="#" className="pr-6 pt-3 text-2xl">
                <BsPinterest />
              </a>
              <a href="#" className="pr-6 pt-3 text-2xl">
                <BsInstagram />
              </a>
              <a href="#" className="pr-6 pt-3 text-2xl">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full">
        <div className="flex-none items-center lg:!flex lg:basis-auto">
          {/* <h1 className="text-3xl font-bold leading-[46px] inline">MY PROFILE</h1> */}
        </div>

        <div className="flex-grow pl-0 md:pl-[350px] ml-0 md:ml-[250px]">
          <div className="flex md:flex-1 h-[54px] w-full items-center text-secondaryBlack mx-auto">
            <div>
              <button 
                onClick={() =>router.push('/profile?type=work')}
                className={`${type === 'work' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[80px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Work
              </button>
              <button
                onClick={() =>router.push('/profile?type=projects')}
                className={`${type === 'projects' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[120px] items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[46px] border`}>
                Projects
              </button>
              <button
                onClick={() =>router.push('/profile?type=collections')}
                className={`${type === 'collections' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[140px] items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[46px] border`}>
                Collections
              </button>
              <button
                onClick={() =>router.push('/profile?type=linked-shorts')}
                className={`${type === 'linked-shorts' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[170px] items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[46px] border`}>
                Linked Shorts
              </button>
              <button
                onClick={() =>router.push('/profile?type=drafts')}
                className={`${type === 'drafts' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[110px] items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[46px] border`}>
                Drafts
              </button>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="flex items-center justify-center">
            <select className="h-[46px] border rounded-[16px] pr-[10px] pl-[10px] mt-[4px]">
              <option>Recent</option>
              <option>Following</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-3 gap-2">
            <ProjectItem 
              checked={true} 
              ownerName="Austin Barry" 
              viewerCount={1200} 
              followedCount={500} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Sullivan Evans" 
              viewerCount={7000} 
              followedCount={150} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed2.png"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Miles Boyd" 
              viewerCount={3200} 
              followedCount={50} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed3.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
            <ProjectItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
      </div>
    </div>
  );
};

export default ProfileSection;
