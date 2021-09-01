export default function Card(props) {
  return (
    <div className='mx-auto hover:shadow-lg my-[10px] shadow-md hover:bg-gray-100 rounded-lg p-20'>
      {props.children}
    </div>
  )
}
