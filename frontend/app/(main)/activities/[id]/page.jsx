import { getCurrentUser } from "@/actions/getCurrentUser"
import Image from "next/image"
import EnrollButton from "@/components/EnrollButton"
import { cookies } from "next/headers"

export default async function Details({ params }) {
    const { id } = await params

    const activity = await fetch(`http://localhost:4000/api/v1/activities/${id}`
    ).then(r => r.json())

    const cookieStore = await cookies()
    const token = cookieStore.get('dans_token')

    const user = await getCurrentUser()
    const uid = user?.id

    const isSignedUp = activity.users.some(user => user.id == uid)

    const hasWeekdayConflict = user?.activities?.some(item => item.weekday === activity.weekday )
    console.log('hasWeekdayConcflict', hasWeekdayConflict)

    const hasAgeConflict = user?.age < activity.minAge || user?.age > activity.maxAge
    console.log('hasAgeConflict', hasAgeConflict)
    

    async function handleJoin() {
        'use server'
        if (hasAgeConflict) {
            console.error(`Du skal være mellem ${activity.minAge} og ${activity.maxAge} for at deltage i ${activity.name}  `)
            return
        }

        if (hasWeekdayConflict) {
            console.error('Du kan kun være tilmeldt ét hold om dagen')
            return
        }

        const response = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token?.value}`
            }
        })

        if (!response.ok) {
            console.log(response)
            return
        }

        const result = await response.json()
        console.log('result', result);
    }

    async function handleLeave() {
        'use server'
        const response = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token?.value}`
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
                <Image src={activity.asset.url} width={1000} height={1000} alt={activity.name} priority className="row-start-1 row-span-2 col-start-1 h-full col-span-2 z-[-10] object-cover" />
                {user &&
                    <EnrollButton
                        isSignedUp={isSignedUp}
                        handleLeave={handleLeave}
                        handleJoin={handleJoin}
                        className="bg-purple text-white text-lg rounded-2xl px-20 py-4 shadow-2xl col-start-2 row-start-2"
                    />
                }
            </div>
            <h2 className="text-2xl mt-6 px-6">{activity.name}</h2>
            <p className="text-lg px-6 mb-4">{activity.minAge}-{activity.maxAge} år</p>
            <p className="text-lg px-6">{activity.description}</p>

        </>
    )
}