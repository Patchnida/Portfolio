const SkillInfo = () => {
    return (
      <div className="flex flex-row w-full mt-20 gap-10">
        <div className="flex flex-col w-6/12 pr-5 border-r-2">
          {/* Section Title */}
          <p className="text-2xl font-bold mb-4">Interests</p>
  
          {/* Skills List */}
          <ul className="list-disc text-xl pl-5">
            <li className="mb-5">
              <p className="font-semibold mb-1">Web Development</p>
              <p className="text-lg">
                Passionate about creating dynamic and responsive web applications. Enjoy experimenting with new frameworks and technologies to enhance user experience.
              </p>
            </li>
            <li className="mb-5">
              <p className="font-semibold mb-1">UI/UX Design</p>
              <p className="text-lg">
              Fascinated by designing intuitive and engaging user interfaces, applying user-centered design principles to create functional and visually appealing websites.
              </p>
            </li>
            <li className="mb-5">
              <p className="font-semibold mb-1">Problem Solving</p>
              <p className="text-lg">
              Thrive on the challenges of debugging, optimizing performance, and finding creative solutions to complex problems in web development.
              </p>
            </li>
            <li className="mb-2">
              <p className="font-semibold">Collaborative Projects</p>
              <p className="text-lg">
              Enjoy working in team environments, sharing ideas, and participating in hackathons and open-source projects to grow and improve my skills.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-6/12 gap-10">
            <div>
                {/* Section Title */}
                 <p className="text-2xl font-bold mb-4">Language</p>
  
                {/* Skills List */}
                <ul className="list-disc text-xl pl-5">
                    <li className="mb-2">
                        <p className="text-lg">Thai</p>
                    </li>
                    <li className="mb-2">
                        <p className="text-lg">English</p>
                    </li>
                </ul>
            </div>
            <div>
                {/* Section Title */}
                <p className="text-2xl font-bold mb-4">Interests</p>
  
                {/* Skills List */}
                <ul className="list-disc text-xl pl-5">
                    <li className="mb-5">
                    <p className="font-semibold mb-1">Programming Languages</p>
                    <p className="text-lg">
                        Experienced in HTML, CSS, JavaScript, and TypeScript.
                    </p>
                    </li>
                    <li className="mb-5">
                    <p className="font-semibold mb-1">Frameworks and Libraries</p>
                    <p className="text-lg">
                        Experienced with React, Next.js, Node.js and Express
                    </p>
                    </li>
                    <li className="mb-5">
                    <p className="font-semibold mb-1">Database Management</p>
                    <p className="text-lg">
                        Knowledgeable in SQL, Firebase and MongoDB
                    </p>
                    </li>
                    <li className="mb-2">
                    <p className="font-semibold">Version Control</p>
                    <p className="text-lg">
                        Experienced with Git and GitHub for version control and collaboration.
                    </p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default SkillInfo;
  