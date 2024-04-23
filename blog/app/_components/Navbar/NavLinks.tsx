import Link from 'next/link'
import Button from '../common/Button'
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LogOut } from 'lucide-react';

import Image from 'next/image'
import { links } from '@/app/utils/links';
const NavLinks = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)


    return (
     <div>
        <div className='flex items-center  max-lg:hidden justify-between flex-1 gap-5'>
            {links.map((link, i)=> {
                return <Link key={i} href={link.title} className='font-semibold  text-[#022140]'>{link.title}</Link>
            })}
        </div>

     </div>
    )
}

export default NavLinks