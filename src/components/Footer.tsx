import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter ,FaInstagram ,FaLinkedin  } from "react-icons/fa";
import { RiH2 } from "react-icons/ri";
const Footer = () => {
  return (
    <div className=' bg-[#2F9EBF]' id='FOOTER'>

        <div className='flex flex-col md:flex-row md:items-start px-10 md:px-0 justify-around gap-10 md:gap-3     text-gray-600 py-14' >
            
            <div className="divF1 flex flex-col gap-1">

              <div className="LOGO flex items-center  gap-x-6">
                <Image src="/navbar/logoNav.png"  alt="logo" className="w-10 h-10 text-white" width={50} height={50}/>
                <h1 className="text-white font-semibold text-2xl">Master-Laundry.co</h1>
              </div>
              <h2 className="text-white font-semibold mb-1 mt-8 text-center">We Provides Best Quality of Service</h2>

             

              

            </div>

            <div className="divF2 flex flex-col gap-1">
              <h1 className="text-white font-semibold mb-1">Resources</h1>
              <Link href="/">API & documentation</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Use cases</Link>
              <Link href="/">Platform status</Link>
            </div>

            <div className="divF3 flex flex-col gap-1">
              <h1 className="text-white font-semibold mb-1">Company</h1>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms and condition</Link>
              <Link href="/">About us</Link>
              <Link href="/">Contact us</Link>
            </div>
           
            
            
        </div>

        <div className='text-center  relative pb-5 '>

           <div className="absolute left-[20%]  lg:left-[37%] -top-4 bg-white px-5 flex flex-col items-center justify-center gap-5 text-[#707581] p-2">

            <div className="flex items-center gap-5 "> 
              <p className="   text-xs ">© Copyright masterlaundry.co 2024</p>
              <Link href="/" className="hidden md:block"><FaFacebook /></Link>
              <Link href="/" className="hidden md:block"><FaTwitter  /></Link>
              <Link href="/" className="hidden md:block"><FaInstagram /></Link>
              <Link href="/" className="hidden md:block"><FaLinkedin /></Link>
            </div>
             <div className="flex  juatify-around gap-4 md:hidden ">
                <Link href="/"><FaFacebook /></Link>
                <Link href="/"><FaTwitter /></Link>
                <Link href="/"><FaInstagram /></Link>
                <Link href="/"><FaLinkedin /></Link>
             </div>

           </div>

           <div className="  w-full bg-white h-[0.5px] mb-10"></div>

        </div>

   </div>
  )
}

export default Footer