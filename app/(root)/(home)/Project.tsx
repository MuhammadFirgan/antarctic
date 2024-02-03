import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from "next/link"
  
export default function Project() {
    return (
        <div className="pt-24">
            <div className='flex flex-col justify-center items-center text-center bg-white py-24 rounded-b-[80px] px-10 shadow-xl '>

                <h1 className="text-xl font-semibold sm:text-3xl">Our Project</h1>
                <div className="w-24 h-1 bg-black my-1"></div>
                <small className="max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem, velit rerum voluptatum doloremque id aliquid vero tenetur deleniti dicta sit reiciendis obcaecati repudiandae. Nulla eligendi quia ducimus labore at.</small>
                <div className='px-10 min-w-full py-10'>
                    <Carousel className=''>
                        <CarouselContent className="">
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-3'>Company Profile</h1>
                                        <Badge className="bg-blue-400 mt-3">
                                            <Link href="/">Visit Link</Link>
                                        </Badge>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-3'>Company Profile</h1>
                                        <Badge className="bg-blue-400 mt-3">
                                            <Link href="/">Visit Link</Link>
                                        </Badge>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-3'>Company Profile</h1>
                                        <Badge className="bg-blue-400 mt-3">
                                            <Link href="/">Visit Link</Link>
                                        </Badge>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-3'>Company Profile</h1>
                                        <Badge className="bg-blue-400 mt-3">
                                            <Link href="/">Visit Link</Link>
                                        </Badge>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 sm:basis-72 ml-5">
                                <figure>
                                    <img src="/img/project.jpg" alt="" className='rounded-lg' />
                                    <figcaption className="text-left">
                                        <h1 className='mt-3'>Company Profile</h1>
                                        <Badge className="bg-blue-400 mt-3">
                                            <Link href="/">Visit Link</Link>
                                        </Badge>
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