'use client'
import { useState } from "react"

export default function EnrollButton({isSignedUp, handleLeave, handleJoin, className}) {
   const [isEnrolled, setIsEnrolled] = useState(isSignedUp)

   function handleClick() {
    if (isEnrolled) {
        setIsEnrolled(!isEnrolled)
        handleLeave()
    } else {
        setIsEnrolled(!isEnrolled)
        handleJoin()
    }
}
    return (
        <>
        {isEnrolled
            ? <button className={className} onClick={handleClick}>Afmeld</button>
            : <button className={className} onClick={handleClick}>Tilmeld</button>}
    </>
    )
}