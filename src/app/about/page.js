import PersonalInfo from "@/components/personalInfo/personalInfo";
import SkillInfo from "@/components/skillInfo/skillInfo";

const About = () => {
  return (
    <div className="flex flex-col w-full py-5 px-5 gap-10">
        <div>
          <PersonalInfo />
        </div>
        <div>
          <SkillInfo />
        </div>
    </div>
  );
};

export default About;
