'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AngelACS = () => {
  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setContainerHeight("calc(100vh - var(--navbar-height) - var(--footer-height))");
      } else {
        setContainerHeight("auto");
      }
    };

    updateHeight(); 
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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
      className="flex flex-col md:flex-row w-full gap-5 md:gap-10 px-4 md:px-10"
      style={{ height: containerHeight }}
    >

      {/* Image Section */}
      <div className="flex flex-col md:w-6/12">
        <p className="text-2xl font-bold md:mb-5">Angel ACS Website</p>
        <div className="flex flex-col w-full h-full gap-2">
          {/* Main Image */}
          <div
            className="relative w-full h-60 md:h-2/3 cursor-pointer"
            onClick={() => openModal("/angelACS/Picture4.png")}
          >
            <Image
              src="/angelACS/Picture4.png"
              alt="Main Preview"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              Summary page
            </p>
          </div>
          {/* Thumbnails */}
          <div className="flex w-full h-32 md:h-1/3 gap-2">
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/angelACS/Picture1.png")}
            >
              <Image
                src="/angelACS/Picture1.png"
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Login Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/angelACS/Picture2.png")}
            >
              <Image
                src="/angelACS/Picture2.png"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Product Detail Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/angelACS/Picture3.png")}
            >
              <Image
                src="/angelACS/Picture3.png"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Edit Product Page
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center md:w-6/12 md:pl-5">
        <div className="flex flex-col gap-5">
          <p className="text-lg">
            <span className="font-medium">Angel ACS Website</span> is a front-end web application for an online inventory management system.
          </p>

          <ul className="list-disc pl-5 text-base leading-relaxed">
            <li>Managed product information and listings with search functionality</li>
            <li>Facilitated stock management and product addition</li>
            <li>Generated sales summary reports with statistical data</li>
          </ul>

          <div className="text-base">
            <p>
              <span className="font-semibold">Role :</span> Frontend Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used :</span> TypeScript and React.js
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <p className="font-semibold">GitHub Repository :</p>
            <Link
              href="https://github.com/nkmbxy/angle-ace-web.git"
              target="_blank"
              className="text-blue-700 underline break-all"
            >
              https://github.com/nkmbxy/angle-ace-web.git
            </Link>
          </div>


        </div>
      </div>

      {/* Modal Section */}
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

export default AngelACS;
