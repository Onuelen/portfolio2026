"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  previewClassName: string;
  sizes: string;
};

export default function ImageLightbox({
  src,
  alt,
  label,
  width,
  height,
  previewClassName,
  sizes,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block h-full w-full cursor-zoom-in text-left"
        aria-label={`${label} 이미지 크게 보기`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={previewClassName}
          sizes={sizes}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mb-3 ml-auto block border border-white/30 bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Close
            </button>
            <div className="max-h-[82vh] overflow-auto bg-white">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
