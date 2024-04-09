import Link from 'next/link'
import Button from '../common/Button'
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LogOut } from 'lucide-react';

import Image from 'next/image'
const NavLinks = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)


    return (
        <div
            className=" flex items-center justify-between gap-8 "
        >
            {user && <Link href={'/'}>Blog</Link>}
            {user ? <LogoutLink>
                <LogOut  className="text-red-500 text-md"/>
            </LogoutLink> : (
                <LoginLink>Sign in </LoginLink>
            )}
            {!user ? (
                <RegisterLink><Button title='Start here' /></RegisterLink>
            ) : (
                <Image
                    src={user?.picture as string}
                    alt='user logo'
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer"
                />

            )}

        </div>
    )
}

export default NavLinks