import { IoIosSearch } from "react-icons/io"
import SearchBar from "./SearchBar"

const Search = () => {
	return (
		<div>
			<IoIosSearch className='w-[24px] h-[24px] text-gradient cursor-pointer' />
			<SearchBar />
		</div>
	)
}

export default Search
