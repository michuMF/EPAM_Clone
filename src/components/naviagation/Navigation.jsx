import Logo from "../Logo"

import Menu from "./Menu"
import SwitchTheme from "./SwitchTheme"
import NavigationList from "./NavigationList/NavigationList"

import ContactUs from "./ContactUs"
import LanguageMenu from "./LanguageMenu"
import Search from "./Search/Search"

const Navigation = ({ darkMode, setDarkMode }) => {
	const darkModeHandler = () => {
		setDarkMode(!darkMode)
	}
	return (
		<header
			className={`${
				darkMode ? "bg-black text-white" : "bg-white text-black "
			} fixed top-0 z-10     w-full  border-white border-b     `}>
			<div className='flex items-center  justify-center h-[75px]  max-w-[1200px] mx-auto     '>
				<Menu darkMode={darkMode} />

				<div className='flex-row-reverse  flex items-center  justify-between   lg:flex-row lg:justify-start lg:px-10 w-full px-6   '>
					<div className='flex items-center gap-20 lg:mr-14   '>
						<Logo darkMode={darkMode} />
						<SwitchTheme darkMode={darkMode} darkModeHandler={darkModeHandler} />
					</div>

					<nav className=' gap-7 font-semibold hidden lg:flex '>
						<NavigationList />
					</nav>
					<div className='hidden  p-[2px] px-[3px] rounded-full  bg-gradient ml-10 mr-4 lg:block'>
						<ContactUs darkMode={darkMode} />
					</div>
					<LanguageMenu />
					<Search darkMode={darkMode} />
				</div>
			</div>
		</header>
	)
}

export default Navigation
