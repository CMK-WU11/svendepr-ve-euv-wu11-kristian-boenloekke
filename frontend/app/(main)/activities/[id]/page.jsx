import { getCurrentUser } from "@/actions/getCurrentUser"
import Image from "next/image"
import EnrollButton from "@/components/EnrollButton"

export default async function Details({ params }) {
    const { id } = await params

    const details = await fetch(`http://localhost:4000/api/v1/activities/${id}`
    ).then(r => r.json())

    const user = await getCurrentUser() 
    const uid = user?.id
    const isSignedUp = details.users.some(user => user.id == uid)

    async function handleLeave() {
        'use server'
        const response = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        })

        if (!response.ok) {
            console.log(response)
            return
        }
    }

    async function handleJoin() {
        'use server'
        const response = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        })

        if (!response.ok) {
            console.log(response)
            return
        }

    }

    return (
        <>
            <div className="h-[60vh] grid grid-rows-[3fr_1fr] grid-cols-[1fr_2fr] ">
            <Image src={details.asset.url} width={1000} height={1000} alt={details.name} priority className="row-start-1 row-span-2 col-start-1 h-full col-span-2 z-[-10] object-cover" />
            {user &&
                <EnrollButton
                    isSignedUp={isSignedUp}
                    handleLeave={handleLeave}
                    handleJoin={handleJoin}
                    className="bg-purple text-white text-lg rounded-2xl px-20 py-4 shadow-2xl col-start-2 row-start-2"
                />
            }
            </div>
            <h2 className="text-2xl mt-6 px-6">{details.name}</h2>
            <p className="text-lg px-6 mb-4">{details.minAge}-{details.maxAge} år</p>
            <p className="text-lg px-6">{details.description}</p>    

        </>
    )
}