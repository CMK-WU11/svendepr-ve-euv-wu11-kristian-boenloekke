import Image from "next/image";
import Button from "./Button";

export default function Welcome() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 h-screen">
        <Image src="/splash-image.jpg" width={4000} height={4000} alt="splash" className=" col-start-1 col-span-2 row-start-1 row-end-3 z-[-10] h-screen object-cover" />
        <div className="flex flex-col gap-2 col-start-1 row-start-2 self-end mb-5">
            <p className="uppercase roboto text-4xl/9 font-bold pl-6 pr-2">Landrup</p>
            <p className="racing-sans-one stroked text-[#E856EB] text-[72px]/9 uppercase pl-6 pr-2">Dans</p>
            <div className="h-4 bg-[#913693] my-2" />
        </div>
            <Button className="col-start-1 col-span-2 row-start-3 self-end mb-20 justify-self-center fade-in" >
                Kom i gang
            </Button>
        </div>
    )
}