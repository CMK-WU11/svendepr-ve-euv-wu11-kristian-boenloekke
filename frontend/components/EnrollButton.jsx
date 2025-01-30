'use client'
import { useToast } from "@/contexts/ToastContext"
import { useState } from "react"

export default function EnrollButton({ isSignedUp, uid, token, activity, hasAgeConflict, hasWeekdayConflict, className }) {
    const [isEnrolled, setIsEnrolled] = useState(isSignedUp)
    const { toast } = useToast()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    if (!token) {
        return null
    }

    async function handleJoin() {

        if (hasAgeConflict) {
            toast(
                <div>
                    <p className="text-red-500 text-4xl py-6 text-center">Tilmelding fejlede</p>
                    <p>
                        Du skal være mellem {activity.minAge} og {activity.maxAge} år for at deltage i {activity.name}
                    </p>
                </div>,
                {duration: 5000}

            )
            return
        }

        if (hasWeekdayConflict) {
            toast(
                <div>
                    <p className="text-red-500 text-4xl py-6 text-center">Tilmelding fejlede</p>
                    <p>
                        Grundet stor efterspørgelse på vores hold, kan du kun være tilmelt ét hold om dagen
                    </p>
                </div>,
                {duration: 5000}

            )
            return
        }

        const response = await fetch(`${baseUrl}/api/v1/users/${uid}/activities/${activity.id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token?.value}`
            }
        })

        if (!response.ok) {
            console.log(response)
            return
        }

        const result = await response.json()
       

        if (response.ok) {
            setIsEnrolled(true)
            toast(
                <div>
                    <p className="text-green-500 text-4xl py-6 text-center">Succes!</p>
                    <p>
                        Du er nu tilmeldt {result.name}
                    </p>
                </div>,
                {duration: 2500}
            )
        }
    }

    async function handleLeave() {
        const response = await fetch(`${baseUrl}/api/v1/users/${uid}/activities/${activity.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token?.value}`
            }
        })

        if (!response.ok) {
            console.log(response)
            return
        }

        if (response.ok) {
            setIsEnrolled(false)
            toast(
                <div>
                    <p className="text-green-500 text-4xl py-6 text-center">Succes!</p>
                    <p>
                        Du er nu afmeldt {activity.name}
                    </p>
                </div>,
                {duration: 2500}
            )
        }
    }


    return (
        <>
            {isEnrolled
                ? <button className={className} onClick={handleLeave}>Afmeld</button>
                : <button className={className} onClick={handleJoin}>Tilmeld</button>}
        </>
    )
}