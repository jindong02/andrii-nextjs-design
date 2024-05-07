import { PixelCrop } from "react-image-crop";

export interface CropData {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ImageCropperProps {
  aspectRatio: number;
  src: string;
  onCrop: (cropData: CropData) => void;
}

export interface ModalProps {
  showModal: boolean;
  imgRef: React.RefObject<HTMLImageElement>;
  closeModal: () => void;
  src: string;
  onDownloadCropClick: Function;
  completedCrop: PixelCrop | undefined;
  setCompletedCrop: Function;
  previewCanvasRef: React.RefObject<HTMLCanvasElement>;
}