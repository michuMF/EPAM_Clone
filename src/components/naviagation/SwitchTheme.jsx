const SwitchTheme = ({ darkMode, darkModeHandler }) => {
	return (
		<div
			className={`hidden w-[54px]  border-[3px]  h-[28px] rounded-full relative  lg:block ${
				darkMode ? "border-white" : "border-black"
			}`}>
			<button
				onClick={darkModeHandler}
				className={`w-3 h-3 bg-gradient rounded-full absolute top-0 transition-transform duration-500  translate-y-1/2  ${
					darkMode ? "left-2" : "translate-x-8"
				}`}></button>
		</div>
	)
}

export default SwitchTheme
