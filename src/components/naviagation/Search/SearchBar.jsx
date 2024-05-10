import { searchOptions } from "../../../constant/searchOptions"

const SearchBar = () => {
	return (
		<div className='p-4 absolute -bottom-1 left-0 right-0 max-w-[1200px] mx-auto  translate-y-[100%] bg-[#1B1B1B]  flex flex-col gap-10  '>
			<h3 className='text-xl tracking-widest font-bold'>Search</h3>
			<div className='flex justify-between items-center gap-5   '>
				<input
					type='text'
					placeholder='What are you looking for?'
					className='bg-transparent outline-none  w-full border-b pb-6 focus:border-[#00f6ff]   '
				/>
				<div className='hidden  p-[1px] px-[2px] rounded-full  bg-gradient ml-10 mr-4 lg:block'>
					<button className='px-12 bg-[#1B1B1B] py-3 border rounded-full border-gradient'>
						<p className='text-xl text-bold tracking-[0.2em] font-bold'>FIND</p>
					</button>
				</div>
			</div>
			<div>
				<h4 className='text-sm tracking-widest font-bold mb-6'>
					FREQUENT SEARCHES
				</h4>
				<div className='space-y-4'>
					{searchOptions.map(item => (
						<p className='font-thin' key={item}>
							{item}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default SearchBar
