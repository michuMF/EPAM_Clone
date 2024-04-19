const DarkMode = ({ dark }) => {
	return (
		<div className='h-screen grid place-content-center'>
			<h1 className={`text-9xl ${dark ? "text-black" : "text-red-300"}`}>TEXT</h1>
		</div>
	)
}

export default DarkMode
