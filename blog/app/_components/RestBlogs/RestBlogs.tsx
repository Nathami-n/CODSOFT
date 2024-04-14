
import Intro from './Intro';
import MorePosts from './MorePosts';
import Link from 'next/link'
import {categories} from '@/app/utils/categories'


const RestBlogs = () => {
  return (
    <div className="h-screen lg:col-span-1">
      <Intro/>
      <MorePosts/>
      <div className="border-b pb-6">
        <div>
          <h1 className="text-[#022140] text-xl font-bold">Explore Categories</h1>
          <div className="flex flex-wrap mt-1 gap-3 items-center">
            {categories.map((cat, i)=> {
              return(
                <Link 
                className="
                bg-[#687081]
                text-white
                border
                p-1
                rounded-sm
                text-[16px]
                font-bold
                transtion-colors
                hover:bg-blue-500
                
                "
                href='/'
                 key={i}>
                  {cat.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestBlogs