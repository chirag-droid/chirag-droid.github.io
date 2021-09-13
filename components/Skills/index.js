import Heading from '../Heading'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { faJava, faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({icon}) {
  return (
    <FontAwesomeIcon icon={icon} color="#6A98F0" className='w-16 sm:w-24' />
  );
}

export default function Skills() {
  return (
    <section id='skills' className='scroll'>
      <Heading text='My Skillset'/>

      <div className='flex my-10 mb-0 md:mt-20 justify-evenly'>
        <Icon icon={faJava} />
        <Icon icon={faReact} />
        <Icon icon={faDocker} />
        <Icon icon={faNodeJs} />
      </div>

      <ParallaxProvider>
      <Parallax y={['-180px', '-40px']} className="relative hidden min-h-[140px] md:block md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg parallax mx-auto">
        <p className='-top-16 right-[5%] text-[23px]'>GraphQl</p>
        <p className='top-[-10px] lg:top-[-50px] left-0 text-[25px]'>Docker</p>
        <p className='top-[200px] left-[-60px] text-base'>React Native</p>
        <p className='left-[40%] text-lg'>Android</p>
        <p className='top-10 left-3/4 text-base'>Flask</p>
        <p className='top-[300px] left-[85%] text-lg'>MongoDB</p>
        <p className='top-56 left-[60%] text-2xl'>NextJs</p>
        <p className='top-[280px] left-[150px] text-xl'>Tailwind</p>
        <p className='top-36 left-[25%] text-base'>Rust</p>
      </Parallax>
      </ParallaxProvider>
    </section>
  )
}