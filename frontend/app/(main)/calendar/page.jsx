import { getCurrentUser } from "@/actions/getCurrentUser"
import Header from "@/components/Header"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
    title: 'Kaldender',
    alternates: {
        canonical: 'https://kb-landrup-dans-blue.vercel.app/calendar',
    }
}

export const dynamic = 'force-dynamic'

export default async function Calendar() {
    const user = await getCurrentUser()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    
    const activities = await fetch(`${baseUrl}/api/v1/activities`, {cache: 'no-store'}
    ).then(r => r.json())

    if (!user) {
        return redirect('/login')
    }

    const instructorActivities = activities.filter(activity =>
        activity.instructorId === user?.id
    )

    return (
        <div>
            <Header title="Kalender" />
            {user?.role === 'instructor' ?
                <ul className="px-6 flex flex-col gap-6">
                    {instructorActivities.map(activity => (
                        <li key={activity.id} className="bg-white text-black p-4 rounded-2xl">
                            <Link href={`/calendar/${activity.id}`}>
                                <h2 className="text-2xl truncate whitespace-nowrap text-ellipsis">{activity.name}</h2>
                                <p className="flex justify-between text-lg capitalize">{activity.weekday} <span>{activity.time}</span></p>
                            </Link>
                        </li>

                    ))}
                </ul>
                :
                <ul className="px-6 flex flex-col gap-6">
                    {user?.activities.map(activity => (
                        <li key={activity.id} className="bg-white text-black p-4 rounded-2xl">
                            <Link href={`/activities/${activity.id}`}>
                                <h2 className="text-2xl truncate whitespace-nowrap text-ellipsis">{activity.name}</h2>
                                <p className="flex justify-between text-lg capitalize">{activity.weekday} {activity.time}</p>
                            </Link>

                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}
