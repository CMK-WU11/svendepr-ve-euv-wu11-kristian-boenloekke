export default async function InstructorView({ params }) {
    const { id } = await params
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const activity = await fetch(`${baseUrl}/api/v1/activities/${id}`).then(r => r.json())
    
    const participantsCount = activity.users.length
    
    return (
        <>
            <h1 className="text-4xl p-6 whitespace-nowrap truncate text-ellipsis">{activity.name}</h1>
            <p className="text-lg capitalize">{activity.weekday} {activity.time}</p>
            <h2 className="px-6 pb-4 text-xl">Deltagere ({participantsCount}) :</h2>
            <ul className="px-6 flex flex-col gap-2 text-lg">
                {activity.users.map(user => (
                    <li key={user.id}>
                        <p>{user.firstname} {user.lastname}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}