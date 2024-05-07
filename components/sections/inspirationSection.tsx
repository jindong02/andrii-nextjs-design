import React, { useEffect, useState } from "react";
import GalleryItem from "../ui/gallery";
import { useRouter, useSearchParams } from "next/navigation";

const InspirationSection = () => {
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
      <div className="flex flex-1 w-full">
        <div className="flex-none items-center lg:!flex lg:basis-auto">
          <h1 className="text-3xl font-bold leading-[46px] inline">INSPIRATION</h1>
        </div>

        <div className="flex-grow pl-0 md:pl-[46px] ml-0 md:ml-[200px]">
          <div className="flex md:flex-1 h-[54px] w-full items-center text-secondaryBlack mx-auto">
            <div>
              <button 
                onClick={() =>router.push('/inspiration?type=all')}
                className={`${type === 'all' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[80px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                All
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=animation')}
                className={`${type === 'animation' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[120px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Animation
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=branding')}
                className={`${type === 'branding' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[120px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Branding
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=video-editing')}
                className={`${type === 'video-editing' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[160px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Video Editing
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=illustration')}
                className={`${type === 'illustration' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[130px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                illustration
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=typograpy')}
                className={`${type === 'typograpy' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[120px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Typograpy
              </button>
              <button 
                onClick={() =>router.push('/inspiration?type=web-design')}
                className={`${type === 'web-design' ? ' bg-[#333333] hover:bg-[#444444] text-[#FFFFFF]' : 'bg-[#FCFCFC] hover:bg-[#EAEAEA] text-[#333333]'} rounded-[20px] h-[46px] w-[140px] items-center justify-center font-medium mx-1 text-md leading-[46px] border`}>
                Web design
              </button>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="flex items-center justify-center">
            <select className="h-[46px] border rounded-[16px] pr-[10px] pl-[10px] mt-[4px]">
              <option>Following</option>
              <option>Top Rated</option>
              <option>Recent</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={true} 
              ownerName="Austin Barry" 
              viewerCount={1200} 
              followedCount={500} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed1.png"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Sullivan Evans" 
              viewerCount={7000} 
              followedCount={150} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed2.png"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Miles Boyd" 
              viewerCount={3200} 
              followedCount={50} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed3.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
              checked={false} 
              ownerName="Nathan Staples" 
              viewerCount={4500} 
              followedCount={259} 
              bookmarked={false} 
              src="/images/galleries/gallery1.jpg"
              ownerSrc="/images/users/reviewed4.jpg"
            />
          </div>
          <div className="p-3" onClick={() => router.push('/post')}>
            <GalleryItem 
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
    </div>
  );
};

export default InspirationSection;
