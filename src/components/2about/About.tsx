



type Props = {}

const About = (props: Props) => {

 const data=[

    {
      title:"CAPACITY",
      desc:"Laundry Facilities For Big Customers Need To Have The Capacity To Handle Large Volumes Of Laundry On A Daily Basis."
    },
    {
      title:"EFFICIENCY",
      desc:"Streamlined Processes And Advanced Technology Are Essential To Ensure Quick Turnaround Times And High Efficiency."
    },
    {
      title:"Customization",
      desc:"Tailoring Services To Meet The Specific Needs Of Big Customers, Such As Specialized Cleaning Methods Or Delivery Schedules and We Have Packaging Innovation"
    },
    {
      title:"QUALITY CONTROL",
      desc:"Implementing Quality Control Measures To Ensure That All Items Are Cleaned Thoroughly And Meet The Highest Standards. We Preferred To Give Hand Washed Clothes To Our Clients."
    },
    {
      title:"LOGISTICS",
      desc:"Managing Logistics For Pick-up And Delivery Of Large Quantities Of Laundry Items. Within 24 Business Hours On Time Delivery."
    },
    {
      title:"Customer Support",
      desc:"Providing Excellent Customer Service To Address Any Inquiries Or Concerns Promptly."
    },
 ]

  return (
    <div className='w-full bg-[#AFB0B0]  pt-10'>
        
        <h2 className="bg-white px-4 py-2 text-2xl font-bold text-[#2F9EBF] md:ml-16 w-fit m-auto rounded-xl">How we have started </h2>

        <p className="text-lg font-semibold mx-5 md:mx-20 my-16 tracking-wider">{"We are in this field since 1970. We are serving in many educational institutions such as Ramdeo  Engineering College,  VNIT and many Hospitals and Nursing home's.Our happy customers are the proof of our reliability. Till date no customer have any complaints about our services.We are professionals in our services having all the necessary equipments but we prefer hand washed clothes.Being young entrepreneurs we assure you of quality and reasonable service. Loyalty in our services is our team's strength."}</p>

        <h1 className="bg-white px-2 py-2 text-2xl md:text-4xl font-bold text-[#2F9EBF] w-[95%] md:w-3/4 lg:w-1/2 pl-4 md:pl-20 tracking-wider rounded-r-lg">HAPPY TO SERVE YOU!!</h1>

        <div className="mt-20 ">
          {data.map((elm,index) =>(
            <div key={index} className="flex flex-col md:flex-row items-start ml-4 md:ml-20 my-8 gap-y-2 md:gap-y-0 md:gap-6  lg:gap-10 justify-start tracking-wider animate-fade-up">

                <h2 className="text-white font-bold text-md md:text-xl m-auto w-[90%] md:w-[30%] lg:w-1/4  ">{elm.title}</h2>
                <div className="m-auto w-[90%] md:w-[60%] lg:w-3/4 lg:-ml-16"><p className="font-semibold  text-sm md:text-md text-start mr-4 lg:mr-40 ">{elm.desc}</p>
                </div> 

            </div>
          ))}
        </div>
        <p className='bg-[#2F9EBF] text-center font-bold text-white mt-10 tracking-widest py-0.5'>MASTER LAUNDRY SERVICES</p>
    </div>
  )
}

export default About