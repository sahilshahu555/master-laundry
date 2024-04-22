"use client"
import Link from "next/link"
import Image from "next/image"
import { IoMenu } from "react-icons/io5";
import {useState} from "react"
const Navbar = () => {
    const[menu,setMenu] = useState(false)
  return (

        <nav id="nav" className="NAVBAR bg-[#2F9EBF] text-black  flex items-center justify-around py-2 sticky top-0 lg:gap-24  z-10">
            
            <Link href="/">
                <div className="LOGO hidden md:flex md:flex-col lg:flex-row items-center justify-center gap-0">
                
                    <Image src="/navbar/logoNav.png"  alt="logo" className="w-10 h-10" width={50} height={50}/>
                
                <span className="text-white font-[900] ml-4 text-[20px] lg:text-2xl">Master Laundry</span>
                </div>
            </Link >
            <div className="LAPTOP-VIEW hidden md:flex justify-center  items-center   ">
               
                <div className="flex gap-16 font-medium text-white">
                    <Link className="hover:text-black"  href="/">Home</Link>
                    <Link className="hover:text-black" href="/#ABOUT">About</Link> 
                    <Link className="hover:text-black" href="/#SERVICE">Services</Link> 
                    <Link className="hover:text-black" href="/#VISION">Vision</Link>
                    <Link className="hover:text-black" href="/#TERMS">Terms</Link>
                    <Link className="hover:text-black" href="/#FOOTER">Contact</Link> 
                </div>

            </div>

            

            <div className="MOBILE-VIEW md:hidden  w-full  ">
                <div className="flex  justify-between  items-center px-10 p-2">
                <Image src="/navbar/logoNav.png"  alt="logo" className="w-10" width={50} height={50}/>
               <span className="text-white font-[900]  text-2xl">Master Laundry</span>

                    <button  onClick={()=>{setMenu(!menu)}}>
                    <IoMenu className="text-white w-10 h-10" />
                    </button>
                </div>

                <div className={` ${menu?"grid grid-cols-2 gap-x-10 gap-y-4 pl-20 p-3 font-semibold ":"hidden"} ease-in duration-1000  text-white`}onClick={()=>{setMenu(!menu)}}>

                    <Link className="hover:text-black" href="/">Home</Link>
                    <Link className="hover:text-black" href="/#ABOUT">About</Link> 
                    <Link className="hover:text-black" href="/#SERVICE">Services</Link> 
                    <Link className="hover:text-black" href="/#VISION">Vision</Link>
                    <Link className="hover:text-black" href="/#TERMS">Terms</Link>
                    <Link className="hover:text-black" href="/#FOOTER">Contact</Link> 
                    
                </div>

            </div>
        </nav>

    
  )
}

export default Navbar