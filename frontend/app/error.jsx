"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="error-container p-6 bg-white text-black h-screen flex flex-col gap-6">
			<h1 className="text-3xl text-center">Oops! Der er sket en fejl</h1>
			<p>{error.message || "Noget gik galt. Prøv venligst igen."}</p>
			
			<button className="border p-2 px-10 self-center" onClick={() => reset()}>Prøv igen</button>
		</div>
	);
}