import Drawer from "@/components/Drawer";

export default function MainLayout({ children }) {
	return (
		<>
			<main>
				{children}
			</main>
            <Drawer />
		</>
	)
}