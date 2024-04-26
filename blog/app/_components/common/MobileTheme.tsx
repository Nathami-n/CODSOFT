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
    
  return (
    <div>
    {user && (
        <div className=' absolute bottom-6 left-3 flex items-center gap-1'>
            <Image
        src={user?.picture as string}
        height={25}
        width={25}
        alt='user'
        className='rounded-full cursor-pointer'
    />
    <p className='font-semibold text-[#022140] cursor-pointer'>Settings</p>
        </div>
    )}
   
    </div>
  )
}

export default Theme