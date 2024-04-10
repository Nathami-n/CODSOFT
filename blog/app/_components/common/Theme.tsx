'use client'
import type { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { MoonIcon, SunIcon, LogOutIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import {LogoutLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'


const Theme = ({
    user
}: {
    user?: KindeUser | null
}) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const iconRenderToggle = () => {
        if (!mounted) return <div />;
        const userTheme = theme === 'system' ? systemTheme : theme;
        if (userTheme === 'dark') {
            return (
                <SunIcon className=" max-lg:hidden  text-yellow-500 cursor-pointer" role='button' onClick={() => setTheme('light')} />
            )
        }
        else {
            return (
                <MoonIcon className=" max-lg:hidden cursor-pointer" role='button' onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <>
            {iconRenderToggle()}
            {user && <Image
                src={user?.picture as string}
                height={25}
                width={25}
                alt='user'
                onClick={() => setOpen(!open)}
                className='rounded-full max-lg:hidden cursor-pointer'
            />}
            {!user && (
                <RegisterLink>
                    <p className="border max-lg:hidden text-center p-2 cursor-pointer rounded-full bg-black text-white"> Start Here</p>
                </RegisterLink>
            )}
            {user && open &&
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: .95
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    className='absolute max-lg:hidden right-3 h-[100px] top-20 p-4 border rounded-md bg-white z-50'
                >
                    <div>
                         <LogoutLink>
                            <div className="flex items-center gap-2 font-bold">
                                <LogOutIcon />
                                <p>Logout</p>
                            </div>
                        </LogoutLink>
        </div>
                </motion.div>
            }
        </>
    )
}

export default Theme