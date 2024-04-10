
'use client'
import { LogOut, LogOutIcon, MenuIcon, RouteOffIcon } from "lucide-react"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/app/utils/links'
import Link from 'next/link'
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"
import MobileTheme from '../common/MobileTheme'
import { LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"

const DropDown = ({
    user
}: {
    user: KindeUser | null
}) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="lg:hidden">
            <MenuIcon role='button' onClick={() => setOpen(!open)} />
            {open && (
                <motion.div
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 10,
                        opacity: 1
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: '260',
                        damping: 20
                    }}
                    className="lg:hidden fixed right-0 p-5 left-0 border  rounded-md bg-white z-50"
                >
                    <div className="flex flex-col gap-3 ">
                        {user && (<Link  className="font-semibold text-[#022140]" href={'/'}> Start Blogging</Link>)}
                        {links.map((link, i) => {
                            return <Link key={i} href={link.title} className='font-semibold text-[#022140]'>{link.title}</Link>
                        })}
                        <div>
                            <MobileTheme user={user} />
                        </div>
                        {user ? (<LogoutLink>
                            <div className="flex items-center gap-2 font-bold">
                                <LogOutIcon />
                                <p>Logout</p>
                            </div>
                        </LogoutLink>): (
                            <RegisterLink>
                                <h1 className="font-semibold text-[#022140]">Sign Up</h1>
                            </RegisterLink>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default DropDown