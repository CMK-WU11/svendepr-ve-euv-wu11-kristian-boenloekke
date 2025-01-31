import SignUpForm from "@/components/FormSignUp";
import Image from "next/image";

export const metadata = {
    title: 'Opret',
    alternates: {
        canonical: 'https://kb-landrup-dans-blue.vercel.app/register',
    }
}

export const dynamic = 'force-static'

export default function Register() {
    return (
        <main className="relative">
            <h1 className="text-4xl px-6 pt-4">Opret ny bruger</h1>
            <SignUpForm />

            <Image
                src="/splash-image.jpg"
                width={4000} height={4000}
                alt="splash"
                className="absolute inset-0 -z-20 min-h-screen object-cover"
                priority
            />
            <div className="absolute inset-0 -z-10 min-h-screen bg-purple/50" />

        </main>

    )
}