import React from 'react'
import {Skeleton} from '@/components/ui/skeleton'
const BlogsFallBack = () => {
  return (
    <div className='flex flex-col gap-3'>
    <div className='mt-2  flex flex-col gap-1  lg:gap-x-2 lg:grid lg:grid-cols-2'>
    <Skeleton className='w-full lg:h-[200px] h-[100px] bg-slate-400/25 rounded-lg '/>
    <Skeleton className='rounded-md lg:h-full w-[80%] bg-slate-400/25 h-[50px]'/>
    </div>
    <div className='mt-2  flex flex-col gap-1  lg:gap-x-2 lg:grid lg:grid-cols-2'>
    <Skeleton className='w-full lg:h-[200px] h-[100px] bg-slate-400/25 rounded-lg '/>
    <Skeleton className='rounded-md lg:h-full w-[80%] bg-slate-400/25 h-[50px]'/>
    </div>
    <div className='mt-2  flex flex-col gap-1  lg:gap-x-2 lg:grid lg:grid-cols-2'>
    <Skeleton className='w-full lg:h-[200px] h-[100px] bg-slate-400/25 rounded-lg '/>
    <Skeleton className='rounded-md lg:h-full w-[80%] bg-slate-400/25 h-[50px]'/>
    </div>
    <div className='mt-2  flex flex-col gap-1  lg:gap-x-2 lg:grid lg:grid-cols-2'>
    <Skeleton className='w-full lg:h-[200px] h-[100px] bg-slate-400/25 rounded-lg '/>
    <Skeleton className='rounded-md lg:h-full w-[80%] bg-slate-400/25 h-[50px]'/>
    </div>
    <div className='mt-2  flex flex-col gap-1  lg:gap-x-2 lg:grid lg:grid-cols-2'>
    <Skeleton className='w-full lg:h-[200px] h-[100px] bg-slate-400/25 rounded-lg '/>
    <Skeleton className='rounded-md lg:h-full w-[80%] bg-slate-400/25 h-[50px]'/>
    </div>
    </div>
  )
}

export default BlogsFallBack