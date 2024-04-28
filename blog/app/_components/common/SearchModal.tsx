'use client';
import {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const SearchModal = () => {
    const router = useRouter();
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);

    const handleSearch = async ()=> {
        router.push(`/searchblog/${category}`);
    }
    return (
        <Dialog open={open}>
            <DialogTrigger>
                <SearchIcon type='button' onClick={()=> setOpen(true)}/>
        </DialogTrigger>
        <DialogContent className="bg-white ">
            <DialogHeader>
                <DialogTitle className="dark:text-black">Search Blog</DialogTitle>
                <DialogDescription className="dark:text-black">
                    Search for Category
                </DialogDescription>
            </DialogHeader>
            <div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right dark:text-black text-xl" htmlFor="category">
                        Category
                    </Label>
                    <input id='category' value={category} onChange={(e)=> setCategory(e.target.value)} className="col-span-3 dark:bg-white border p-2 dark:text-black"/>
                </div>
            </div>
            <DialogFooter>
          <Button className='border bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors' onClick={()=> {
            handleSearch();
            setOpen(false);
          }}>Search</Button>
        </DialogFooter>
        </DialogContent>
        
        </Dialog>
    )
}

export default SearchModal