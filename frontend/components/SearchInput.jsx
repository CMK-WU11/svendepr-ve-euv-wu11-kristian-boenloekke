'use client'
import { Search } from "lucide-react"

export default function SearchInput() {

    return (
        <label className="flex items-center gap-2 bg-gray/50 justify-between px-2 mx-6 text-xl has-[:focus]:outline has-[:focus]:outline-blue-500">
            <input type="text" placeholder="Søg" className="bg-transparent outline-none text-white py-4 pl-2" />
            <Search size={30} />
        </label>
    )
}