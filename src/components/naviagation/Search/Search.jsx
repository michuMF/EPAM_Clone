import { IoIosSearch } from "react-icons/io"
import SearchBar from "./SearchBar"
import { useState } from "react"

const Search = () => {
	const [translate, setTranslate] = useState(false)
	return (
		<div>
			<IoIosSearch
				onClick={() => setTranslate(!translate)}
				className='w-[24px] h-[24px] text-gradient cursor-pointer'
			/>
			<div
				className={`absolute -bottom-0 left-0 right-0 max-w-[1200px] mx-auto transition-opacity ${
					translate ? "opacity-100 " : "opacity-0 pointer-events-none "
				}  bg-[#1B1B1B}   	`}>
				<SearchBar />
			</div>
		</div>
	)
}

export default Search
