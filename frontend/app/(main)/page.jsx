import CardActivity from "@/components/CardActivity";

export default async function Home() {
  const activities = await fetch('http://localhost:4000/api/v1/activities'
  ).then(r => r.json())

 

  return (
    <>
      <h1 className="text-4xl p-6">Aktiviteter</h1>
      <ul className="px-6 pb-12 flex flex-col gap-6 h-[80vh] overflow-y-scroll no-scrollbar">
        {activities.map(activity => (
          <li key={activity.id}>
            <CardActivity activity={activity} />
          </li>
        ))}
      </ul>
      Tjutjuuu
    </>
  )
}

