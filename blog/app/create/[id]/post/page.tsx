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
import {toast} from 'react-hot-toast'
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import { PlusIcon } from "lucide-react"
import { savePost, takeHome} from "@/app/actions/postActions"
const Page = ({
  params
}: {
  params: {
    id: string
  }
}) => {
  const [quilValue, setQuilValue] = useState('');
  const [image, setImage] = useState<File|null>(null);
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
    }
   
  }
  const handleFormSubmit = async (formData: FormData) => {

     const res = await savePost(formData, quilValue, params.id);
     if(!res) {
      toast.error("Error");
      return
     }
     toast.success("success");
     takeHome();
  }


  return (
    <>
    <form
    action={handleFormSubmit}
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
            name='title'
            placeholder="Post Title"
            className="bg-transparent outline-none w-full p-2"
             />
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
          <div className="flex items-center">
            <input
              type='file'
              name='image'
              id="image"
              accept="image/*"
              onChange={handleFileChange}
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
          <Select name="category" >
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
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
      <PostSave />
    </form>
     
    </>
  )
}

export default Page