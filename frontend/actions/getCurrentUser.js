'use server'
import { cookies } from 'next/headers'

export async function getCurrentUser() {
    const cookiesStore = await cookies()
    const token = cookiesStore.get('dans_token')
    const uid = cookiesStore.get('dans_uid')
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
   
    if (!token) {
        return null
    }

    const response = await fetch(`${baseUrl}/api/v1/users/${uid.value}`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })

    if (!response.ok) {
        return null
    }

    return await response.json()

}