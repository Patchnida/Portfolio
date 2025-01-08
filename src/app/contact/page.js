import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full p-5 gap-5 md:gap-10">
      {/* Contact Information Section */}
      <div className="flex flex-col justify-center w-full md:w-6/12 md:p-24 md:pl-36 gap-5">
        <p className="text-xl md:text-2xl font-bold md:text-left">
          Contact Information
        </p>

        <table
          border="1"
          style={{ borderCollapse: "collapse", width: "100%" }}
          className="text-base md:text-xl"
        >
          <tbody>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">Phone</td>
              <td className="align-top py-2">0638102695</td>
            </tr>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">Line</td>
              <td className="align-top py-2">@patchnida2547 (without @)</td>
            </tr>
            <tr>
              <td className="font-semibold w-20 md:w-48align-top py-2">Mail</td>
              <td className="align-top py-2">patchnida.hemw@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-6/12">
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src="/contact_image.png"
            alt="Contact Image"
            width={420}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
