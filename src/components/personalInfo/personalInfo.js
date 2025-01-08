'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

const PersonalInfo = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row w-full gap-5"
      style={{
        height: isLargeScreen
          ? "calc(100vh - var(--navbar-height) - var(--footer-height))"
          : "auto",
      }}
    >
        {/* Image Section */}
        <div className="flex justify-end w-full md:w-4/12">
          <div className="flex justify-end items-center w-full h-full">
            <Image src="/info_image.jpg" alt="" width={390} height={300}/>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-8/12 md:pl-5 order-2 md:order-1">
          <div className="flex flex-col gap-5">
            <p className="text-xl md:text-2xl font-bold">Personal Information</p>

            <div>
              <table
                border="1"
                style={{ borderCollapse: "collapse", width: "100%" }}
              >
                <tbody className="text-lg md:text-xl">
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Name</td>
                    <td className="align-top py-2">Patchnida Hemwannanukul</td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Nickname</td>
                    <td className="align-top py-2">Pin</td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Birthday</td>
                    <td className="align-top py-2">27 May 2004 (20 years)</td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Address</td>
                    <td className="align-top py-2">Samutprakan, Thailand</td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Education</td>
                    <td className="align-top py-2">
                      B.Sc. in Applied Computer Science,
                      <p>
                        King Mongkut's University of Technology Thonburi (TH) 
                      </p> 
                      
                      <p className="text-end">
                        2022–Present 
                      </p>
                      <p className="text-end">
                        (Current GPAX : 3.47)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Phone</td>
                    <td className="align-top py-2">+66 63-810-2695</td>
                  </tr>
                  <tr>
                    <td className="font-semibold w-48 align-top py-2">Mail</td>
                    <td className="align-top py-2">patchnida.hemw@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PersonalInfo;
