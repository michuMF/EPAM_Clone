import { IoIosArrowRoundDown } from "react-icons/io"

const LanguageMenu = () => {
	return (
		<div>
			<p className='text-sm items-center gap-1 mr-1 hover:text-[#00fff0] cursor-pointer hidden lg:flex'>
				{" "}
				Global (EN) <IoIosArrowRoundDown className='text-2xl ' />{" "}
			</p>
		</div>
	)
}

export default LanguageMenu
