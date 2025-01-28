import { getCurrentUser } from "@/actions/getCurrentUser"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Calendar() {
    const user = await getCurrentUser()
    const activities = await fetch('http://localhost:4000/api/v1/activities'
    ).then(r => r.json())

    if (!user) {
        return redirect('/login')
    }

    const userId = user.id

    const userActivities = activities.filter(activity =>
        activity.users.some(user => user.id === userId)
    )

    return (
        <div>
            <h1 className="text-4xl p-6">Kalender</h1>
            <ul>
                {userActivities.map(activity => (
                    <li key={activity.id} className="bg-white text-black p-6">
                        <Link href={`/activities/${activity.id}`}>
                            <h2>{activity.name}</h2>
                            <p className="flex justify-between">{activity.weekday} <span>{activity.time}</span></p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
