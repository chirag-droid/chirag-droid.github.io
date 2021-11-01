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

function Intro() {
  return (
    <div className='text-gray-600 lg:ml-32 z-10'>
      <p className='text-lg'>Hello, I'm</p>
      <h1 className='text-4xl font-black'>CHIRAG SINGLA</h1>
      <p className='mt-2 text-xl'>STUDENT, SOFTWARE ENTHUSIAST</p>
  </div>
  )
}

function CodeBlock() {
  return (
    <div className='hidden z-10 sm:inline-block rounded-2xl shadow-lg mt-5 lg:ml-auto text-left bg-white py-8 px-6 text-blue-600 font-medium'>
    1 class Student:<br/>
    2   def __init__():<br/>
    3     self.name = "Chirag Singla"<br/>
    4     self.age  = datetime.now() - datetime(2005, 12, 22)<br/>
    5     self.languages = ['Javascript', 'Python', 'Rust', 'Java']
  </div>
  )
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