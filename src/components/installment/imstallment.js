'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Installment = () => {
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
        <p className="text-2xl font-bold mb-5">Installment System</p>
        <div className="flex flex-col w-full h-full gap-2">
          
          <div
            className="relative w-full h-2/3 cursor-pointer"
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

          
          <div className="flex w-full h-1/3 gap-2">
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

      
      <div className="flex flex-col items-center justify-center w-6/12 pl-5">
        <div className="flex flex-col gap-5">
          <p className="text-lg">
            <span className="font-medium">Installment System</span> is a front-end web application for installment management and overdue tracking systems for SMEs
          </p>

          
          <ul className="list-disc pl-5 text-base leading-relaxed">
            <li>Generated summary reports of installment transactions with statistical data</li>
            <li>Enabled customer data search, recording, and verification</li>
            <li>Facilitated payment processing and overdue tracking</li>
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
                href="https://github.com/talnw1123/installments-web.git"
                target="_blank"
                className="text-blue-700 underline"
            >
                https://github.com/talnw1123/installments-web.git
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

export default Installment;
