'use server'
import z from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signIn(formState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    
    const schema = z.object({
        username: z.string().min(1, {message: "brugernavn er påkrævet"}),
        password: z.string().min(1, {message: "adgangskode er påkrævet"}),
    })

    const validated = schema.safeParse({ username, password })

    if (!validated.success) {
        const errors = validated.error.format()
        
        return {
            success: false,
            formData: {
                username,
                password
            },
            errors    
        }
    }

    const response = await fetch(`${baseUrl}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
    
    
    if (response.status === 401) {
        return {
            success: false,
            errors: ['Forkert brugernavn eller adgangskode']
        }
        
    }

    if (response.ok) {
        const data = await response.json()
        const cookieStore = await cookies()
  
        const expires = new Date(data.validUntil)
        
        cookieStore.set('dans_uid', data.userId, { expires: expires })
        cookieStore.set('dans_token', data.token, { expires: expires })

        redirect('/calendar')

    }
   
}