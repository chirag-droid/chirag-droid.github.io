import Heading from './Heading'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import DevIcon from "devicon-react-svg"
import useMediaQuery from "../hooks/useMediaQuery"

function Icon({icon}) {
  const isNotMobile = useMediaQuery('(min-width: 640px)')

  return (
    <DevIcon
      icon={icon}
      style={{
        fill: "#6A98F0",
        width: isNotMobile ? "108px" : "64px"
      }}
    />
  );
}

export default function Skills() {
  return (
    <section id='skills' className='scroll'>
      <Heading text='My Skillset'/>

      <div className='flex my-10 mb-0 md:mt-20 justify-evenly'>
        <Icon icon="java" />
        <Icon icon="react" />
        <Icon icon="docker" />
        <Icon icon="nodejs" />
      </div>

      <ParallaxProvider>
      <Parallax y={['-120px', '-40px']} className="relative hidden min-h-[120px] md:block md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg parallax mx-auto">
        <p className='-top-16 right-[5%] text-[23px]'>GraphQl</p>
        <p className='top-[-10px] lg:top-[-50px] left-0 text-[25px]'>Docker</p>
        <p className='top-44 left-[-60px] text-base'>React Native</p>
        <p className='left-[40%] -top-16 text-lg'>Android</p>
        <p className='top-10 left-3/4 text-base'>Flask</p>
        <p className='top-60 left-[85%] text-lg'>MongoDB</p>
        <p className='top-40 left-[60%] text-2xl'>NextJs</p>
        <p className='top-48 left-96 text-xl'>Tailwind</p>
        <p className='top-36 left-[25%] text-base'>Rust</p>
      </Parallax>
      </ParallaxProvider>
    </section>
  )
}