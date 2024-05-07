"use client"
import React, { useState, useRef, useEffect } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  convertToPixelCrop,
} from 'react-image-crop'

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

import { AiOutlineClose } from 'react-icons/ai';
import { useDebounceEffect } from '@/lib/useDebounceEffect';
import { canvasPreview } from '@/lib/canvasPreview';
import { ModalProps } from '@/types';

const Modal = ({ showModal, imgRef, closeModal, src, onDownloadCropClick, completedCrop, previewCanvasRef, setCompletedCrop }: ModalProps) => {
  
  if (!showModal) return null;

  const [aspect, setAspect] = useState<number | undefined>(16 / 9)
  const [crop, setCrop] = useState<Crop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  useEffect(() => {
    setAspect(1)
    setScale(1)
    setRotate(0)
    if (imgRef.current) {
      const { width, height } = imgRef.current
      const newCrop = centerAspectCrop(width, height, 1)
      setCrop(newCrop)
      // Updates the preview
      setCompletedCrop(convertToPixelCrop(newCrop, width, height))
    }
  }, [])

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg w-[500px]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
          onClick={closeModal}
        >
          <AiOutlineClose className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold mb-4">Change Photo</h3>
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
          // minWidth={400}
          minHeight={200}
          className='w-full'
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={src}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
            className='w-full'
          />
        </ReactCrop>
        <div className='flex mt-4'>
          <button className="bg-[#FCFCFC] hover:bg-[#EAEAEA] rounded-[10px] h-[52px] w-1/2 items-center justify-center text-[#333333] font-medium mx-1 text-md leading-[52px] border" onClick={() => closeModal()}>Cancel</button>
          <button className="bg-[#333333] hover:bg-[#444444] rounded-[10px] h-[52px] w-1/2 items-center justify-center text-white font-medium mx-1 text-md leading-[52px] border" onClick={() => onDownloadCropClick()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;