'use client'
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { signOut } from "@/actions/signOut"
import Image from "next/image"
// import { useCookies } from "react-cookie"

export default function BurgerMenu({ className, user }) {
    const [showMenu, setShowMenu] = useState(false)
    // const [cookies, setCookie, removeCookie] = useCookies(['dans_token', 'dans_uid'])

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    function handleLogout() {
        signOut()
        toggleMenu()
    }

    return (
        <>
            <button onClick={toggleMenu}>
                <Menu size={40} className={className}/>
            </button>

            {showMenu && (
                <div className="absolute inset-0 h-screen bg-white opacity-100 text-purple text-4xl flex flex-col z-30">
                    <Image src="/splash-image.jpg" width={4000} height={4000} alt="splash" priority className="absolute inset-0 opacity-30 h-full object-cover" />
                    <button className="self-end p-6 z-40" onClick={toggleMenu}>< X size={40} /> </button>
                    <nav className="text-center mt-20 flex flex-col gap-8 z-40">
                        <ul className="flex flex-col gap-8">
                            <li>
                                <Link href='/' onClick={toggleMenu}>
                                    Aktiviteter
                                </Link>
                            </li>
                            <li>
                                <Link href='/search' onClick={toggleMenu}>
                                    Søg
                                </Link>
                            </li>
                        </ul>
                        {user ? (
                            <ul className="flex flex-col gap-8">
                                <li>
                                    <Link href='/calendar' onClick={toggleMenu}>
                                        Min Kalender
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        Log ud
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="flex flex-col gap-8">
                                <li>
                                    <Link href='/login' onClick={toggleMenu}>
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/register' onClick={toggleMenu}>
                                        Opret bruger
                                    </Link>
                                </li>
                            </ul>
                        )}

                    </nav>
                </div>
            )}
        </>
    )
}