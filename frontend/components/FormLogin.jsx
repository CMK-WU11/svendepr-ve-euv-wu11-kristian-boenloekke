'use client'
import { useActionState } from "react"
import { signIn } from "@/actions/signIn"


export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(signIn)

    return (
        <form action={formAction} className="flex flex-col gap-4 text-black px-10">
            <label htmlFor="username" className="flex flex-col gap-1"> Username
                <input
                    type="text"
                    name="username"
                    className="border border-black text-black p-4"
                />
                <span>{formState?.errors?.username._errors}</span>
            </label>
            <label htmlFor="password" className="flex flex-col gap-1"> Password
                <input
                    type="password"
                    name="password"
                    className="border border-black text-black p-4"
                />
                <span>{formState?.errors?.password._errors}</span>

            </label>
            <button disabled={isPending} type="submit" className={`px-4 py-2 border border-black ${isPending ? 'bg-gray' : 'bg-purple'}`}>
                {isPending ? 'Logging in...' : 'Log in'}
            </button>

            <span>{formState?.errors._errors}</span>
        </form>
    )
}