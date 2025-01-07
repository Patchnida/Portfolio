import Image from "next/image";

const PersonalInfo = () => {
  return (
    <div 
      className="flex w-full gap-10"
      style={{ height: "calc(100vh - var(--navbar-height) - var(--footer-height))" }}
    >
        <div className="flex justify-center w-5/12 ">
        <div className="flex justify-center items-center w-full h-full">
            <Image src="/info_image.jpg" alt="" width={390} height={300}/>
        </div>
        </div>

        <div className="flex flex-col items-center justify-center w-7/12 pl-5">
        <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">Personal Information</p>

            <div>
            <table
                border="1"
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
                <tbody className="text-xl">
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
                    <td className="align-top py-2">27/05/2004 (20 years)</td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Address</td>
                    <td className="align-top py-2">Phrapradang, Samutprakan, Thailand</td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Education</td>
                    <td className="align-top py-2">
                    B.Sc. in Applied Computer Science,
                    <p>
                        King Mongkut's University of Technology Thonburi
                    </p> 
                    </td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Phone</td>
                    <td className="align-top py-2">0638102695</td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Mail</td>
                    <td className="align-top py-2">patchnida2547@gmail.com</td>
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