"use client"
import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
const Navbar = () => {
    const[menu,setMenu] = useState(false)
  return (

        <nav id="nav" className="NAVBAR bg-white text-black  flex items-center justify-around py-2 sticky top-0 
         lg:gap-24 border-b">
            

            <div className="LOGO hidden md:flex  items-center justify-center gap-0">
               <Link href="/#">
                 <Image src="/navbar/logoNav.png"  alt="logo" className="w-12 h-12" width={50} height={50}/>
               </Link >
            </div>

            <div className="LAPTOP-VIEW hidden md:flex justify-center  items-center   ">
               
                <div className="flex gap-10 ">
                    <Link  href="/">Home</Link>
                    <Link  href="/">About</Link> 
                    <Link  href="/">Services</Link> 
                    <Link  href="/">Vision</Link>
                    <Link  href="/">Terms</Link>
                    <Link  href="/">Contact</Link> 
                </div>

            </div>

            

            <div className="MOBILE-VIEW md:hidden  w-full  ">
                <div className="flex  justify-around items-center p-2">
                <Image src="/navbar/logoNav.png"  alt="logo" className="w-10" width={50} height={50}/>
                    <button className=" w-6" onClick={()=>{setMenu(!menu)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                </div>

                <div className={` ${menu?"grid grid-cols-2 gap-3  pl-20 p-3 font-semibold ":"hidden"} ease-in duration-1000 `}onClick={()=>{setMenu(!menu)}}>

                    <Link  href="/">Home</Link>
                    <Link  href="/">About</Link> 
                    <Link  href="/">Services</Link> 
                    <Link  href="/">Vision</Link>
                    <Link  href="/">Terms</Link>
                    <Link  href="/">Contact</Link> 
                    
                </div>

            </div>
        </nav>

    
  )
}

export default Navbar