import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const tableCellClass = "align-top py-2";

  return (
    <section className="flex flex-col md:flex-row w-full p-5 gap-5 md:gap-10">
      {/* Contact Information Section */}
      <article className="flex flex-col justify-center w-full md:w-6/12 md:p-24 md:pl-36 gap-5">
        <h2 className="text-xl md:text-2xl font-bold md:text-left">
          Contact Information
        </h2>

        <table
          border="1"
          style={{ borderCollapse: "collapse", width: "100%" }}
          className="text-base md:text-xl"
        >
          <tbody>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">Phone</td>
              <td className={tableCellClass}>0638102695</td>
            </tr>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">Mail</td>
              <td className={tableCellClass}>
                  patchnida.hemw@gmail.com
              </td>
            </tr>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">
                LinkedIn
              </td>
              <td className={tableCellClass}>
                <Link
                  href="https://www.linkedin.com/in/patchnida-hemwannanukul-38b71a345/?trk=opento_sprofile_details"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  title="Visit LinkedIn Profile"
                >
                  Patchnida's LinkedIn Profile
                </Link>
              </td>
            </tr>
            <tr>
              <td className="font-semibold w-20 md:w-48 align-top py-2">
                Github
              </td>
              <td className={tableCellClass}>
                <Link
                  href="https://github.com/Patchnida"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  title="Visit LinkedIn Profile"
                >
                  Patchnida's Github Profile
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>

      {/* Image Section */}
      <aside className="flex justify-center items-center w-full md:w-6/12">
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src="/contact_image.png"
            alt="Contact Illustration"
            width={420}
            height={200}
            priority
          />
        </div>
      </aside>
    </section>
  );
};

export default Contact;
