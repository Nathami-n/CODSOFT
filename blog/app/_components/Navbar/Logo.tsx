
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link
    href='/'
    className="relative h-10 w-32"
    >
   <Image
   src='https://cdn-icons-png.flaticon.com/128/2015/2015630.png'
   alt='logo'
   className="object-contain"
   fill
    />
    </Link>
  )
}

export default Logo