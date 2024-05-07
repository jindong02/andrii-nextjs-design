"use client"
import ButtonGroup from '@/components/sections/buttonGroup'
import UploadSection from '@/components/sections/uploadSection'
import Navbar from '@/components/layout/navbar'
import React from 'react'

const page = () => {
  return (
    <div className="relative h-[100%] bg-[#FCFCFC] flex justify-center z-40">
      <div className="w-full rounded-[14px] flex flex-col pt-[30px] px-[24px] items-center">
        <Navbar />
        <UploadSection />
        <ButtonGroup />
      </div>
    </div>
  )
}

export default page