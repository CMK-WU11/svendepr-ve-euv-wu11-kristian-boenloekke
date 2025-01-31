import { getCurrentUser } from "@/actions/getCurrentUser"
import DrawerNav from "./DrawerNav"

export default async function Drawer() {
    const user = await getCurrentUser()

    return (
        <DrawerNav user={user} />
    )
}