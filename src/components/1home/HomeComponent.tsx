import Hero from "./components/Hero"
import Info from "./components/Info"


type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div>
        <Hero/>
        <Info/>
    </div>
  )
}

export default HomeComponent