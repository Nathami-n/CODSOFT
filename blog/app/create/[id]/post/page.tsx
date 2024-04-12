'use client'

import { useState } from "react"
import PostSave from '@/app/_components/common/PostSave'
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
import { savePost } from "@/app/actions/postActions"
const Page = ({
params
}:{
  params: {
    id: string
  }
}) => {
  console.log(params.id)
  const [postTitle, setPostTitle] = useState('');
  const [category, setCategory] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [quilValue, setQuilValue] = useState('');

  const handlePost = () => {
    const post = {
      title: postTitle,
      category: category,
      content: quilValue,
      image: image,
    }
    // post the post
    savePost(post, params.id);
  }
  return (
    <><div
      className="border  max-w-2xl rounded-md mb-24 h-[680px] mx-auto mt-8  shadow-lg"
    >

      <div className="">
        <div className="p-3 border-b ">
          <h1 className="text-xl font-extrabold">New Post</h1>
        </div>
        {/* Titile */}

        <div className="border p-4 rounded-lg mx-2 mt-2">
          <input
            type='text'
            placeholder="Post Title"
            className="bg-transparent outline-none w-full p-2"
            onChange={(e) => setPostTitle(e.target.value)} />
        </div>
        {/* quill */}

        <div className="border rounded-lg mx-2  mt-2">
          <h1 className="font-extrabold text-xl ml-4 mt-1">Post Here</h1>
          <ReactQuill
            theme="snow"
            value={quilValue}
            onChange={setQuilValue}
            className=" p-2 mt-3 rounded-md"
            placeholder="Write your post here" />
        </div>

        {/* Image */}
        <div className="border rounded-lg mt-2 p-3 mx-2">
          <h1 className="font-extrabold text-xl mb-2">Add Image</h1>
          <div className="flex items-cente">
            <input
              type='file'
              id='image'
              accept="image/*"
              onChange={(e) => setImage((prev) => {
                if (e.target.files !== null)
                  prev = e.target.files[0]
                return prev
              })}
              className='hidden' />
            <label htmlFor="image">
              <div className="border  cursor-pointer hover:bg-rose-500 hover:text-white transition p-4 h-[50px] w-[50px] rounded-lg grid place-content-center">
                <PlusIcon className="cursor-pointer" />
              </div>
            </label>
            {/* Image */}
            {image && (
              <div>
                <Image className="rounded-lg ml-8" src={URL.createObjectURL(image).toString()} alt="" width={100} height={30} />
              </div>
            )}
          </div>
        </div>
        {/* Category */}

        <div className="border rounded-lg mt-2 p-3 mx-2 ">
          <h1 className="font-extrabold text-xl mb-2">Category</h1>
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category"/>
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category) => {
                return (
                  <SelectItem key={category.id} value={category.title} >{category.title}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <PostSave handlePost={handlePost}/>
    </>
  )
}

export default Page