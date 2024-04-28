
import Link from 'next/link'
export const Logo = () => {
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

