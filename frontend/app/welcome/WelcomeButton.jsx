'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomeButton() {
    const [animate, setAnimate] = useState(false)
    const router = useRouter()

    function handleClick() {
        setAnimate(true)
        setTimeout(() => router.push('/'), 800)
    }

    return (
        <>
        <div className={`fixed inset-0 h-screen w-screen bg-purple ${animate ? 'fade-in-2' : 'opacity-0'}`}/>
        <button onClick={handleClick} className={`z-10 col-start-1 col-span-2 row-start-3 self-end justify-self-center 
                bg-purple text-white text-lg rounded-2xl px-20 py-4 mb-20 shadow-2xl
                fade-in ${animate && 'fade-out'}`} >
            Kom i gang
        </button>
        </>
    )


}