
import { Calendar, Home, Search } from "lucide-react"
import Link from "next/link"
export default function Drawer() {
    return (
        <nav className="top-shadow bg-white text-black fixed bottom-0 w-full">
            <ul className="flex justify-between p-4">
                <li className="rounded-full border-2 border-black p-2">
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
                    <Link href='#' >
                        <Calendar />
                    </Link>
                </li>
            </ul>
        </nav>


    )
}