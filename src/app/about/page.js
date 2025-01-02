import PersonalInfo from "@/components/personalInfo/personalInfo";
import SkillInfo from "@/components/skillInfo/skillInfo";

const About = () => {
  return (
    <div className="flex flex-col w-full py-5 px-20">
        <PersonalInfo />
        <SkillInfo />
    </div>
  );
};

export default About;
