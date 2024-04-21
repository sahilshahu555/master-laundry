import Image from 'next/image'
import React from 'react'

type Props = {}

const Vision = (props: Props) => {

 

  return (
    <div className='bg-[#ececec] pt-10 '>

       <div className='Div1 flex justify-center md:justify-end  w-full my-5 md:my-0 '> 
           <div className='flex md:flex-col  items-center mr-6'>
            <h1 className="text-3xl md:text-[2.5rem] font-extrabold  text-[#2F9EBF] mr-4 md:mr-0">MASTER</h1>
            <h1 className="text-3xl md:text-[2.5rem] font-thin text-[#2F9EBF]   font-serif">LAUNDRY</h1>
           </div>
       </div>

       <div className='Div2  '>
           <h1 className="text-3xl md:text-[3rem] font-thin text-[#2F9EBF]  tracking-wider font-serif ml-14">OUR VISION</h1>

           <div className='bg-gradient-to-br from-[#2F9EBF] via-[#ececec] to-[#bcbdbd] mt-5  py-5'> 
              <p className='text-lg font-semibold px-6 md:px-14 tracking-widest my-10'>We Aim To Not Only Meet But Exceed The Evolving Demands Of Our Clients While Contributing To A Cleaner, Greener Future For All & Also We Strive To Become The Go-to Provider For High-quality Reliable And Cost-effective Laundry Services That Exceed The Expectations Of Our Clients.</p>
              
             <div className='flex justify-center md:justify-end  text-center '> 
                <h1 className='text-3xl md:text-[3rem] font-thin text-[#2F9EBF]  tracking-wider font-serif pr-10 pl-10 bg-white md:[60%] lg:w-[40%]  rounded-lg md:rounded-l-lg  py-2'>OUR MISSION</h1>
             </div>
              <p className='text-lg font-semibold px-6 md:px-14 tracking-widest my-10'>At Our Laundry Services Company, We Are Committed To Providing Exceptional And Reliable Laundry Solutions To Our Big Customers. Our Mission Is To Streamline And Enhance The Laundry Process For Businesses And Organizations While Delivering Top-quality Service And Exceeding Customer Expectations. We Strive To Be The Preferred Partner For Large Customers Seeking Efficient, Environmentally-friendly And Cost-effective Laundry Services, Ensuring Their Satisfaction And Loyalty.</p>


           </div>

       </div>

       <div className="Div3 py-10 ">

            <h1 className="text-4xl leading-[3rem] md:leading[0rem] lg:text-5xl text-center font-[900] tracking-wider ">YOUR LAUNDRY, <span className='text-[#2F9EBF] '> OUR PASSION</span></h1>

            <div className='LOGOS-DIV md:mt-20 my-5 mx-10 md:mx-0'>

               <div className="LOGO1 flex flex-col md:flex-row items-center justify-around gap-x-6 gap-y-5 md:gap-y-0 my-10 md:mx-5 lg:mx-10">

                  <h1 className=" font-semibold text-xl md:text-2xl">WE WASH</h1>

                  <Image src="/page3/s1.png"  alt="logo" className="md:w-[53%] lg:w-[50%] h-20 text-white md:pl-20" width={500} height={500}/>
                  
               </div>

                <div className="LOGO2 flex flex-col md:flex-row items-center justify-around gap-x-16 gap-y-5 md:gap-y-0 my-10">

                  <h1 className=" font-semibold text-xl md:text-2xl">WE DRY</h1>

                  <Image src="/page3/s2.png"  alt="logo" className="md:w-[40%] h-20 text-white " width={500} height={500}/>
                  
               </div>

               <div className="LOGO3 flex flex-col md:flex-row items-center justify-around gap-x-16 gap-y-5 md:gap-y-0 my-10">

                  <h1 className=" font-semibold text-xl md:text-2xl">WE CLEAN</h1>

                  <Image src="/page3/s3.png"  alt="logo" className="md:w-[40%] h-20 text-white " width={500} height={500}/>
                  
               </div>

                <div className="LOGO4 flex flex-col md:flex-row items-center justify-around gap-x-4 gap-y-5 md:gap-y-0 my-10">

                  <h1 className=" font-semibold text-xl md:text-2xl">WE DELIVERY</h1>

                  <Image src="/page3/s4.png"  alt="logo" className="md:w-[42%] h-20 text-white " width={500} height={500}/>
                  
               </div>
              
            </div>

       </div>
       <p className='bg-[#2F9EBF] text-center font-bold text-white mt-10 tracking-widest py-0.5'>MASTER LAUNDRY SERVICES</p>
    </div>
  )
}

export default Vision