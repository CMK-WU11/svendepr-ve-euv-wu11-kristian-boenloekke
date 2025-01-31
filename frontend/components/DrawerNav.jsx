'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Calendar, Home, LogIn, Search } from "lucide-react"

export default function DrawerNav({user}) {

    const pathname = usePathname()

    return (
        <nav className="top-shadow rounded-t bg-white text-black fixed bottom-0 w-full" >
                <ul className="flex justify-between p-4 px-6">
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        <Link href='/' prefetch >
                            <Home />
                        </Link>
                    </li>
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/search' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        <Link href='/search' prefetch >
                            <Search />
                        </Link>
                    </li>
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/calendar' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        {user ?
                            <Link href='/calendar' prefetch>
                                <Calendar />
                            </Link>
                            :
                            <Link href='/login' prefetch>
                                <LogIn />
                            </Link>
                        }
                    </li>
                </ul>
            </nav>

    )
}