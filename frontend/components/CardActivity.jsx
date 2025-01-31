import Image from "next/image";
import Link from "next/link";

export default function CardActivity({ activity }) {
    return (
        <Link href={`/activities/${activity.id}`} prefetch>
            <article className="rounded-l-3xl rounded-tr-3xl grid grid-cols-1 grid-rows-3 h-full">
                <Image
                    src={`/${activity.id}.jpg`}
                    width={1000} height={1000} alt={activity.name}
                    className="rounded-l-3xl rounded-tr-3xl col-start-1 row-start-1 row-span-3 z-[-10] h-full object-cover"
                    priority
                />

                <div className="bg-pink rounded-tr-3xl rounded-bl-3xl row-start-3 col-start-1 opacity-90 text-lg p-6">
                    <h2>{activity.name}</h2>
                    <p>{activity.minAge}-{activity.maxAge} år</p>
                </div>
            </article>
        </Link>
    )
}