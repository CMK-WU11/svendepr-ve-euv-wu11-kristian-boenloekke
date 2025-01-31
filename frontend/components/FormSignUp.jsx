'use client'

import { useActionState, useRef, useEffect } from "react"
import { signUp } from "@/actions/signUp"
import Link from "next/link"

export default function SignUpForm() {
    const [formState, formAction, isPending] = useActionState(signUp)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const birthdateRef = useRef(null)

    useEffect(() => {
        if (formState?.formData) {
            usernameRef.current.value = formState.formData.username || ''
            passwordRef.current.value = formState.formData.password || ''
            firstnameRef.current.value = formState.formData.firstname || ''
            lastnameRef.current.value = formState.formData.lastname || ''
            birthdateRef.current.value = formState.formData.birthdate || ''
        }
    }, [formState?.formData])

    return (
        <form action={formAction} className="flex flex-col gap-4 p-6 pt-2">
            <label className="flex flex-col gap-1">
                {formState?.errors?.username?._errors ? <span className="text-red-500 bg-black/50 pl-1">{formState?.errors?.username._errors}</span> : <span>Brugernavn</span>}
                <input
                    ref={usernameRef}
                    type="text"
                    name="username"
                    placeholder="Brugernavn"
                    className={`p-3 text-black placeholder:text-black placeholder:opacity-100 
                        ${formState?.errors?.username?._errors && 'border-2 border-red-500'}
                        `}
                />
            </label>
            <label className="flex flex-col gap-1">
                {formState?.errors?.password?._errors ? <span className="text-red-500 bg-black/50 pl-1">{formState?.errors?.password._errors}</span> : <span>Adgangskode</span>}
                <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Adgangskode"
                    className={`p-3 text-black placeholder:text-black placeholder:opacity-100 
                        ${formState?.errors?.password?._errors ? 'border-2 border-red-500' : ''} `}
                />

            </label>
            <label className="flex flex-col gap-1">
                {formState?.errors?.firstname?._errors ? <span className="text-red-500 bg-black/50 pl-1">{formState?.errors?.firstname._errors}</span> : <span>Fornavn</span>}
                <input
                    ref={firstnameRef}
                    type="text"
                    name="firstname"
                    placeholder="Fornavn"
                    className={`p-3 text-black placeholder:text-black placeholder:opacity-100 
                        ${formState?.errors?.firstname?._errors ? 'border-2 border-red-500' : ''} `}
                />

            </label>
            <label className="flex flex-col gap-1">
                {formState?.errors?.lastname?._errors ? <span className="text-red-500 bg-black/50 pl-1">{formState?.errors?.lastname._errors}</span> : <span>Efternavn</span>}
                <input
                    ref={lastnameRef}
                    type="text"
                    name="lastname"
                    placeholder="Efternavn"
                    className={`p-3 text-black placeholder:text-black placeholder:opacity-100 
                        ${formState?.errors?.lastname?._errors ? 'border-2 border-red-500' : ''} `}
                />
            </label>
            <label className="flex flex-col gap-1">
            {formState?.errors?.birthdate?._errors ? <span className="text-red-500 bg-black/50 pl-1">{formState?.errors?.birthdate._errors}</span> : <span>Fødselsdato</span>}
                <input
                    ref={birthdateRef}
                    type="date"
                    name="birthdate"
                    placeholder="Fødselsdato"
                    className={`p-3 text-black placeholder:text-black placeholder:opacity-100 
                        ${formState?.errors?.birthdate?._errors ? 'border-2 border-red-500' : ''} `}
                />
            </label>
            <button type="submit" disabled={isPending} className="bg-purple text-white text-lg rounded-2xl px-20 py-4 mt-2 shadow-2xl">
                {isPending ? 'Opretter bruger' : 'Opret ny bruger'}
            </button>

            <p className="text-center text-lg/4">Eller gå til <Link href="/login" className=" underline">Log ind</Link></p>
        </form>
    )
}