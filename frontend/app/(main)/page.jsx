import CardActivity from "@/components/CardActivity"
import Header from "@/components/Header"

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const activities = await fetch(`${baseUrl}/api/v1/activities`
  ).then(r => r.json())

  return (
    <>
      <Header title="Aktiviteter" />
      <ul className="px-6 pb-12 flex flex-col gap-6 h-[80vh] overflow-y-scroll no-scrollbar">
        {activities.map(activity => (
          <li key={activity.id}>
            <CardActivity activity={activity} />
          </li>
        ))}
      </ul>
    </>
  )
}

