'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SimpleBlog = () => {
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
        <p className="text-2xl font-bold mb-5">SimpleBlog Website</p>
        <div className="flex flex-col w-full h-full gap-3">
          {/* Main Image */}
          <div
            className="relative w-full h-48 md:h-2/3 cursor-pointer"
            onClick={() => openModal("/simpleBlog/category.png")}
          >
            <Image
              src="/simpleBlog/category.png"
              alt="Main Preview"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              Home page
            </p>
          </div>
          {/* Thumbnails */}
          <div className="flex w-full h-24 md:h-1/3 gap-2">
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/simpleBlog/login.png")}
            >
              <Image
                src="/simpleBlog/login.png"
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
              onClick={() => openModal("/simpleBlog/profile.png")}
            >
              <Image
                src="/simpleBlog/profile.png"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Profile Page
              </p>
            </div>
            <div
              className="relative w-1/3 h-full cursor-pointer"
              onClick={() => openModal("/simpleBlog/blog.png")}
            >
              <Image
                src="/simpleBlog/blog.png"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                Blog Page
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start justify-center md:w-6/12 w-full md:pl-5 gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-medium">SimpleBlog Website</span> is a full-stack web application for online blogging
          </p>

          <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed">
            <li>Supported user registration and account login</li>
            <li>Enabled blog searching and categorization</li>
            <li>Facilitated viewing, creating, editing, and deleting blogs</li>
          </ul>

          <div className="text-sm md:text-base">
            <p>
              <span className="font-semibold">Role:</span> Full stack Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used:</span> Next.js, Tailwind CSS, and MongoDB with JavaScript
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <p className="font-semibold">GitHub Repository :</p>
            <Link
              href="https://github.com/Patchnida/simpleblog.git"
              target="_blank"
              className="text-blue-700 underline break-all"
            >
              https://github.com/Patchnida/simpleblog.git
            </Link>
          </div>

          <div className="flex w-full justify-start md:justify-end gap-2">
            <Link href="/moreAboutSimpleBlog" className="flex w-full justify-start md:justify-end">
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

export default SimpleBlog;
