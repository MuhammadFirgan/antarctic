import { motion } from 'framer-motion'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import ProfileImg from '@/components/ProfileImg';

export default function Home() {
  return (
    <div className="flex flex-wrap gap-10 mt-14 items-center justify-between bg-white pb-20 sm:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md px-7 lg:px-10 lg:max-w-lg">
          <h1 className="text-2xl font-black lg:text-6xl">Connecting Ideas Stimulates Innovation</h1>
          <p className="text-sm mt-2 mb-9">Antarctic.px is a high-tech IT company with a strong emphasis on innovation and creativity</p>
          <Button asChild className="bg-blue-400">
            <Link href="/#contact">Hire Us</Link>
          </Button>
         

        </motion.div>
        <motion.div 
          initial={{ x: 100 }}
          whileInView={{ x: -40 }}        
          className="flex gap-7 flex-wrap justify-center sm:gap-10  duration-150">
          <ProfileImg source='firgan.png' name='Firgan' job='Frontend' layout='mt-8 sm:order-1 border-tl-xl shadow-xl'/>
          <ProfileImg source='farel.png' name='Farel' job='Backend' layout='sm:order-2 w-[115px] border-tl-xl shadow-xl'/>
          <ProfileImg source='afton.png' name='Afton' job='Designer' layout='mt-8 sm:order-3 border-tl-xl shadow-xl'/>
          <ProfileImg source='reyhan.png' name='Reyhan' job='Digital Marketing' layout='sm:order-4 border-tl-2xl shadow-xl'/>
        </motion.div>
        {/* about */}
        <div className='max-w-md mx-auto  px-10'>
          <div className='flex flex-col justify-center items-center text-center'>

            <h1 className="text-xl font-semibold sm:text-3xl">Who Are We</h1>
            <div className="w-24 h-1 bg-black my-1"></div>
            <p className="text-sm mt-3">Antartic PX is an IT company that provides safe, fast and reliable website and mobile app creation services. We are located in Bondowoso City, East Java Province, Indonesia. We founded this company with enthusiasm and responsibility so that customers are satisfied with our services.
</p>
          </div>
          
        </div>

        {/* end about */}
      </div>
  )
}
