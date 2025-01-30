import { getCurrentUser } from "@/actions/getCurrentUser"
import Image from "next/image"
import EnrollButton from "@/components/EnrollButton"
import BurgerMenu from "@/components/BurgerMenu"
import { cookies } from "next/headers"

export default async function Details({ params }) {
    const { id } = await params
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const activity = await fetch(`${baseUrl}/api/v1/activities/${id}`
    ).then(r => r.json())

    const cookieStore = await cookies()
    const token = cookieStore.get('dans_token')

    const user = await getCurrentUser()
    const uid = user?.id

    //Tjek om bruger er tilmeldt hold, og opfylder krav for tilmelding (alder og ugedag)
    const isSignedUp = activity.users.some(user => user.id == uid)

    const hasWeekdayConflict = user?.activities?.some(item => item.weekday === activity.weekday)

    const hasAgeConflict = user?.age < activity.minAge || user?.age > activity.maxAge
    


    return (
        <>
            <div className="h-[60vh] grid grid-rows-[3fr_1fr] grid-cols-[1fr_2fr] ">
                <Image src={activity.asset.url} width={1000} height={1000} alt={activity.name} priority className="row-start-1 row-span-2 col-start-1 h-full col-span-2 z-[-10] object-cover" />
                <div className="col-start-2 row-start-1 w-full items-start flex justify-end p-6">
                    <BurgerMenu className="text-purple " />
                </div>

                {user &&
                    <EnrollButton
                        uid={uid}
                        token={token}
                        activity={activity}
                        isSignedUp={isSignedUp}
                        hasAgeConflict={hasAgeConflict}
                        hasWeekdayConflict={hasWeekdayConflict}
                        className="bg-purple text-white text-lg rounded-2xl px-20 py-4 shadow-2xl col-start-2 row-start-2"
                    />
                }
            </div>
            <h2 className="text-2xl mt-6 px-6">{activity.name}</h2>
            <p className="text-lg px-6 mb-4">{activity.minAge} - {activity.maxAge} år</p>
            <p className="text-lg px-6 mb-4 capitalize">{activity.weekday} {activity.time}</p>
            <p className="text-lg px-6">{activity.description}</p>

        </>
    )
}