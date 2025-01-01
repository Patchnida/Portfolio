import Image from "next/image";

export default function Home() {
  return (
      <main className="flex w-full p-5">
        <div className="flex flex-col justify-center w-7/12 p-24 gap-5">
          <p className="text-2xl font-medium">
            Hello, It’s me
          </p>

          <div className="flex flex-col gap-3 py-2">
            <h1 className="text-5xl font-bold">
              Patchnida 
            </h1>
            <h1 className="text-5xl font-bold">
                Hemwannanukul
            </h1> 
          </div>

          <p className="text-xl font-light">
            I am passionate about <b className="font-semibold">Front End Development</b> and am constantly learning more about it. 
          </p>
          <p className="text-xl font-light">
            This portfolio website includes my basic information, skills, projects, and contact details. If you're interested, please feel free to contact me.
          </p>
        </div>
        <div className="flex justify-center items-center w-5/12 bg-gray-200">

          part 2
        </div>
      </main>
  );
}
