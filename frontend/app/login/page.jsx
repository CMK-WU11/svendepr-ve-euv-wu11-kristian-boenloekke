import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
export default function Login() {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-4 h-screen overflow-hidden">
                <Image src="/splash-image.jpg" width={4000} height={4000} alt="splash" className=" col-start-1 row-start-1 row-end-4 z-[-20] h-screen object-cover" />
                <div className="col-start-1 row-start-1 row-end-4 h-[120vh] w-[140vw] object-cover bg-purple/50 z-[-10] rotate-[58deg]" />
                <form action="" className="col-start-1 row-start-2 w-full flex flex-col gap-4 p-6 pt-14">
                    <h1 className="text-5xl">Log in</h1>
                    <input type="text" placeholder="Brugernavn" className="p-4 text-black text-lg" />
                    <input type="password" placeholder="Password" className=" p-4 text-black text-lg" />
                    <Button>
                        Log ind
                    </Button>
                    <p className="text-center text-lg/4 mt-4">Har du ingen bruger? </p>
                    <Link href="/register" className="font-semibold text-purple text-center text-xl/3">Registre dig her</Link>
                </form>
            </div>
        </>

    )
}