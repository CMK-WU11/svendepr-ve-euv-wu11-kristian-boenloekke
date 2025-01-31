import BurgerMenu from "./BurgerMenu"
import { getCurrentUser } from "@/actions/getCurrentUser"

export default async function Header({ title, children }) {
    const user = await getCurrentUser()
   
    return (
        <header className="p-6 w-full z-10 sticky top-0 shadow-lg bg-purple  rounded-b-lg">
            <div className="w-full flex justify-between">
                <h1 className="text-4xl">{title}</h1>
                <BurgerMenu user={user} />
            </div>
            {children}

        </header>
    )
}