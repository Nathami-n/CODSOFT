import Link from 'next/link'
import Button from '../common/Button'
import {RegisterLink, LoginLink} from '@kinde-oss/kinde-auth-nextjs/components'
const NavLinks = () => {
    const isLoggedIn = 'true'

    return (
        <div 
        className=" flex items-center justify-between gap-8 "
        >
            { isLoggedIn === 'true' && <Link href={''}>Blog</Link>}
            <LoginLink>Sign in </LoginLink>
            <RegisterLink><Button title='Start here'/></RegisterLink>

        </div>
    )
}

export default NavLinks