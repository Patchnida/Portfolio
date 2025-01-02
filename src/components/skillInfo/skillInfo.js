const SkillInfo = () => {
    return (
      <div className="flex flex-row w-full mt-20 gap-10">
        <div className="flex flex-col w-6/12 border-r-2">
          {/* Section Title */}
          <p className="text-2xl font-bold mb-4">Skill Information</p>
  
          {/* Skills List */}
          <ul className="list-disc pl-5">
            <li className="mb-3">
              <p className="font-semibold">Web Development</p>
              <p>
                Passionate about creating dynamic and responsive web applications. Enjoy experimenting with new frameworks and technologies to enhance user experience.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-6/12 gap-10">
            <div>
                {/* Section Title */}
                <p className="text-2xl font-bold mb-4">Skill Information</p>
    
                {/* Skills List */}
                <ul className="list-disc pl-5">
                    <li className="mb-3">
                    <p className="font-semibold">Web Development</p>
                    <p>
                        Passionate about creating dynamic and responsive web applications. Enjoy experimenting with new frameworks and technologies to enhance user experience.
                    </p>
                    </li>
                </ul>
            </div>
            <div>
                {/* Section Title */}
                <p className="text-2xl font-bold mb-4">Skill Information</p>
    
                {/* Skills List */}
                <ul className="list-disc pl-5">
                    <li className="mb-3">
                    <p className="font-semibold">Web Development</p>
                    <p>
                        Passionate about creating dynamic and responsive web applications. Enjoy experimenting with new frameworks and technologies to enhance user experience.
                    </p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default SkillInfo;
  