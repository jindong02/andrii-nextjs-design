"use client"
import ButtonGroup from '@/components/sections/buttonGroup'
import ProfileSection from '@/components/sections/profileSection'
import Navbar from '@/components/layout/navbar'
import React from 'react'

const page = () => {
  return (
    <div className="relative h-[100%] bg-[#FCFCFC] flex justify-center z-40">
      <div className="w-full rounded-[14px] flex flex-col items-center pt-[30px] px-[24px]">
        <Navbar />
        <ProfileSection />
        <ButtonGroup type='profile' />
      </div>
    </div>
  )
}

export default page