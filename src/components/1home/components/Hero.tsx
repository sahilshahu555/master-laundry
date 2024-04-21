import Image from 'next/image'

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

      <div className='Div4 text-white bg-[#2F9EBF] px-8 py-2.5 mt-5 w-[85%] md:w-[55%] lg:w-[30%] m-auto rounded-full text-center text-md md:text-xl tracking-wider animate-fade-up'>
           <h4 className='font-bold '>WE DELIVERY</h4>
           <h4 className='font-bold mt-1'>HAPPINESS WITH CLOTHES</h4>
      </div>

     
      <p className='bg-[#2F9EBF] text-center font-bold text-white mt-10 tracking-widest py-0.5'>MASTER LAUNDRY SERVICES</p>
    </div>
  )
}

export default Hero