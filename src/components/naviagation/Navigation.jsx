import { IoIosSearch } from "react-icons/io"
import { navigationList } from "../../constant/navigationList"
import { Link } from "react-router-dom"
import { IoIosArrowRoundDown } from "react-icons/io"

import Logo from "../Logo"

const Navigation = ({ darkMode, setDarkMode }) => {
	const darkModeHandler = () => {
		setDarkMode(!darkMode)
	}
	return (
		<header
			className={`${
				darkMode ? "bg-black text-white" : "bg-white text-black"
			} fixed top-0 z-10     w-full  border-white border-b    `}>
			<div className='flex items-center  justify-center h-[75px]  max-w-[1200px] mx-auto   '>
				<div className='border-r  pr-5 h-full w-[10%] justify-end bg-blue   flex items-center min-w-20  '>
					<button
						className={` relative h-5   w-10   after:absolute after:left-2 after:bottom-2 after:w-[24px] after:h-[2px] ${
							darkMode
								? "after:bg-white before:bg-white"
								: "after:bg-black before:bg-black"
						} before:top-0 before:left-2  before:absolute before:w-[30px] before:h-[2px]  hover:after:bg-[#00fff0] hover:before:bg-[#00fff0] `}></button>
				</div>

				<div className='flex-row-reverse  flex items-center  justify-between   lg:flex-row lg:justify-start lg:px-10 w-full px-6   '>
					<div className='flex items-center gap-20 lg:mr-14   '>
						<Logo darkMode={darkMode} />
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
					</div>

					<nav className=' gap-7 font-semibold hidden lg:flex '>
						{navigationList.map(item => (
							<Link to={item.link} key={item.title}>
								<h3 className='cursor-pointer hover:text-[#00fff0] transition-colors'>
									{item.title}
								</h3>
							</Link>
						))}
					</nav>
					<div className='hidden  p-[2px] px-[3px] rounded-full  bg-gradient ml-10 mr-4 lg:block'>
						<button
							className={` ${
								darkMode ? "bg-black text-white" : "bg-white text-black"
							} px-5 py-[6px] rounded-full font-semibold tracking-wider text-sm hover:bg-white hover:text-black `}>
							CONTACT US
						</button>
					</div>

					<p className='text-sm items-center gap-1 mr-1 hover:text-[#00fff0] cursor-pointer hidden lg:flex'>
						{" "}
						Global (EN) <IoIosArrowRoundDown className='text-2xl ' />{" "}
					</p>

					<IoIosSearch className='w-[24px] h-[24px] text-gradient cursor-pointer' />
				</div>
			</div>
		</header>
	)
}

export default Navigation
