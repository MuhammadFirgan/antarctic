'use client'


import { useEffect, useState } from "react";
import Home from './Home'
import Service from './Service'
import Contact from "./Contact"


export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); 
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
   
    <main className="mt-12  sm:mt-20 bg-blue-400 relative overflow-hidden">      
      <Home />
      <Service />
      
      <Contact />

      {/* end Contact */}
      <i className="ri-arrow-up-line text-xl fixed bottom-0 right-0 px-3 py-2 rounded-full bg-black text-white my-20 mx-7 sm:m-8 cursor-pointer" onClick={scrollToTop}></i>
    </main>

  );
}
