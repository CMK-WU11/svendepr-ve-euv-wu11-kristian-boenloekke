import CardActivity from "@/components/CardActivity";

export default async function Home() {
  const activities = await fetch('http://localhost:4000/api/v1/activities'
  ).then(r => r.json())

  return (
    <>
      <h1 className="text-4xl p-6">Aktiviteter</h1>
      Yeaah
      <ul className="p-6 flex flex-col gap-6 h-screen mb-20 overflow-y-scroll">
        {activities.map(activity => (
          <li key={activity.id}>
            <CardActivity activity={activity} />
          </li>
        ))}
      </ul>
    </>
  )
}
