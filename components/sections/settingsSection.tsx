import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Modal from "../ui/modalvideo";
import { PixelCrop } from "react-image-crop";

const SettingsSection = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<string>('');
  const [showModal, setShowModal] = useState(false)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const imgRef = useRef<HTMLImageElement>(null)
  const blobUrlRef = useRef('')
  const [base64Image, setBase64Image] = useState<any>();
  
  useEffect(() => {
    if (searchParams && searchParams.get('page')) {
      setPage(searchParams.get('page')!)
    }
  }, [searchParams])

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  function blobToBase64(blob: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(blob);
    });
  }

  async function onDownloadCropClick() {
    const image = imgRef.current
    const previewCanvas = previewCanvasRef.current
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist')
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    )
    const ctx = offscreen.getContext('2d')
    if (!ctx) {
      throw new Error('No 2d context')
    }

    (ctx as any).drawImage(// error
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    )
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await (offscreen as any).convertToBlob({ // error
      type: 'image/png',
    })

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current)
    }
    setBase64Image(await blobToBase64(blob))
    blobUrlRef.current = URL.createObjectURL(blob)
    closeModal();
  }

  return (
    <div className="mt-16 w-full pb-[100px]">
      <div className="flex flex-1 w-full">
        <div className="flex-none items-center lg:!flex lg:basis-auto">
          <h1 className="text-3xl font-bold leading-[46px] inline">PROFILE SETTINGS</h1>
        </div>

        <div className="flex-grow pl-0 md:pl-[350px] ml-0 md:ml-[250px]">
          <div className="flex md:flex-1 h-[54px] w-full items-center text-secondaryBlack mx-auto">

          </div>
        </div>

        <div className="flex-none">
          <div className="flex items-center justify-center">
            <button className="bg-[#333333] hover:bg-[#444444] rounded-[10px] h-[52px] w-[180px] items-center justify-center text-white font-medium mx-1 text-md leading-[52px] border">Save Changes</button>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3 ml-auto pr-10">
            <ul>
              <li className="leading-10 border-r py-4 px-10">
                <Link href="/settings?page=general" className={`${page === 'general' ? 'text-[#6600FF]' : ''} text-2xl hover:text-[#6600FF]`}>General</Link>
              </li>
              <li className="leading-10 border-r py-4 px-10">
                <Link href="/settings?page=social" className={`${page === 'social' ? 'text-[#6600FF]' : ''} text-2xl hover:text-[#6600FF]`}>Social link</Link>
              </li>
              <li className="leading-10 border-r py-4 px-10">
                <Link href="/settings?page=security" className={`${page === 'security' ? 'text-[#6600FF]' : ''} text-2xl hover:text-[#6600FF]`}>Security</Link>
              </li>
            </ul>
          </div>
          {/* General Tab */}
          <div className={`${page === 'general' ? '' : 'hidden'} col-span-6 mx-auto pl-10`}>
            <div className="w-full">              
              {!!completedCrop && 
                <>
                  <div className="rounded-full hidden">
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  </div>
                </>
              }
              <img src={base64Image ? base64Image : "/images/users/reviewed4.jpg"} className="rounded-full w-[120px]" />
              <button onClick={openModal} className="p-2 bg-blue-500 text-[#6B54EA] rounded-md mt-1">
                Change photo
              </button>
            </div>
            <div className="w-full mt-3">
              <label className="block mb-2">Name</label>
              <input type="text" placeholder="Enter a Name" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Nickname</label>
              <input type="text" placeholder="Enter a Nickname" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Email</label>
              <input type="email" placeholder="Enter your Email" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Bio</label>
              <textarea placeholder="Enter a Bio" rows={3} className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]"></textarea>
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">City</label>
              <input type="text" placeholder="Enter a City" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
          </div>
          {/* Social Tab */}
          <div className={`${page === 'social' ? '' : 'hidden'} col-span-6 mx-auto pl-10`}>
            <div className="w-full">
              <label className="block mb-2">Facebook</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Instagram</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Twitter</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Pinterest</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Dribbble</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Behance</label>
              <input type="text" placeholder="https://" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
          </div>
          {/* Security Tab */}
          <div className={`${page === 'security' ? '' : 'hidden'} col-span-6 mx-auto pl-10`}>
            <div className="w-full">
              <label className="block mb-2">Old passwrod</label>
              <input type="password" placeholder="Enter old password" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
            <div className="w-full mt-5">
              <label className="block mb-2">Passwrod</label>
              <input type="password" placeholder="Enter new password" className="border leading-10 indent-3 w-[600px] focus:outline-none rounded-[16px]" />
            </div>
          </div>
        </div>
      </div>      
      { showModal && <Modal 
        showModal={showModal} 
        imgRef={imgRef}
        src={`/images/users/reviewed4.jpg`} 
        closeModal={closeModal} 
        onDownloadCropClick={onDownloadCropClick} 
        completedCrop={completedCrop}
        setCompletedCrop={setCompletedCrop}
        previewCanvasRef={previewCanvasRef}
      />}
    </div>
  );
};

export default SettingsSection;