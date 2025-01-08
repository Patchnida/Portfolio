'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Installment = () => {
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
      <div className="flex flex-col md:w-6/12 w-full">
        <p className="text-2xl font-bold mb-5">Installment System</p>
        <div className="flex flex-col w-full h-full gap-3">
          {/* Main Image */}
          <div
            className="relative w-full h-48 md:h-2/3 cursor-pointer"
            onClick={() => openModal("/installment/Picture1.jpg")}
          >
            <Image
              src="/installment/Picture1.jpg"
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
          <div className="flex w-full h-24 md:h-1/3 gap-2">
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/installment/Picture2.jpg")}
            >
              <Image
                src="/installment/Picture2.jpg"
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Find Customer Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/installment/Picture3.jpg")}
            >
              <Image
                src="/installment/Picture3.jpg"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Customer Profile Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/installment/Picture4.jpg")}
            >
              <Image
                src="/installment/Picture4.jpg"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Edit Customer Profile page
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start justify-center md:w-6/12 w-full md:pl-5 gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-medium">Installment System</span> is a front-end web application for installment management and overdue tracking systems for SMEs
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed">
            <li>Generated summary reports of installment transactions with statistical data</li>
            <li>Enabled customer data search, recording, and verification</li>
            <li>Facilitated payment processing and overdue tracking</li>
          </ul>

          <div className="text-sm md:text-base">
            <p>
              <span className="font-semibold">Role:</span> Frontend Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used:</span> TypeScript and React.js
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <p className="font-semibold">GitHub Repository :</p>
            <Link
              href="https://github.com/talnw1123/installments-web.git"
              target="_blank"
              className="text-blue-700 underline break-all"
            >
              https://github.com/talnw1123/installments-web.git
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

export default Installment;
