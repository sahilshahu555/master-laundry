import Hero from "./components/Hero"



type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-white  to-[#DADBDC] pb-8">
        <Hero/>
    </div>
  )
}

export default HomeComponent