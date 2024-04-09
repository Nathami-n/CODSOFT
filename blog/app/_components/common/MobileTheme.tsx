'use client'
import type { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { MoonIcon, SunIcon } from 'lucide-react';
import {useTheme} from 'next-themes'
import Image from 'next/image';
import { useState, useEffect } from 'react';


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
            <SunIcon className="  text-yellow-500 cursor-pointer" role='button' onClick={()=> setTheme('light')}/>
            )
        }
        else {
            return (
                <MoonIcon className="cursor-pointer" role='button' onClick={()=> setTheme('dark')}/>
            )
        }
    };

  return (
    <div className="flex items-center gap-3">
    {iconRenderToggle()}
    {user && <Image
        src={user?.picture as string}
        height={25}
        width={25}
        alt='user'
        className='rounded-full'
    />}
    </div>
  )
}

export default Theme