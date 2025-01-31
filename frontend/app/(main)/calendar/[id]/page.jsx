export const metadata = {
    title: 'Kaldender',
    alternates: {
        canonical: 'https://kb-landrup-dans-blue.vercel.app/calendar',
    }
}

export const dynamic = 'force-dynamic'

export default async function InstructorView({ params }) {
    const { id } = await params
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const activity = await fetch(`${baseUrl}/api/v1/activities/${id}`, {cache: 'no-store'}).then(r => r.json())
    
    const participantsCount = activity.users.length
    
    return (
        <main className="p-6">
            <h1 className=" mb-2 text-4xl whitespace-nowrap truncate text-ellipsis">{activity.name}</h1>
            <p className=" mb-6 text-lg capitalize">{activity.weekday} {activity.time}</p>
            <h2 className="text-xl mb-2">Deltagere ({participantsCount}) :</h2>
            <ul className="flex flex-col gap-2 text-lg">
                {activity.users.map(user => (
                    <li key={user.id}>
                        <p>{user.firstname} {user.lastname}</p>
                    </li>
                ))}
            </ul>
        </main>
    )

}