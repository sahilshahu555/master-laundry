import Image from 'next/image'
import React from 'react'

type Props = {}

const Terms = (props: Props) => {

 const data=[
    {
      title: "We Are Company Registered & Doing Work In Nagpur Jurisdiction Only, If You Have Any Complaints, Please Contact Us At ml.masterlaundry@gmail.com & On Our Portal"
    },
    {
      title: "Your Order For The Services As Set Out In The Order Form Submitted Via The Portal, executive Provided To You, On Call & Through WhatsApp Only"
    },
    {
      title: "Services Personal Dry Cleaning Or Laundry Services Collected From And Delivered To Your Nominated Address"
    },
    {
      title: `When We Use The Words "writing" Or "written" In These Terms, This Will Include E-mail, Sms And Notifications Via The Website.`
    },
    {
      title: `We Will Assign An Order Number To Each Order And Inform You Of It When We Accept The Order`
    },
    {
      title: `If For Any Reason We Are Unable To Fulfil Your Order, We Will Let You Know By Email Or Phone`
    },
    {
      title: `You May Make A Change To An Order At Any Time Before The Collection Time Set Out In Our Email Acceptance Of Your Order By Contacting Our Customer Care At ml.masterlaundry@gmail.com`
    },
    {
      title: `You may cancel or reschedule your Order with no additional charge in the following circumstances
      `
    },
 ]

  return (
    <div className='bg-[#ececec] pt-16'>

        <div className="Div-1 flex justify-center items-center">
          <Image src="/page2/logo/aMain.svg" alt="mainLogo" width={150} height={150}/>
        </div>

        <div className='Div-2 mt-10'>
             
            <h1 className='bg-white w-full text-center font-[900] text-[#2F9EBF] text-2xl md:text-4xl py-1 tracking-widest'>TERMS & CONDITIONS</h1>

            <div className='py-10'>
              {data.map((item, index) => (
                <div key={index} className='flex flex-col gap-10 py-4 mx-6 md:mx-20'>
                  <h1 className='text-md md:text-lg  font-semibold tracking-wider'>{item.title}</h1>
                </div>
              ))}

            </div>

        </div>

    </div>
  )
}

export default Terms