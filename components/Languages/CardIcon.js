import Image from 'next/image';

export default function CardIcon({ src }) {
  return (
    <Image
      src={src}
      alt={`Vector icon for ${src.split('/')[2].slice(0, -4)} language`}
      width="108"
      height="108"/>
  )
}