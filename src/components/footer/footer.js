import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-white w-full h-16 shadow-t-md sticky bottom-0">
        <div className="flex gap-4 justify-end mx-5 items-center my-0 py-2 w-auto h-full border-t-2">
            <Link href="tel:0638102695">
                <Image src="/phone.png" alt="" width={30} height={30}/>
            </Link>
            <Link href="mailto:patchnida.hemw@gmail.com" passHref>
                <Image src="/email.png" alt="" width={30} height={30}/>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/patchnida-hemwannanukul-38b71a345/?trk=opento_sprofile_details" passHref>
                <Image src="/linkedin.png" alt="" width={30} height={30}/>
            </Link>
            <Link target="_blank" href="https://github.com/Patchnida" passHref>
                <Image src="/github.png" alt="" width={30} height={30}/>
            </Link>
        </div>
    </div>
        

  )
}

export default Footer;