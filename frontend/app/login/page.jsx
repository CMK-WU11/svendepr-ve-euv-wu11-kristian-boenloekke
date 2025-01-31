import Image from "next/image"
import LoginForm from "@/components/FormLogin"

export const metadata = {
    title: 'Log ind',
    alternates: {
        canonical: 'https://kb-landrup-dans-blue.vercel.app/login',
    }
}

export const dynamic = 'force-static'

export default function Login() {
    return (
        <>
            <main className="grid grid-cols-1 grid-rows-4 h-screen overflow-hidden">
                <LoginForm />
                <Image src="/splash-image.jpg" width={4000} height={4000} alt="splash" className=" col-start-1 row-start-1 row-end-4 z-[-20] h-screen object-cover filter brightness-75" />
                <div className="col-start-1 row-start-1 row-end-4 h-[120vh] w-[120vw] object-cover bg-purple/50 z-[-10] rotate-[58deg]" />
            </main>
        </>

    )
}