
'use client'
import { MenuIcon } from "lucide-react"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/app/utils/links'
import Link from 'next/link'
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"
import MobileTheme from '../common/MobileTheme'

const DropDown = ({
    user
}:{
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
                    className="lg:hidden fixed right-0 p-5 left-0 border rounded-md bg-white z-50"
                    >
                    <div className="flex flex-col items-center gap-3">
                        {links.map((link, i) => {
                            return <Link key={i} href={link.title} className='font-semibold text-[#022140]'>{link.title}</Link>
                        })}
                        <div>
                        <MobileTheme user={user}/>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default DropDown