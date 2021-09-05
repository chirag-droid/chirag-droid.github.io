export default function Card(props) {
  return (
    <div className='flex flex-col hover:shadow-lg mx-auto max-w-[300px] h-[350px] text-center justify-evenly shadow-md hover:bg-gray-100 rounded-lg p-2 items-center m-2'>
      {props.children}
    </div>
  )
}
