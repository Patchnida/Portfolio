'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import Link from "next/link";

const MoreAboutSimpleBlog = () => {
  const [containerHeight, setContainerHeight] = useState("auto");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const router = useRouter(); 

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

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const galleryImages = [
    { src: "/simpleBlog/login.png", label: "Login Page" },
    { src: "/simpleBlog/register.png", label: "Register Page" },
    { src: "/simpleBlog/profile.png", label: "Profile Page" },
    { src: "/simpleBlog/editProfile.png", label: "Edit Profile Page" },
    { src: "/simpleBlog/category.png", label: "Home Page" },
    { src: "/simpleBlog/blog.png", label: "Blog Page" },
    { src: "/simpleBlog/addBlog.png", label: "Add New Blog Page" },
    { src: "/simpleBlog/editBlog.png", label: "Edit Blog Page" },
    { src: "/simpleBlog/delete.png", label: "Delete Blog Page" },
  ];

  return (
    <div
      className="flex flex-col w-full gap-5 px-4 md:px-10 py-8 bg-gray-50 overflow-auto"
      style={{ height: containerHeight }}
    >
      <div>
        <button
          onClick={() => router.back()}
          className="bg-gray-200 p-2 md:p-3 hover:bg-gray-500 hover:text-white hover:font-medium px-3 py-1 border rounded-lg"
        >
          Back
        </button>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-xl md:text-2xl font-bold mb-5">SimpleBlog Website</p>
        <div className="flex flex-col gap-6">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">SimpleBlog Website</span> is a full-stack web application for online blogging.
            </p>

            <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base space-y-2">
              <li>Supported user registration and account login</li>
              <li>Enabled blog searching and categorization</li>
              <li>Facilitated viewing, creating, editing, and deleting blogs</li>
            </ul>

            <div className="text-gray-700 text-sm md:text-base space-y-1">
              <p>
                <span className="font-semibold">Role:</span> Full Stack Developer
              </p>
              <p>
                <span className="font-semibold">Technologies Used:</span> Next.js, Tailwind CSS, and MongoDB with JavaScript
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
              <p className="text-gray-700 font-medium">GitHub Repository:</p>
              <Link
                href="https://github.com/Patchnida/simpleblog.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline break-all"
              >
                https://github.com/Patchnida/simpleblog.git
              </Link>
            </div>
          </div>

          <div className="w-full">
            <p className="text-center text-sm md:text-base pb-3">Website Preview</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  style={{ height: "200px" }}
                  onClick={() => openModal(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="rounded-lg object-contain"
                  />
                  <p className="absolute bottom-2 left-2 text-white text-xs md:text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
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

export default MoreAboutSimpleBlog;
