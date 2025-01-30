'use server'
import z from 'zod'
import { redirect } from 'next/navigation'

//funktion for udregning af brugers alder er hentet fra denne artikel
// https://www.slingacademy.com/article/calculating-age-or-time-spans-from-birthdates-in-javascript/

export async function signUp(formState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const birthdate = formData.get('birthdate')
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn er påkrævet" }),
        password: z.string().min(1, { message: "Adgangskode er påkrævet" }),
        firstname: z.string().min(1, { message: "Fornavn er påkrævet" }),
        lastname: z.string().min(1, { message: "Efternavn er påkrævet" }),
        birthdate: z.string()
            .min(1, { message: "Fødselsdato er påkrævet" })
            .refine((val) => !isNaN(Date.parse(val)), { message: "Ugyldig dato" })
            .transform((val) => new Date(val))
    })

    const validated = schema.safeParse({ username, password, firstname, lastname, birthdate })

    if (!validated.success) {
        const errors = validated.error.format()
        console.log('errors', errors);


        return {
            success: false,
            formData: {
                username,
                password,
                firstname,
                lastname,
                birthdate

            },
            errors
        }
    }

    function calculateAge(birthdate) {
        const today = new Date()
        const birthDate = new Date(birthdate)
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDifference = today.getMonth() - birthDate.getMonth()

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age
    }

    const age = calculateAge(birthdate)

    const response = await fetch(`${baseUrl}/api/v1/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
            age,
            role: 'default',
        })
    })

    if (!response.ok) {
        throw new Error('Failed to sign up',)
    }

    const result = await response.json()
    console.log('Sign up successful', result)

    if (response.ok) {
        redirect('/login')
    }

}