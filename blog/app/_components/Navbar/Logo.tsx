
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <><Link
      href='/'
    >
      <h1 className="font-bold  text-xl md:text-3xl flex-1">
        Nate<span className='text-blue-400'>Log.</span>

      </h1>
    </Link>
    </>
  )
}

export default Logo