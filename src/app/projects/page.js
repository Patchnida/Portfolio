import AngelACS from "@/components/angelACS/angelACS";
import Installment from "@/components/installment/imstallment";
import LPKN from "@/components/lpkn/lpkn";
import RMS from "@/components/rms/rms";
import SimpleBlog from "@/components/simpleBlog/simpleBlog";

const Projects = () => {
  return (
    <div className="flex flex-col w-full py-5 px-20">
      <AngelACS />
      <Installment />
      <RMS />
      <SimpleBlog />
      <LPKN />
    </div>
    
  )
}

export default Projects;