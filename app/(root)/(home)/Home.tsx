import { motion } from 'framer-motion'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import ProfileImg from '@/components/ProfileImg';

export default function Home() {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-between rounded-b-[80px] shadow-xl bg-white">
        <motion.div
           initial={{ x: -20 }}
           whileInView={{ x: 20 }}
          className="max-w-md px-7 lg:px-10 lg:max-w-lg">
          <h1 className="text-2xl font-semibold lg:text-4xl">Connecting Ideas Stimulates Innovation</h1>
          <p className="text-sm mt-2 mb-9">Antarctic.px is a high-tech IT company with a strong emphasis on innovation and creativity</p>
          <Button asChild className="bg-blue-400">
            <Link href="/">Hire Us</Link>
          </Button>

        </motion.div>
        <motion.div 
          initial={{ x: 20 }}
          whileInView={{ x: -20 }}        
          className="flex gap-3 flex-wrap justify-center sm:px-10">
          <ProfileImg source='firgan.png' name='Firgan' job='Frontend' layout='mt-8 sm:order-1'/>
          <ProfileImg source='firgan.png' name='Farel' job='Backend' layout='sm:order-2'/>
          <ProfileImg source='firgan.png' name='Afton' job='Designer' layout='mt-8 sm:order-3'/>
          <ProfileImg source='firgan.png' name='Firgan' job='Frontend' layout='sm:order-4'/>
        </motion.div>
        {/* about */}
        <div className='max-w-md mx-auto my-24 px-10'>
          <div className='flex flex-col justify-center items-center text-center'>

            <h1 className="text-xl font-semibold sm:text-3xl">Who Are We</h1>
            <div className="w-24 h-1 bg-black my-1"></div>
            <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate accusantium ullam inventore mollitia itaque iure, non autem aut corporis quo deserunt enim saepe totam quia quis, dolorem dignissimos ipsam?</p>
          </div>
          
        </div>

        {/* end about */}
      </div>
  )
}
