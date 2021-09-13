import Heading from '../Heading'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { faJava, faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {
  return (
    <section id='skills' className='scroll'>
      <Heading text='My Skillset'/>

      <div className='flex my-10 md:mb-0 md:mt-40 w-full text-center justify-evenly'>
        <FontAwesomeIcon icon={faJava} color='#6A98F0' className='text-6xl sm:text-7xl'/>
        <FontAwesomeIcon icon={faReact} color='#6A98F0' className='text-6xl sm:text-7xl'/>
        <FontAwesomeIcon icon={faDocker} color='#6A98F0' className='text-6xl sm:text-7xl' />
        <FontAwesomeIcon icon={faNodeJs} color='#6A98F0' className='text-6xl sm:text-7xl'/>
      </div>

      <ParallaxProvider>
      <Parallax y={['-220px', '-20px']} className="relative hidden min-h-[160px] md:block md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg parallax mx-auto">
        <p className='top-[-10px] left-[90%] text-[23px]'>GraphQl</p>
        <p className='top-[-10px] lg:top-[-50px] left-10 text-[25px]'>Docker</p>
        <p className='top-[200px] left-[-60px] text-sm'>React Native</p>
        <p className='top-[70%] left-[35%] text-lg'>Android</p>
        <p className='top-10 left-3/4 text-xs'>Flask</p>
        <p className='top-[300px] left-[85%] text-lg'>MongoDB</p>
        <p className='top-[240px] left-[65%] text-lg'>NextJs</p>
        <p className='top-[280px] left-[150px] text-xl'>Tailwind</p>
        <p className='top-[120px] left-[22%] text-xs'>Rust</p>
      </Parallax>
      </ParallaxProvider>
    </section>
  )
}