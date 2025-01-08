const SkillInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-10 w-full gap-5">
      <div className="flex flex-col w-full md:w-6/12 pr-0 md:pr-5 md:border-b-0 md:border-r-2">
        {/* Section Title */}
        <p className="text-xl md:text-2xl font-bold mb-4">Interests</p>

        {/* Skills List */}
        <ul className="list-disc text-lg md:text-xl px-5">
          <li className="mb-5">
            <p className="font-semibold mb-1">Web Development</p>
            <p className="text-base md:text-lg">
              Passionate about creating dynamic and responsive web applications. Enjoy experimenting with new frameworks and technologies to enhance user experience.
            </p>
          </li>
          <li className="mb-5">
            <p className="font-semibold mb-1">UI/UX Design</p>
            <p className="text-base md:text-lg">
              Passionate about designing intuitive and engaging user interfaces, leveraging user-centered design principles to deliver functional and visually appealing solutions.
            </p>
          </li>
          <li className="mb-5">
            <p className="font-semibold mb-1">Problem Solving</p>
            <p className="text-base md:text-lg">
              I am passionate about facing new challenges. While challenges can be difficult, each one is an opportunity for growth.
            </p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Collaborative Projects</p>
            <p className="text-base md:text-lg">
              Enjoys collaborating in a team environment and is passionate about communication and idea exchange to achieve goals together.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full md:w-6/12 md:pl-5 gap-10">
          <div>
              {/* Section Title */}
               <p className="text-xl md:text-2xl font-bold mb-4">Language</p>

              {/* Skills List */}
              <ul className="list-disc text-lg md:text-xl pl-5">
                  <li className="mb-2">
                      <p className="text-base md:text-lg">Thai</p>
                  </li>
                  <li className="mb-2">
                      <p className="text-base md:text-lg">English</p>
                  </li>
              </ul>
          </div>
          <div>
              {/* Section Title */}
              <p className="text-xl md:text-2xl font-bold mb-4">Skills</p>

              {/* Skills List */}
              <ul className="list-disc text-lg md:text-xl pl-5">
                  <li className="mb-5">
                  <p className="font-semibold mb-1">Programming Languages</p>
                  <p className="text-base md:text-lg">
                      Experienced in HTML, CSS, JavaScript, and TypeScript.
                  </p>
                  </li>
                  <li className="mb-5">
                  <p className="font-semibold mb-1">Frameworks and Libraries</p>
                  <p className="text-base md:text-lg">
                      Experienced with React, Next.js, Node.js, Express.js and TailwindCSS.
                  </p>
                  </li>
                  <li className="mb-5">
                  <p className="font-semibold mb-1">Database Management</p>
                  <p className="text-base md:text-lg">
                      Knowledgeable in MySQL, Firebase and MongoDB.
                  </p>
                  </li>
                  <li className="mb-2">
                  <p className="font-semibold">Tools</p>
                  <p className="text-base md:text-lg">
                      Experienced with Git, Figma, VSCode and Postman.
                  </p>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default SkillInfo;
