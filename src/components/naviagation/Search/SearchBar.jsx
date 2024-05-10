const SearchBar = () => {
	return (
		<div className='p-4 absolute bottom-0 left-0 right-0 mx-28 translate-y-[100%] bg-[#1B1B1B] flex flex-col gap-10  '>
			<h3>Search</h3>
			<div className='flex justify-between items-center gap-5   '>
				<input
					type='text'
					placeholder='What are you looking for?'
					className='bg-transparent outline-none  w-full border-b pb-6   '
				/>
				<div className='hidden  p-[2px] px-[3px] rounded-full  bg-gradient ml-10 mr-4 lg:block'>
					<button className='px-12 py-3 border rounded-full border-gradient'>
						<p className='text-xl text-bold tracking-[0.2em] font-bold'>FIND</p>
					</button>
				</div>
			</div>
			<div>
				<h4>FREQUENT SEARCHES</h4>
				<p>Blockchain</p>
			</div>
		</div>
	)
}

export default SearchBar
