"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";

import logoImage from "../../../assets/branding/renderr_squar.png";
import googleIcon from "../../../assets/icons/google.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import appleIcon from "../../../assets/icons/apple.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "@/app/(redux)/(actions)/userAction";
import Loader from "../../../assets/animations/loading-animationanimation.json";
import Lottie from "lottie-react";
import {useRouter} from "next/navigation";

const Page = () => {
  const [errorr, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { error, loading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );

  const { name, email, password } = user;

  const registerSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(register(name, email, password));
  };

  const registerDataChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      // @ts-ignore
      dispatch(clearErrors());
      setError(error);
    }

    if (isAuthenticated) {
      router.push("/");
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className="h-[100%] bg-gradient-to-r from-[#6B54EA44] via-[#EB1C5344] to-[#FFA24044] flex items-top justify-center md:pt-[7%] rounded-[16px]">
      <div className="flex flex-col w-full md:w-[900px]">
        <div className="flex">
          <Image src={logoImage} alt="logo" width={100} className="pb-[60px]" />
          <span className="text-7xl text-[#0D0B16] leading-[80px] ml-[20px] font-medium">RENDERR</span>
        </div>
        <h1 className="text-2xl text-[#0D0B16] font-bold pb-[40px]">DISCOVER THE WORLD'S TOP VIDEO<br />EDITORS & THUMBNAIL ARTISTS</h1>
        <p>Remixedit is the leading destination to find & showcase creative work<br />and home to the world's best video editing enthusiasts.</p>
      </div>
      <div className="bg-white w-full md:w-[546px] md:h-[750px] rounded-[14px] flex flex-col items-center pt-[30px] px-[24px]">
        <p className=" text-[28px] md:text-[28px] text-primaryBlack font-semibold pb-[40px]">
          CREATE AN ACCOUNT
        </p>
        <div className="flex flex-col w-full">
          <p className="text-[18px] text-primaryBlack font-semibold pb-[24px]">
            Sign up with email
          </p>
          <form onSubmit={registerSubmit}>
            <div>
              <label className="text-[14px] text-primaryBlack font-medium pb-[14px]">
                Email:
              </label>
              <input
                className="h-[48px] w-full rounded-lg border px-2 border-lightGray mb-4 focus:outline-none"
                type="email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <label className="text-[14px] text-primaryBlack font-medium pb-[14px] items-center">
              Password:
            </label>
            <div className="h-[48px] w-full rounded-xl border border-lightGray mb-4 flex items-center">
              <input
                className="h-full w-full rounded-lg focus:outline-none px-2"
                type="password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
              {/* <AiOutlineEyeInvisible /> */}
            </div>
            <button
              type="submit"
              className="bg-secondaryBlack hover:bg-primaryBlack transition-all h-[48px] rounded-full w-full items-center flex justify-center text-white cursor-pointer"
            >
              {loading ? (
                <div className="w-[220px] mb-[-10px]">
                  <Lottie animationData={Loader} loop={true} />
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
        <div className="my-8 text-gray w-full flex items-center justify-between">
          <span className="h-[1px] bg-lightGray w-full"></span>
          <span className="mx-1">or</span>
          <span className="h-[1px] bg-lightGray w-full"></span>
        </div>

        <div className="h-[48px] w-full hover:bg-lightPink rounded-full border border-lightGray mb-4 flex items-center justify-center cursor-pointer">
          <Image src={googleIcon} alt="google" />
          <span className="ml-3">Continue with Google</span>
        </div>
        <div className="h-[48px] w-full hover:bg-lightPink rounded-full border border-lightGray mb-4 flex items-center justify-center cursor-pointer">
          <Image src={facebookIcon} alt="google" />
          <span className="ml-3">Continue with Facebook</span>
        </div>
        <div className="h-[48px] w-full hover:bg-lightPink rounded-full border border-lightGray mb-4 flex items-center justify-center  cursor-pointer">
          <Image src={appleIcon} alt="google" />
          <span className="ml-3">Continue with Apple</span>
        </div>

        <div className="flex my-5">
          <span className="text-darkGray">Already using Renderr?</span>
          <span
            className="text-[#6B54E4] ml-2 cursor-pointer"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Sign in here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
