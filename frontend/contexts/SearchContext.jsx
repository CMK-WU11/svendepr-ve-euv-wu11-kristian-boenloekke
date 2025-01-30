'use client'
import { createContext, useContext, useState } from "react"

const SearchContext = createContext()

export function SearchProvider({children}) {
    const [searchTerms, setSearchTerms] = useState('')

    return (
        <SearchContext.Provider value={{ searchTerms, setSearchTerms }}>
            {children}
        </SearchContext.Provider>
    )

}

export function useSearch() {
    return useContext(SearchContext)
}