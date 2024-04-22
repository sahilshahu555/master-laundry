import Link from "next/link"
import Image from "next/image"
import { IoIosMailUnread } from "react-icons/io";
import { TbMail } from "react-icons/tb";

import { FaFacebook, FaTwitter ,FaInstagram ,FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-[#2F9EBF] py-4 md:py-0' id='FOOTER'>

        <div className="divF1 flex flex-col gap-1 py-4 md:tracking-wide">
              <div className="LOGO flex flex-col md:flex-row items-center justify-center gap-x-16 gap-y-5 md:gap-y-0">
                <Image src="/navbar/logoNav.png"  alt="logo" className="w-14 h-14 text-white " width={50} height={50}/>
                <h1 className="text-white font-semibold text-2xl md:text-3xl">MASTER LAUNDRY SERVICES</h1>
              </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-start px-10 justify-around gap-10 md:gap-0 text-white  py-8 tracking-widest'  >

            <div className="divF1 flex flex-col gap-1 md:w-[25%] md:ml-52">
              <h1 className="text-white font-semibold mb-2 text-xl ">Contacts</h1>

              <Link href="/">
                <div className='div1 flex gap-4   items-center     py-1   ' >
                   <Image src="/page1/logo1.svg" alt="logo2" width={50} height={50} className='w-5 h-5'/>
                   <p className=''>+91 7888005889</p>
                </div>
              </Link>

              <Link href="/">
                <div className='div2 flex gap-4   items-center    py-1 ' >
                   <Image src="/page1/logo2.svg" alt="logo2" width={50} height={50} className='w-5 h-5'/>
                   <p className=''>{"www.masterlaundry.com"}</p>
                </div>
              </Link>

              <Link href="/">
                <div className='div3 flex gap-4  items-center bg-[#2F9EBF]  py-1   ' >
                  <TbMail className='w-5 h-5   text-white'/>
                  <p className=''>ml.masterlaundry@gmail.com</p>
                </div>
              </Link>

              <Link href="/">
                <div className='div2 flex gap-4   items-start    py-1 ' >
                   <Image src="/page1/logo4.svg" alt="logo2" width={50} height={50} className='w-5 h-5'/>
                  <p className=''>{"Gaddi Godam, Kamptee Road, Sadar, Nagpur 440001."}</p>
                </div>
              </Link>

            </div>

            <div className="divF2 flex flex-col gap-1 md:w-[25%]">
              <h1 className="text-white font-semibold mb-2 text-xl">Company</h1>
              <Link href="/#TERMS">Privacy policy</Link>
              <Link href="/#TERMS">Terms and condition</Link>
              <Link href="/#ABOUT">About us</Link>
              <Link href="/#FOOTER">Contact us</Link>
            </div>
           
        </div>

        <h2 className="text-white font-semibold  mx-2 text-center tracking-wide 
       ">One Executive Is 24/7 Available For Our Clients</h2>

        <div className='text-center mt-10 relative pb-3'>

           <div className="absolute left-[20%] md:left-[27%] lg:left-[35%] -top-4 bg-white px-5 flex flex-col items-center justify-center gap-5 text-[#2F9EBF] p-2">

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