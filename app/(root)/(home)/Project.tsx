
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  
export default function Project() {
    return (
        <div className="pt-24" id="project">
            <div className='flex flex-col justify-center items-center text-center bg-white py-24 px-10 '>

                <h1 className="text-xl font-semibold sm:text-3xl">Our Project</h1>
                <div className="w-24 h-1 bg-black my-1"></div>
                <small className="max-w-md">Here are some examples of our projects—a website for business with an appealing and elegant design.</small>
                <div className='px-10 min-w-full py-10'>
                    <Carousel className=''>
                        <CarouselContent className="">
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-5 text-center text-xl italic font-semibold'>Company Profile</h1>
                                        
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            
                            
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
       

        </div>
    )
}