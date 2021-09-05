import Intro from "./Intro";
import CodeBlock from "./CodeBlock";

function BackgroundImage() {
  return (
    <svg id='home' className="absolute w-[40%] top-[-40px] right-0 sm:top-0 opacity-80 md:opacity-100" width="725" height="990" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="663.973" y="-454" width="1270.03" height="939" rx="15" transform="rotate(45 663.973 -454)" fill="url(#prefix__paint0_linear)"/>
    <defs>
      <linearGradient id="prefix__paint0_linear" x1="663.973" y1="-454" x2="1559.63" y2="757.412" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6A98F0"/>
        <stop offset="1" stopColor="#4961DC"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default function Home() {
  return (
    <section className='mb-[75px] mt-[80px] sm:mt-[125px]'>

      <BackgroundImage />

      <div className='flex flex-col items-center text-center lg:flex-row justify-evenly lg:max-w-screen-lg xl:max-w-screen-xl'>
        <Intro />
        <CodeBlock />
      </div>
    </section>
  )
}