
'use client'
import {  LogOutIcon, MenuIcon} from "lucide-react"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/app/utils/links'
import Link from 'next/link'
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"
import { LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { createPostId } from "@/app/actions/postActions"

const DropDown = ({
    user
}: {
    user: KindeUser | null
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handlePost = async () => {
        await createPostId()
    }
    return (
        <div className="lg:hidden">
            <MenuIcon role='button' onClick={() => setOpen(!open)} />
            {open && (
                <>
                    <div onClick={() => setOpen(!open)} className="fixed cursor-pointer top-0 bottom-0 left-0 right-0 bg-black/50 z-[40]" />
                    <motion.div
                        onClick={() => setOpen(!open)}
                        initial={{
                            x: 900,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: '260',
                            damping: 20
                        }}
                        className="lg:hidden fixed w-[400px] right-0 flex items-center  dark:border-border  border px-auto py-4 justify-center rounded-xl dark:bg-black/20 bg-white z-50"
                    >
                        <div className="flex flex-col gap-3 ">
                            {user && (<button className="font-semibold w-max  dark:text-gray-100" onClick={handlePost}> Start Blogging</button>)}
                            {links.map((link, i) => {
                                return <Link key={i} href={link.title} className='font-semibold w-full dark:text-gray-100'>{link.title}</Link>
                            })}

                            {/* <MobileTheme user={user} /> */}

                            {user ? (
                                <div className="grid">
                                    <LogoutLink>
                                        <div className="flex items-center gap-2 font-bold">
                                            <LogOutIcon />
                                            <p className="dark:text-gray-100">Logout</p>
                                        </div>
                                    </LogoutLink>
                                </div>
                            ) : (
                                <RegisterLink>
                                    <h1 className="font-semibold dark:text-gray-100">Sign Up</h1>
                                </RegisterLink>
                            )}
                        </div>
                    </motion.div></>
            )}
        </div>
    )
}

export default DropDown