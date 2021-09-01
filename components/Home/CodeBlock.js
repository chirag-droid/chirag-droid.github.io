export default function CodeBlock() {
  return (
    <div className='hidden sm:inline-block rounded-2xl shadow-lg mt-5 lg:ml-auto text-left bg-white py-8 px-6 text-blue-600 font-medium'>
    1 class Student:<br/>
    2   def __init__():<br/>
    3     self.name = "Chirag Singla"<br/>
    4     self.age  = datetime.now() - datetime(2005, 12, 22)<br/>
    5     self.languages = ['Javascript', 'Python', 'Rust', 'Java']
  </div>
  )
}