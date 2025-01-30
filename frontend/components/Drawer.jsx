import { Calendar, Home, Search, LogIn } from "lucide-react"
import Link from "next/link"
import { getCurrentUser } from "@/actions/getCurrentUser"
import LogoutButton from "./LogoutButton"

export default async function Drawer() {
    const user = await getCurrentUser()
    // const headerList = await headers()
    // const currentPath = headerList.get("x-current-path")
    
    // const isActive = (href) => currentPath === href

    return (
        <nav className="top-shadow bg-white text-black fixed bottom-0 w-full">
            <ul className="flex justify-between p-4 px-6">
                <li className={`rounded-full border-black border-2  p-2`}>
                    <Link href='/' >
                        <Home />
                    </Link>
                </li>
                <li className="rounded-full border-2 border-black p-2">
                    <Link href='/search' >
                        <Search />
                    </Link>
                </li>
                <li className="rounded-full border-2 border-black p-2">
                    {user ?
                        <Link href='/calendar'>
                            <Calendar />
                        </Link>
                        :
                        <Link href='/login' >
                            <LogIn />
                        </Link>
                    }
                </li>
            </ul>
        </nav>
    )
}