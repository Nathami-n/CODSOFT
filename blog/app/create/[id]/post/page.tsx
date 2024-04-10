'use client'

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import Image from 'next/image'
import { categories } from "@/app/utils/categories"

import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import { ImageIcon, PlusIcon } from "lucide-react"
const Page = () => {
  const [postTitle, setPostTitle] = useState('');
  const [category, setCategory] = useState('')
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null)
  const [quilValue, setQuilValue] = useState('');
  return (
    <div
    className="relative flex flex-col p-1"
    >
      <input 
      type='text'
      placeholder="Post Title"
      className="p-12 text-xl outline-none bg-transparent text-gray-500"
      onChange={(e)=> setPostTitle(e.target.value)}
      />
        <div 
        className="mb-2 ml-2 w-max"
        >
        <Select onValueChange={(e)=> setCategory(e)}>
          <SelectTrigger>
            <SelectValue placeholder='category'/>
          </SelectTrigger>
          <SelectContent>
            {categories.map((category, i)=> {
              return (
              <SelectItem key={i} value={category.title}>{category?.title}</SelectItem>
              )
            })}
          </SelectContent>

        </Select>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
          <button onClick={()=> setOpen(!open)}>
            <div className="flex items-center gap-1">
            <p className="text-sm ml-4">Add Image</p>
            <PlusIcon className="text-rose-600 text-2xl"/>
            </div>
          </button>
          {open && (
            <div>
              <input
              type='file'
              id='image'
              onChange={(e)=> setImage(( prev)=> {
                if(e.target.files !== null)
                  prev = e.target.files[0]
                  return prev
              })}
              className='hidden'
              />
              <button>
                <label htmlFor="image">
                  <ImageIcon className="text-green-600 cursor-pointer mt-1"/>
                </label>
              </button>
            </div>
          )}
          </div>
          <ReactQuill
          theme="snow"
          value={quilValue}
          onChange={setQuilValue}
          className="w-[100%] h-[400px] rouned-lg"
          placeholder="Write your post here"

          />
        </div>
        <button className="absolute right-10 top-2 max-lg:top-4 border rounded-full p-2 bg-green-500 text-white hover:bg-rose-500 transition-all">Post</button>
    </div>
  )
}

export default Page