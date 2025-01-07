import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex w-full p-5">
      <div className="flex flex-col justify-center w-6/12 p-24 pl-36 gap-5">
        <p className="text-2xl font-bold">
          Contact Information
        </p>

        <table
                border="1"
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
                <tbody className="text-xl">
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Phone</td>
                    <td className="align-top py-2">0638102695</td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Line</td>
                    <td className="align-top py-2">@patchnida2547 (with out @)</td>
                </tr>
                <tr>
                    <td className="font-semibold w-48 align-top py-2">Mail</td>
                    <td className="align-top py-2">patchnida.hemw@gmail.com</td>
                </tr>
                </tbody>
            </table>
      </div>

      <div className="flex justify-center items-center w-6/12 ">
        <div className="flex justify-center items-center h-full w-10/12">
          <Image src="/contact_image.png" alt="" width={420} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default Contact;