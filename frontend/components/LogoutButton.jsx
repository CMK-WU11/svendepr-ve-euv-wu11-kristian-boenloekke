'use client'
import { signOut } from "@/actions/signOut"

export default function LogoutButton() {
    return (
        <button onClick={signOut}>Log ud</button>
    )
}