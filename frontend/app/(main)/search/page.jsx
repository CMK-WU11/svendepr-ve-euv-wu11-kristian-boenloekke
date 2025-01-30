import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import { SearchProvider } from "@/contexts/SearchContext";

export default async function Search() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const activities = await fetch(`${baseUrl}/api/v1/activities`
    ).then(r => r.json())



    return (
        <>
            <SearchProvider>
                <Header title="Søg">
                    <SearchInput />
                </Header>
                <SearchResults activities={activities} />
            </SearchProvider>
        </>
    )
}