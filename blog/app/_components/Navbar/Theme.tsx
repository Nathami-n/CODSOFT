'use client'
import { MoonIcon, SunIcon } from 'lucide-react';
import {useTheme} from 'next-themes'
import { useState, useEffect } from 'react';

const Theme = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();
    useEffect(()=>{
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }
    const iconRenderToggle = () => {
       if(!mounted) return null;
        const  userTheme = theme === 'system' ? systemTheme : theme;
        if(userTheme === 'dark') {
            return (
            <SunIcon className=" text-yellow-500 cursor-pointer" role='button' onClick={()=> setTheme('light')}/>
            )
        }
        else {
            return (
                <MoonIcon className="  cursor-pointer" role='button' onClick={()=> setTheme('dark')}/>
            )
        }
    };

  return (
    <>
    {iconRenderToggle()}
    </>
  )
}

export default Theme