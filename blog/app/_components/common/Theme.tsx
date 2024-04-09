'use client'
import type { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { MoonIcon, SunIcon } from 'lucide-react';
import {useTheme} from 'next-themes'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DropDown from './DropDown';

const Theme = ({
    user
}:{
    user?:KindeUser | null
}) => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();
    useEffect(()=>{
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }
    const iconRenderToggle = () => {
       if(!mounted) return <div/>;
        const  userTheme = theme === 'system' ? systemTheme : theme;
        if(userTheme === 'dark') {
            return (
            <SunIcon className=" max-lg:hidden text-yellow-500 cursor-pointer" role='button' onClick={()=> setTheme('light')}/>
            )
        }
        else {
            return (
                <MoonIcon className=" max-lg:hidden  cursor-pointer" role='button' onClick={()=> setTheme('dark')}/>
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
        className='rounded-full max-lg:hidden'
    />}
    </>
  )
}

export default Theme