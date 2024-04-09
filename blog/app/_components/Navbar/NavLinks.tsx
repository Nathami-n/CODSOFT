import Link from 'next/link'
import Button from '../common/Button'
const NavLinks = () => {
    const isLoggedIn = 'true'

    return (
        <div 
        className=" flex items-center justify-between flex-1"
        >
            { isLoggedIn === 'true' && <Link href={''}>Blog</Link>}
            <Link href={''}>Sign in</Link>
            <Button title='Start here'/>

        </div>
    )
}

export default NavLinks