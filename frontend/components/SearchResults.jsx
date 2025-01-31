'use client'

import { useSearch } from "@/contexts/SearchContext";
import CardActivity from "./CardActivity"


export default function SearchResults({ activities }) {
    const { searchTerms } = useSearch()
    const searchableFields = ["name", "weekday", "time", "description"];

    const results = activities.filter((activity) =>
        searchableFields.some((field) =>
            activity[field]?.toLowerCase().includes(searchTerms.toLowerCase())
        )
    )

    return (
        <ul className="p-6 flex flex-col gap-6 last:mb-20">
            {results.length > 0 ? results.map(result => (
                <li key={result.id} className="h-[40vh]">
                    <CardActivity activity={result} />
                </li>
            )) : (
                <p className="text-lg">Din søgning gav ingen resultater</p>
            )}
        </ul>
    )

}

