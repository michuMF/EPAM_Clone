const Menu = ({ darkMode }) => {
	return (
		<div className='border-r  pr-5 h-full w-[10%] justify-end bg-blue   flex items-center min-w-20  '>
			<button
				className={` relative h-5   w-10   after:absolute after:left-2 after:bottom-2 after:w-[24px] after:h-[2px] ${
					darkMode
						? "after:bg-white before:bg-white"
						: "after:bg-black before:bg-black"
				} before:top-0 before:left-2  before:absolute before:w-[30px] before:h-[2px]  hover:after:bg-[#00fff0] hover:before:bg-[#00fff0] `}></button>
		</div>
	)
}

export default Menu
