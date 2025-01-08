'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RMS = () => {
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
        <p className="text-2xl font-bold mb-5">RMS Website</p>
        <div className="flex flex-col w-full h-full gap-3">
          {/* Main Image */}
          <div
            className="relative w-full h-48 md:h-2/3 cursor-pointer"
            onClick={() => openModal("/rms/employee.png")}
          >
            <Image
              src="/rms/employee.png"
              alt="Main Preview"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              Employee page
            </p>
          </div>
          {/* Thumbnails */}
          <div className="flex w-full h-24 md:h-1/3 gap-2">
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/rms/menu.png")}
            >
              <Image
                src="/rms/menu.png"
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Menu Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/rms/stock.png")}
            >
              <Image
                src="/rms/stock.png"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Stock Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/rms/update_stock.png")}
            >
              <Image
                src="/rms/update_stock.png"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Update Stock Page
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start justify-center md:w-6/12 w-full md:pl-5 gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-medium">RMS Website</span> is a web application designed for restaurant management, offering the following features
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed">
            <li>Managed employee data and scheduling</li>
            <li>Enabled menu and inventory management</li>
            <li>Displayed sales summaries</li>
          </ul>

          <div className="text-sm md:text-base">
            <p>
              <span className="font-semibold">Role:</span> Full stack Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used:</span> Node.js, Express.js, React, MongoDB.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <p className="font-semibold">GitHub Repository :</p>
            <Link
              href=" https://github.com/krantharat/RMS-client.git"
              target="_blank"
              className="text-blue-700 underline break-all"
            >
               https://github.com/krantharat/RMS-client.git
            </Link>
          </div>

          <div className="flex w-full justify-start md:justify-end gap-2">
            <Link href="/moreAboutRMS" className="flex w-full justify-start md:justify-end">
                <button className="bg-gray-200 w-full md:w-fit p-3 hover:bg-gray-500 hover:text-white hover:font-medium px-5 border rounded-lg">More about website preview</button>
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

export default RMS;
