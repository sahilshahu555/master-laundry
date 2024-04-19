import Logos from './components/Logos';
import Info from './components/Info';


type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full'>
       <Logos/>
       <Info/>
    </div>
  )
}

export default About