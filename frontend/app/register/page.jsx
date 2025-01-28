import SignUpForm from "@/components/FormSignUp";
import Image from "next/image";

export default function Register() {
    return (
        <main className="relative">
            <Image
                src="/splash-image.jpg"
                width={4000} height={4000}
                alt="splash"
                className="absolute inset-0 -z-10 h-screen object-cover filter brightness-[40%]"
                priority
            />

            <h1 className="text-4xl px-6 pt-4">Opret ny bruger</h1>
            <SignUpForm />
        </main>

    )
}