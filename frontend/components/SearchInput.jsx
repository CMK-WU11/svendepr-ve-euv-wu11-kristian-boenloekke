'use client'
import { useSearch } from "@/contexts/SearchContext"
import { Search } from "lucide-react"



export default function SearchInput() {
    const {searchTerms, setSearchTerms} = useSearch()

    return (
        
        <label className="flex items-center gap-2 rounded bg-gray/50 justify-between mt-6 px-2 text-xl has-[:focus]:outline has-[:focus]:outline-4 has-[:focus]:outline-pink">
            <input 
                type="search" 
                autoFocus
                value={searchTerms}
                onChange={e => setSearchTerms(e.target.value)} 
                placeholder="Søg" 
                className="bg-transparent outline-none placeholder:text-white placeholder:opacity-100 text-white py-4 pl-2" />
            <Search size={30} />
        </label>
        
    )
}