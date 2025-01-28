'use client'
import { Search } from "lucide-react"
import { useState } from "react"
import CardActivity from "./CardActivity";

export default function SearchFilter({ activities }) {
    const [searchTerms, setSearchTerms] = useState('')

    const searchableFields = ["name", "weekday", "time", "description"];

    const results = activities.filter((activity) =>
        searchableFields.some((field) =>
            activity[field]?.toLowerCase().includes(searchTerms.toLowerCase())
        )
    )

    return (
        <>
            <label className="flex items-center gap-2 bg-gray/50 justify-between px-2 mx-6 text-xl has-[:focus]:outline has-[:focus]:outline-blue-500">
                <input
                    type="text"
                    defaultValue={searchTerms}
                    onChange={e => setSearchTerms(e.target.value)}
                    placeholder="Søg"
                    className="bg-transparent outline-none placeholder:text-white placeholder:opacity-100 text-white py-4 pl-2"
                />
                <Search size={30} />
            </label>

            <ul className="p-6 flex flex-col gap-6">
                {results.length > 0 ? results.map(result => (
                    <li key={result.id}>
                        <CardActivity activity={result} />
                    </li>
                )) : (
                    <p className="text-lg">Din søgning gav ingen resultater</p>
                )}
            </ul>
        </>
    )
}