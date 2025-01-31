import { getCurrentUser } from "@/actions/getCurrentUser"
import Image from "next/image"
import EnrollButton from "@/components/EnrollButton"
import BurgerMenu from "@/components/BurgerMenu"
import { cookies } from "next/headers"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function generateMetadata({ params }) {
	const {id} = await params
	const response = await fetch(`${baseUrl}/api/v1/activities/${id}`, {cache: 'force-cache'})
	const activity = await response.json()

	return {
		title: activity.name,
        description: activity.description
	}
}

export async function generateStaticParams() {
    const response = await fetch(`${baseUrl}/api/v1/activities`, {cache: 'force-cache'})
    const activities = await response.json()
   
    return activities.map((activity) => ({
      id: activity.id.toString()
    }))
  }



export default async function Details({ params }) {
    const { id } = await params
    const response = await fetch(`${baseUrl}/api/v1/activities/${id}`, {cache: 'force-cache'})
    if (!response.ok) {
        throw new Error('Failed to fetch data. Check your internet connection or refresh browser')
    }

    const activity = await response.json()
    const cookieStore = await cookies()
    const token = cookieStore.get('dans_token')

    const user = await getCurrentUser()
    const uid = user?.id

    //Tjek om bruger er tilmeldt hold, og opfylder krav for tilmelding (alder og ugedag)
    const isSignedUp = activity.users.some(user => user.id == uid)

    const hasWeekdayConflict = user?.activities?.some(item => item.weekday === activity.weekday)

    const hasAgeConflict = user?.age < activity.minAge || user?.age > activity.maxAge



    return (
        <main>
            <div className="h-[60vh] grid grid-rows-[3fr_1fr] grid-cols-[1fr_2fr] ">
                <Image src={`/${activity.id}.jpg`} width={1000} height={1000} alt={activity.name} priority className="row-start-1 row-span-2 col-start-1 h-full col-span-2 z-[-10] object-cover" />
                <div className="col-start-2 row-start-1 w-full items-start flex justify-end p-6">
                    <BurgerMenu className="text-purple" user={user} />
                </div>

                {user &&
                    <EnrollButton
                        uid={uid}
                        token={token}
                        activity={activity}
                        isSignedUp={isSignedUp}
                        hasAgeConflict={hasAgeConflict}
                        hasWeekdayConflict={hasWeekdayConflict}
                        className="bg-purple text-white text-lg text-center rounded-lg w-[80%] py-4 shadow shadow-black 
                                    col-start-2 row-start-2 justify-self-start self-center "
                    />
                }
            </div>
            <h2 className="text-2xl mt-6 mb-2 px-6">{activity.name}</h2>
            <p className="text-lg px-6 mb-2 flex justify-between">
                {activity.minAge} - {activity.maxAge} år
                <span className="capitalize">{activity.weekday} {activity.time}</span>
            </p>
            <p className="text-lg px-6">{activity.description}</p>

        </main>
    )
}