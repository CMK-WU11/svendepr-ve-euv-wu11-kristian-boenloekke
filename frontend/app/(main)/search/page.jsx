import SearchFilter from "@/components/SearchFilter";

export default async function Search() {
    const activities = await fetch('http://localhost:4000/api/v1/activities'
    ).then(r => r.json())
    
    return (
        <>
            <h1 className="text-4xl p-6">Søg</h1>
            <SearchFilter activities={activities} />
        </>
    )
}