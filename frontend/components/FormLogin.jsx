'use client'
import { useActionState } from "react"
import { signIn } from "@/actions/signIn"
import { useRef, useEffect } from "react"
import Link from "next/link"


export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(signIn)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        if (formState?.formData) {
            usernameRef.current.value = formState.formData.username || ''
            passwordRef.current.value = formState.formData.password || ''
        }
    }, [formState?.formData])

    return (
        <form action={formAction} className="col-start-1 row-start-2 w-full flex flex-col p-6 pt-14">
            <h1 className="text-5xl mb-4">Log in</h1>
            <div className="mb-4 flex flex-col">
                <input
                    type="text"
                    name="username"
                    ref={usernameRef}
                    placeholder="Brugernavn"
                    className={`p-4 text-black text-lg rounded placeholder:text-black ${formState?.errors?.username?._errors && 'border-t-2 border-x-2 rounded-b-none border-red-500'}`}
                />
                {formState?.errors?.username?._errors &&
                    <span className="text-red-500 text-lg border-b-2 border-x-2 border-red-500 bg-black/70 pl-2 rounded-b">{formState?.errors?.username._errors}</span>
                }
            </div>
            <div className="mb-4 flex flex-col">
                <input
                    type="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Password"
                    className={`p-4 text-black text-lg rounded placeholder:text-black ${formState?.errors?.password?._errors && 'border-t-2 border-x-2 rounded-b-none border-red-500'}`}
                />
                {formState?.errors?.password?._errors &&
                    <span className="text-red-500 text-lg border-b-2 border-x-2 border-red-500 bg-black/70 pl-2 rounded-b">{formState?.errors?.password._errors}</span>
                }
            </div>

            <button disabled={isPending} type="submit" className={`bg-purple text-white text-lg rounded-lg px-20 py-4 shadow-2xl ${isPending ? 'bg-gray' : 'bg-purple'}`}>
                {isPending ? 'Logging in...' : 'Log in'}
            </button>

            {/* {formState?.errors &&
                <span className="text-red-500 mt-2 p-2 bg-black/50 rounded">{formState?.errors}</span>
            } */}

            <div className="text-center pt-2">
                <p className="text-lg/4 my-2">Har du ingen bruger? </p>
                <Link href="/register" className="underline text-lg/3">Opret dig her</Link>
            </div>

        </form>
    )
}