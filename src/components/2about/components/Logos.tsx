import Image from 'next/image'

type Props = {}

const Logos = (props: Props) => {
  return (
    <div className="bg-[#AFB0B0] w-full h-[13.5rem] md:h-[28.5rem] lg:h-[44rem] bg-contain bg-no-repeat  bg-center bg-image1 relative lg:mb-0 -mb-0.5">

        <div className='Div1 absolute right-[8%] lg:right-[10%] top-[13%] lg:top-[18%]' >
            <Image src="/page2/logo/page2-3.svg" alt="logo2" width={500} height={500} className='w-[5rem] md:w-[11rem] lg:w-[14rem] '/> 
        </div>

        <div className='Div1 absolute left-[25.5%] md:left-[23.5%] lg:left-[23.5%] top-6  md:top-16' >
            <Image src="/page2/logo/page2-2.svg" alt="logo2" width={500} height={500} className='w-[11.5rem] md:w-[26rem] lg:w-[40rem] '/> 
        </div>
        
        <div className='LOGOS relative   w-full ' >

            <Image id="logo1" src="/page2/logo/logo1.svg" alt="logo1" width={500} height={500} className='w-[26px] md:w-[60px] lg:w-[90px] absolute  top-3 left-1.5 md:top-5 md:left-2 lg:top-5 lg:left-5'/>

            <Image id="logo2" src="/page2/logo/logo2.svg" alt="logo2" width={500} height={500} className='w-[35px] md:w-[80px]  lg:w-[120px] absolute  top-12 left-10 md:top-[6rem] md:left-[5rem] lg:top-[10rem] lg:left-32'/>

            <Image id="logo3" src="/page2/logo/logo3.svg" alt="logo2" width={500} height={500} className='w-[32px] md:w-[70px]  lg:w-[110px] absolute  top-1.5 left-[100px] md:top-[1rem] md:left-[14rem] lg:top-[1rem] lg:left-[22rem]'/>
             

            <Image id="logo4" src="/page2/logo/logo4.svg" alt="logo2" width={500} height={500} className='w-[35px] md:w-[80px]  lg:w-[120px] absolute  top-2 left-[240px] md:top-[1rem] md:left-[31.5rem] lg:top-[1.5rem] lg:left-[48.5rem]'/>

            <Image id="logo5" src="/page2/logo/logo5.svg" alt="logo2" width={500} height={500} className='w-[35px] md:w-[80px]  lg:w-[110px] absolute  top-12 left-[300px] md:top-[6.5rem] md:left-[39rem] lg:top-[11.5rem] lg:left-[60.5rem]'/>

            <Image id="logo6" src="/page2/logo/logo6.svg" alt="logo2" width={500} height={500} className='w-[35px] md:w-[85px]  lg:w-[140px] absolute  top-[8.5rem] left-[335px] md:top-[18rem] md:left-[44rem] lg:top-[27rem] lg:left-[67.5rem]'/>

            <Image id="logo7" src="/page2/logo/aMain.svg" alt="logo2" width={500} height={500} className='w-[60px] md:w-[140px]  lg:w-[240px] absolute  top-14 left-[161px] md:top-[9.5rem] md:left-[21rem] lg:top-[11rem] lg:left-[31rem]'/>

        </div>

       

      </div>
  )
}

export default Logos