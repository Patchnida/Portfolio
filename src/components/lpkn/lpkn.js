'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LPKN = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex w-full gap-10 mt-10"
      style={{ height: "calc(100vh - var(--navbar-height) - var(--footer-height))" }}
    >
      
      <div className="flex flex-col justify-start w-6/12">
        <p className="text-2xl font-bold mb-5">LPKN Website</p>
        <div className="flex flex-col w-full h-full gap-2">
          
          <div
            className="relative w-full h-2/3 cursor-pointer"
            onClick={() => openModal("/lpkn/home.png")}
          >
            <Image
              src="/lpkn/home.png"
              alt="Main Preview"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              home page
            </p>
          </div>

          
          <div className="flex w-full h-1/3 gap-2">
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/lpkn/DateandTime.png")}
            >
              <Image
                src="/lpkn/DateandTime.png"
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Select Date and Time
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/lpkn/IDDetail.png")}
            >
              <Image
                src="/lpkn/IDDetail.png"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                ID detail page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/lpkn/DiseasePredict.png")}
            >
              <Image
                src="/lpkn/DiseasePredict.png"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Disease predict page
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-center w-6/12 pl-5">
        <div className="flex flex-col gap-5">
          <p className="text-lg">
            <span className="font-medium">LPKN Website</span> is a front-end web application for displaying environmental data and analyzing diseases affecting bird's eye chili
          </p>

          
          <ul className="list-disc pl-5 text-base leading-relaxed">
            <li>Generated real-time summary reports of environmental data, including temperature, moisture, and NPK levels</li>
            <li>Displayed environmental data with actionable recommendations</li>
            <li>Presented information on four major bird's eye chili diseases (leaf spot, leaf curl, yellowing, and whitefly) with corresponding management strategies</li>
          </ul>

          
          <div className="text-base">
            <p>
              <span className="font-semibold">Role:</span> Frontend Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used:</span> TypeScript and React.js
            </p>
          </div>

          <div className="flex gap-2">
            <p>GitHub Repository :</p>
            <Link
                href="https://github.com/Patchnida/smart-farm-website01.git"
                target="_blank"
                className="text-blue-700 underline"
            >
                https://github.com/Patchnida/smart-farm-website01.git
            </Link>
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-4/5 h-4/5">
            <Image
              src={modalImage}
              alt="Fullscreen Image"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LPKN;
