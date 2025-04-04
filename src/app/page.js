import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full p-5">
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-5/12 order-1 md:order-2 mb-5 md:mb-0">
        <Image src="/home_image.png" alt="" width={420} height={300} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center w-full md:w-7/12 md:px-24 gap-5 order-2 md:order-1">
        <p className="text-lg md:text-2xl font-medium">Hello, It’s me</p>

        <div className="flex flex-col gap-3 py-2">
          <h1 className="text-3xl md:text-5xl font-bold">Patchnida</h1>
          <h1 className="text-3xl md:text-5xl font-bold">Hemwannanukul</h1>
        </div>

        <p className="text-base md:text-xl font-light">
          I am passionate about <b className="font-semibold">Front End Developer</b> with a growing interest in <b className="font-semibold"> Full Stack Developer </b> and <b className="font-semibold"> UX/UI Design </b>, and I am continually learning to become an even better version of myself!
        </p>
        <p className="text-base md:text-xl font-light">
        This portfolio showcases my basic information, skills, projects, and contact details. If you're interested, please feel free to contact me.
        </p>
      </div>
    </main>
  );
}
