'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SimpleBlog = () => {
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
        <p className="text-2xl font-bold mb-5">SimpleBlog Website</p>
        <div className="flex flex-col w-full h-full gap-2">
          
          <div
            className="relative w-full h-2/3 cursor-pointer"
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

          
          <div className="flex w-full h-1/3 gap-2">
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

      
      <div className="flex flex-col items-center justify-center w-6/12 pl-5">
        <div className="flex flex-col gap-5">
          <p className="text-lg">
            <span className="font-medium">SimpleBlog Website</span> is a full-stack web application for online blogging
          </p>

          
          <ul className="list-disc pl-5 text-base leading-relaxed">
            <li>Supported user registration and account login</li>
            <li>Enabled blog searching and categorization</li>
            <li>Facilitated viewing, creating, editing, and deleting blogs</li>
          </ul>

          
          <div className="text-base">
            <p>
              <span className="font-semibold">Role:</span> Full stack Developer
            </p>
            <p>
              <span className="font-semibold">Technologies Used:</span> Next.js, Tailwind CSS, and MongoDB with JavaScript
            </p>
          </div>

          <div className="flex gap-2">
            <p>GitHub Repository :</p>
            <Link
                href="https://github.com/Patchnida/simpleblog.git"
                target="_blank"
                className="text-blue-700 underline"
            >
                https://github.com/Patchnida/simpleblog.git
            </Link>
          </div>

          <div className="flex justify-end gap-2">
            <Link href="/moreAboutSimpleBlog">
                <button className="bg-gray-200 p-3 hover:bg-gray-500 hover:text-white hover:font-medium px-5 border rounded-lg">More about website preview</button>
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

export default SimpleBlog;
