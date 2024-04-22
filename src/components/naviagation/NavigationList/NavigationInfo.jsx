const NavigationInfo = ({ setShowBackdrop, showbackdrop, content }) => {
	return (
		<>
			<div
				className={`${
					showbackdrop ? "flex" : "hidden"
				}  absolute w-full top-[77px] left-0 h-screen bg-black`}>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1'></div>
				<div className='screen-settings py-10 px-5  '>
					<div className='   gap-10 flex  items-start '>
						<div className=' h-full'>
							{<p className='text-6xl text-gradient  '>{content.title}</p> ||
								"fallback"}
						</div>
						<div className='flex flex-wrap   gap-2  '>
							<div className=' h-[900px] w-[1200px] flex flex-col flex-wrap'>
								{content.options?.map(item => {
									return (
										<div
											className='flex flex-col  gap-3  h-fit w-[350px] p-4 '
											key={item.main}>
											<p className='text-3xl mb-3 text-[#00fff0]'>{item.main}</p>
											{item.rest.map(item => (
												<p className='text-md' key={item}>
													{item}
												</p>
											))}
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1'></div>
			</div>
		</>
	)
}

export default NavigationInfo
