import ServiceCard from "@/components/ServiceCard";
import Project from "./Project"

export default function Service() {
  return (
    <div className="pt-16 rounded-b-[80px]  bg-blue-400 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-white sm:text-3xl">Our Service</h1>
          <div className="w-24 h-1 bg-white mt-1 mb-8"></div>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          
          <ServiceCard 
            job1="Web"
            job2="Development"
            desc="The websites we create feature an attractive design, optimal SEO, and excellent performance."
          />
          <ServiceCard 
            job1="Mobile"
            job2="Development"
            desc="We have advantages such as user friendly UI, good performance, and offline functionality"
          />
          <ServiceCard 
            job1="Graphic"
            job2="Designer"
            desc="Our graphic design showcases an immersive design and fascinating animations.
            "
          />
        </div>
        <Project />
      </div>
  )
}
