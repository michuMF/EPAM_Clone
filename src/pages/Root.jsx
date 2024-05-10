import { Outlet } from "react-router-dom"
import Navigation from "../components/naviagation/Navigation"
import { useState } from "react"

const Root = () => {
	const [darkMode, setDarkMode] = useState(true)

	return (
		<div
			className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
			<Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
			<Outlet />
		</div>
	)
}

export default Root
