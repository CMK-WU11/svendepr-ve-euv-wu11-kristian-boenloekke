'use server'
import { cookies } from 'next/headers'

export async function getCurrentUser() {
    const cookiesStore = await cookies()
    const token = cookiesStore.get('dans_token')
    const uid = cookiesStore.get('dans_uid')

    if (!token) {
        return null
    }

    const response = await fetch(`http://localhost:4000/api/v1/users/${uid.value}`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })

    if (!response.ok) {
        return null
    }

    return await response.json()

}