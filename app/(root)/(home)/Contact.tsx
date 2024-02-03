import Link from "next/link";

export default function Contact() {
  return (
    <div className="px-7 bg-white rounded-t-[80px]">
        <div className='py-9 flex flex-col justify-center items-center text-center'>

          <h1 className="text-xl font-semibold sm:text-3xl">Contact Us</h1>
          <div className="w-24 h-1 bg-black my-1"></div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-4">
          <div className="text-center">
            <strong>Our Address</strong>
            <p>Bondowoso - East Java <br /> Indonesia</p>
          </div>
          <div className="text-center">
            <strong>Our Contact</strong>
            <p>antarctic.px@gmail.com <br /> +62 851 5060 9966</p>
          </div>
          
        </div>
        <div className="text-center flex flex-col mt-9">
          <strong>Follow us</strong>
          <div className='my-2'>

            <Link href='https://www.instagram.com/antarctic.px'>

              <i className="ri-instagram-fill text-2xl"></i>
            </Link>
            <Link href='https://www.linkedin.com/in/antarctic-px-a238902b1'>

              <i className="ri-linkedin-box-fill text-2xl mx-4"></i>
            </Link>
            <Link href='https://stackoverflow.com/users/23317877/antarctic-px'>

              <i className="ri-stack-overflow-fill text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
  )
}
