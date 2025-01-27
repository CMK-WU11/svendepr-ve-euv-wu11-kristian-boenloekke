import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
export default function Register() {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-3 h-screen">
                <Image src="/splash-image.jpg" width={4000} height={4000} alt="splash" className=" col-start-1 row-start-1 row-end-3 z-[-20] h-screen object-cover" />
                <div className="col-start-1 row-start-1 row-end-3 h-screen w-[120vw] overflow-hidden object-cover bg-purple/50 z-[-10] rotate-[60deg]" />
                <form action="" className="col-start-1 row-start-2 w-full flex flex-col gap-4 p-6">
                    <h1 className="text-5xl">Log in</h1>
                    <input type="text" placeholder="Brugernavn" className="p-3 py-4 text-black text-lg" />
                    <input type="password" placeholder="Password" className=" p-3 py-4 text-black text-lg" />

                    <Button>
                        Log ind
                    </Button>
                </form>

            </div>
        </>

    )
}