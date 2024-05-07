"use client"
import ButtonGroup from '@/components/sections/buttonGroup'
import SettingsSection from '@/components/sections/settingsSection'
import Navbar from '@/components/layout/navbar'
import React from 'react'

const page = () => {
  return (
    <div className="relative h-[100%] bg-[#FCFCFC] flex justify-center z-40">
      <div className="w-full rounded-[14px] flex flex-col items-center pt-[30px] px-[24px]">
        <Navbar />
        <SettingsSection />
        <ButtonGroup type='profile' />
      </div>
    </div>
  )
}

export default page