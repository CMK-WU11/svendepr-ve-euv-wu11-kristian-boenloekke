import CardActivity from "@/components/CardActivity"
import Header from "@/components/Header"

// export const dynamic = 'force-dynamic'
// export const revalidate = 3600

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const response = await fetch(
    `${baseUrl}/api/v1/activities`,
    { cache: 'force-cache' },
    { next: { revalidate: 3600 } }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data. Check your internet connection or refresh browser')
  }

  const activities = await response.json()

  return (
    <>
      <Header title="Aktiviteter" />
      <main>
        <ul className="p-6 flex flex-col gap-6 last:mb-20">
          {activities.map(activity => (
            <li key={activity.id} className="h-[40vh]">
              <CardActivity activity={activity} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

