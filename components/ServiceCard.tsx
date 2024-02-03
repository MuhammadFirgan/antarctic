'use client'
import { useState } from 'react';
interface Props {
    job1: string;
    job2: string;
    desc: string
}


export default function ServiceCard({ job1, job2, desc } : Props) {
  const [ onHover, setOnHover ] = useState(false)
  
  const handleHover = () => {
    setOnHover(!onHover)
  }
  return (
    <div className='flex flex-col items-center '>
      <div className={`w-2 h-2 rounded-full bg-white ${onHover ? 'block transition-all duration-1000 ease-in-out' : 'hidden'}`}></div>
        <div className="w-72 bg-white p-5 rounded-ee-[40px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out mt-5 sm:mt-10" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="max-w-10"><span className="font-semibold text-2xl">{job1}</span> <span className="text-base">{job2}</span></div>
            <div className="w-24 h-1 bg-black my-1 hover:bg-white"></div>
            <p className="mt-7">{desc}</p>
            <h5 className='text-right mt-9 font-semibold'>Antarctic.<span className='font-normal'>px</span></h5>
        </div>
    </div>
  )
}
