import Image from "next/image"

export default async function Details({params}) {
    const { id } = await params
    const details = await fetch(`http://localhost:4000/api/v1/activities/${id}`
    ).then(r => r.json())
    console.log(details);
    

    return (
        <>
            <Image src={details.asset.url} width={1000} height={1000} alt={details.name} className="h-[60vh] object-cover" />
            <h2 className="text-2xl mt-6 px-6">{details.name}</h2>
            <p className="text-lg px-6 mb-4">{details.minAge}-{details.maxAge} år</p>
            <p className="text-lg px-6">{details.description}</p>

        </>
    )
}