import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import { SearchProvider } from "@/contexts/SearchContext";

export const metadata = {
    title: 'Søg',
    alternates: {
        canonical: 'https://kb-landrup-dans-blue.vercel.app/search',
    }
}

// export const dynamic = 'force-static'
// export const revalidate = 3600

export default async function Search() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const response = await fetch(
        `${baseUrl}/api/v1/activities`,
        { cache: 'force-cache' },
        { next: { revalidate: 3600 } }
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch data. Check your internet connection or refresh browser')
      }
    
      const activities = await response.json()



    return (
        <>
            <SearchProvider>
                <Header title="Søg">
                    <SearchInput />
                </Header>
                <main>
                    <SearchResults activities={activities} />
                </main>
            </SearchProvider>
        </>
    )
}