import Image from 'next/image'
import { TbMail } from "react-icons/tb";
type Props = {}

const Hero = (props: Props) => {

 
  return (
    <div className=' relative w-full  '>
      
      <h1 className='absolute top-2 right-4 md:right-8 font-bold text-sm mt-4 lg:mt-0 md:text-lg lg:text-md text-[#2F9EBF]'>{"GST NO. - 27DPJPM4411J1ZQ"}</h1>

      <div className='Div1 absolute animate-bounce duration-1000 top-[8.5rem] lg:top-[6rem] left-[10%] md:left-[7%] lg:left-[24%]'>
        <Image src="/page1/page1-1.svg" alt="press" className='w-[2rem] md:w-[4rem] lg:w-[5rem]' width={80} height={80} />
      </div>

      <div className='Div2 -z-2 absolute  lg:top-10 md:left-20 left-14 w-[84%] md:w-[93%]'>
          <Image src="/page1/page1-3.svg" alt="rope" className=' lg:w-[100%] h-[24rem] md:h-[27rem] lg:h-[23.5rem]' width={1000} height={1000}  />
      </div>

      <div className='Div3 z-2 pt-[68px] h-[25rem] md:h-[33rem] lg:h-[31rem]' >
         <Image src="/page1/page1-2.svg" alt="logo" className='w-[100%] h-[19rem] md:h-[26rem]' width={1000} height={1000}  />
      </div>

      <div className='Div4 text-white bg-[#2F9EBF] px-8 py-2.5 mt-5 w-[80%] md:w-[55%] lg:w-[30%] m-auto rounded-full text-center text-md md:text-xl tracking-wider '>
           <h4 className='font-bold '>WE DELIVERY</h4>
           <h4 className='font-bold mt-1'>HAPPINESS WITH CLOTHES</h4>
      </div>

      <div className='Div5 text-white py-5 font-bold tracking-wider'>

       <div className='div1 flex gap-4 md:gap-10  items-center bg-[#2F9EBF] w-[85%] md:w-[45%] lg:w-[40%] border-r-[5px] rounded-r border-gray-500 py-1 my-5 pl-2 lg:pl-20' >
           <Image src="/page1/logo1.svg" alt="logo2" width={50} height={50} className='w-6 h-6'/>
           <p className=''>+91 7888005889</p>
        </div>
       
        <div className='div2 flex gap-4 md:gap-10  items-center bg-[#2F9EBF] w-[85%] md:w-[45%] lg:w-[40%] border-r-[5px] rounded-r border-gray-500 py-1 my-5 pl-2 lg:pl-20' >
           <Image src="/page1/logo2.svg" alt="logo2" width={50} height={50} className='w-6 h-6'/>
           <p className=''>{"www.masterlaundry.com"}</p>
        </div>

        <div className='div3 flex gap-4 md:gap-10  items-center bg-[#2F9EBF] w-[85%] md:w-[45%] lg:w-[40%] border-r-[5px] rounded-r border-gray-500 py-1 my-5 pl-2 lg:pl-20' >
           <TbMail className='w-7 h-7'/>
           <p className=''>ml.masterlaundry@gmail.com</p>
        </div>

          
        <div className='div4 flex gap-4 md:gap-10  items-center bg-[#2F9EBF] w-[85%] md:w-[45%] lg:w-[40%] border-r-[5px] rounded-r border-gray-500 py-1 my-5 pl-2 lg:pl-20' >
           <Image src="/page1/logo4.svg" alt="logo2" width={50} height={50} className='w-6 h-6'/>
           <p className='w-[73%] md:w-[65%] lg:w-[55%]'>Gaddi Godam, Kamptee Road, Sadar, Nagpur 440001.</p>
        </div>

      </div>

    </div>
  )
}

export default Hero