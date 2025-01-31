import Drawer from "@/components/Drawer";

export default function MainLayout({ children }) {

	return (
		<>
			{children}
			<Drawer />
		</>
	)
}