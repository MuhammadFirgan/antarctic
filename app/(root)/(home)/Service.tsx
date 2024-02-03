import ServiceCard from "@/components/ServiceCard";
import Project from "./Project"

export default function Service() {
  return (
    <div className="mt-16 rounded-b-[80px] shadow-xl bg-blue-400">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-white sm:text-3xl">Our Service</h1>
          <div className="w-24 h-1 bg-white mt-1 mb-8"></div>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          
          <ServiceCard 
            job1="Web"
            job2="Development"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum dolores necessitatibus dolore aut ullam assumenda minima vel quod? Iste quo quas quis officia quae corporis at? Aliquam, minima sed?"
          />
          <ServiceCard 
            job1="Mobile"
            job2="Development"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum dolores necessitatibus dolore aut ullam assumenda minima vel quod? Iste quo quas quis officia quae corporis at? Aliquam, minima sed?"
          />
          <ServiceCard 
            job1="Graphic"
            job2="Designer"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum dolores necessitatibus dolore aut ullam assumenda minima vel quod? Iste quo quas quis officia quae corporis at? Aliquam, minima sed?"
          />
        </div>
        <Project />
      </div>
  )
}
