import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { SearchIcon } from "lucide-react"


const SearchModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <SearchIcon/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Search Blog</DialogTitle>
                <DialogDescription>
                    Get what to 
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

        </Dialog>
    )
}

export default SearchModal