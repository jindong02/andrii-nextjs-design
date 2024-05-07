import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillEye } from 'react-icons/ai';
import { BsShare, BsShareFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Review from "../ui/review";
import { HiUser } from "react-icons/hi2";

const PostSection = () => {
  return (
    <div className="mt-16 w-full pb-[100px]">
      <div className="text-center relative">
        <label>February 20, 2023</label>
        <h1 className="text-5xl leading-10 m-8">Project name</h1>
        <div className="flex justify-center items-center">
          <img src="/images/users/reviewed1.png" alt="user" className="rounded-full w-[30px] h-[30px]" />Holographick
        </div>
        <div className="absolute top-10 right-0">
          <span className="rounded-full bg-[#FFFFFF] p-5 block m-3 text-2xl">
            <BsShare />
          </span>
          <span className="rounded-full bg-[#FFFFFF] p-5 block m-3 text-2xl">
            <AiOutlineHeart />
          </span>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-[50px]">
        <img src="/images/galleries/gallery1.jpg" alt="project image" className="w-full" />
        <div className="grid grid-cols-4 gap-4">
          <div className="p-10">
            <h3 className="text-xl leading-10">Aspect ratio</h3>
            <h3 className="text-lg leading-8">16:9</h3>
          </div>
          <div className="p-10">
            <h3 className="text-xl leading-10">Frame rate</h3>
            <h3 className="text-lg leading-8">30 fps</h3>
          </div>
          <div className="p-10">
            <h3 className="text-xl leading-10">Quality</h3>
            <h3 className="text-lg leading-8">4K</h3>
          </div>
          <div className="p-10">
            <h3 className="text-xl leading-10">Duration</h3>
            <h3 className="text-lg leading-8">00:45</h3>
          </div>
        </div>
        <div className="m-0 md:m-[100px]">
          <p className="break-all text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac justo eget nunc blandit malesuada. Suspendisse gravida imperdiet sapien, vel dignissim felis convallis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non porttitor ipsum, eu hendrerit ex. Morbi vel sem mattis, dapibus tellus nec, porttitor lectus. Cras suscipit vel diam ac tempor. Integer porttitor nunc lorem, a varius lorem tempus eu. Pellentesque blandit arcu sed iaculis volutpat. Quisque in varius massa. Nullam at erat sodales, aliquet ligula sed, pulvinar tortor. Suspendisse vehicula est justo, id eleifend libero ultricies vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam a lobortis neque. Maecenas interdum ante quis metus sodales, et congue tellus ullamcorper.
          </p>
        </div>
        <div className="text-left">
          <label className="text-xl leading-[100px]">More by this author</label>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src="/images/galleries/Card1.png" alt="gallery" className="w-full rounded-md" />
            </div>
            <div>
              <img src="/images/galleries/Card2.png" alt="gallery" className="w-full rounded-md" />
            </div>
            <div>
              <img src="/images/galleries/Card3.png" alt="gallery" className="w-full rounded-md" />
            </div>
          </div>
        </div>
        <div className="text-left">
          <label className="text-xl leading-[100px]">You might also like</label>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src="/images/galleries/Card4.png" alt="gallery" className="w-full rounded-md" />
            </div>
            <div>
              <img src="/images/galleries/Card5.png" alt="gallery" className="w-full rounded-md" />
            </div>
            <div>
              <img src="/images/galleries/Card6.png" alt="gallery" className="w-full rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-[#FFFFFF] rounded-md p-10">
              <div className="flex">
                <img src="/images/users/reviewed1.png" alt="owner" className="rounded-full w-[80px] h-[80px] mr-5" />
                <textarea rows={6} className="rounded-xl w-full p-5 focus:outline-none border" placeholder="leave a comment"></textarea>
              </div>
              <div>
                {/* if deactivated button, then background color is  #CFB8FF */}
                <button
                  className={`bg-[#6B54EA] hover:bg-[#5845c4] text-[#FFFFFF] rounded-lg h-[46px] w-[200px] items-center justify-center font-medium mx-1 my-2 text-md leading-[46px] float-right`}>
                  Submit
                </button>
              </div>
              <div className="clear-both border mt-[100px] mb-[60px] border-grey-100"></div>
              <div className="py-4">
                <Review src="/images/users/reviewed3.jpg" name="Omar Vetrovs" time="10h ago" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac justo eget nunc blandit malesuada. Suspendisse gravida imperdiet sapien, vel dignissim felis convallis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
              </div>
              <div className="py-4">
                <Review src="/images/users/reviewed4.jpg" name="Daan Snels" time="18h ago" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>
              <div className="py-4">
                <Review src="/images/users/reviewed6.png" name="Holographick" time="yesterday" comment="Thank you!" />
              </div>
              <div className="py-4">
                <Review src="/images/users/reviewed5.png" name="Victor Murea" time="yesterday" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac justo eget nunc blandit malesuada." />
              </div>
              <div className="py-4 flex justify-center">
                <button className="text-[#6B54EA]">Load more</button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative bg-white rounded-[10px] p-10">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <img src="/images/users/reviewed4.jpg" alt="profile" className="rounded-full w-[90px] h-[90px] mr-4 ml-4" loading="lazy" />
                  </div>
                  <div className="col-span-7">
                    <h1 className="text-2xl">HOLOGRAPHICK</h1>
                    <div className="flex gap-x-2 py-5">
                      <HiUser style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                      <span className="mr-3">12.5k</span>
                      <AiFillEye style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                      <span className="mr-3">1k</span>
                      <AiFillHeart style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                      <span className="mr-3">150</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-center font-bold py-1">Works</span>
                    <p className="text-center font-bold text-2xl py-2">8</p>
                  </div>
                </div>
                <div className="px-5 mt-5">
                  <label className="text-md flex mt-4 items-center">
                    <span className="text-lg text-[#333333] mr-1"><FaMapMarkerAlt /></span>
                    <span>Toronto, Canada</span>
                  </label>
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
              <div className="my-5 bg-white rounded-[10px] p-10">
                <h1 className="text-3xl">PROJECT NAME</h1>
                <div className="flex gap-x-2 py-5">
                  <AiFillEye style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                  <span className="mr-3">1k</span>
                  <AiFillHeart style={{ 'fontSize': '24px', 'lineHeight': '30px', 'color': 'grey' }} />
                  <span className="mr-3">150</span>
                  <span className="ml-auto">February 20, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
