'use client'

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import Link from "next/link";

const MoreAboutRMS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const router = useRouter(); 

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const galleryImages = [
    // employee part
    { src: "/rms/employee.png", label: "Employee Page" },
    { src: "/rms/create_new_employee.png", label: "Create New Employee Page" },
    { src: "/rms/employee_detail.png", label: "Employee Detail Page" },
    { src: "/rms/edit_employee_detail.png", label: "Edit Employee Detail Page" },
    { src: "/rms/delete_employee_detail.png", label: "Delete Employee Detail Page" },

    // menu part
    { src: "/rms/menu.png", label: "Menu Page" },
    { src: "/rms/create_new_menu.png", label: "Create New Menu Page" },
    { src: "/rms/menu_detail.png", label: "Menu Detail Page" },
    { src: "/rms/edit_menu_detail.png", label: "Edit Menu Detail Page" },
    { src: "/rms/delete_menu_detail.png", label: "Delete Menu Detail Page" },

    // stock part
    { src: "/rms/stock.png", label: "Stock Page" },
    { src: "/rms/create_new_ingredient.png", label: "Create New Ingredient Page" },
    { src: "/rms/ingredient_detail.png", label: "Ingredient Detail Page" },
    { src: "/rms/edit_ingredient_detail.png", label: "Edit Ingredient Detail Page" },
    { src: "/rms/delete_ingredient_detail.png", label: "Delete Ingredient Detail Page" },
    { src: "/rms/update_stock.png", label: "Update Stock Page" },

  ];

  return (
    <div className="flex flex-col w-full min-h-screen gap-5 px-10 py-8 bg-gray-50 overflow-auto">
     
      <div>
        <button
          onClick={() => router.back()}
          className="bg-gray-200 p-3 hover:bg-gray-500 hover:text-white hover:font-medium px-3 py-1 border rounded-lg"
        >
          Back
        </button>

      </div>

      <div className="flex flex-col justify-start w-full">
        <p className="text-2xl font-bold mb-5">RMS Website</p>
        <div className="flex flex-col w-full gap-8">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">RMS Website</span> is a web application designed for restaurant management, offering the following features
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Managed employee data and scheduling</li>
              <li>Enabled menu and inventory management</li>
              <li>Displayed sales summaries</li>
            </ul>

            <div className="text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Role:</span> Full Stack Developer
              </p>
              <p>
                <span className="font-semibold">Technologies Used:</span> Node.js, Express.js, React, MongoDB.
              </p>
            </div>

           
            <div className="flex items-center space-x-2">
              <p className="text-gray-700 font-medium">GitHub Repository:</p>
              <Link
                href="https://github.com/krantharat/RMS-client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline"
              >
                https://github.com/krantharat/RMS-client.git
              </Link>
            </div>
          </div>

          <div className="w-full">
            <p className="text-center pb-3">Website Preview</p>
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  style={{ height: "250px" }}
                  onClick={() => openModal(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="rounded-lg object-contain"
                  />
                  <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
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
              className="rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreAboutRMS;
