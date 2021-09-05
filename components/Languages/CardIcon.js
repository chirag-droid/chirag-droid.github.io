import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardIcon({ icon }) {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-500 rounded-full p-[24px] w-[5.5rem] h-[5.5rem]'>
      <FontAwesomeIcon
        icon={icon}
        color='#ffffff'
        className='w-10' />
    </div>
  )
}