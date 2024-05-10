const NavigationInfo = ({ setShowBackdrop, showBackdrop, content }) => {
	const { title, options } = content
	const { firstRow, secondRow, thirdRow } = options
	console.log(thirdRow)

	return (
		<>
			<div
				onMouseEnter={() => setShowBackdrop(true)}
				onMouseLeave={() => setShowBackdrop(false)}
				className={`${
					showBackdrop ? " opacity-100 " : " opacity-0"
				}  flex  absolute w-full top-[77px] left-0 h-screen transition-opacity  bg-black`}>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1 '></div>
				<div
					className='screen-settings mt-20 
				 grid grid-cols-4 gap-10'>
					<div className=''>
						<h1 className='text-6xl text-gradient  '>{title}</h1>
					</div>
					<div className=' flex flex-col gap-8'>
						{firstRow?.map(item => (
							<div key={item?.main} className=' '>
								<h2 className='text-2xl text-gradient mb-2'>{item?.main}</h2>

								<div className='flex flex-col gap-3 mt-6'>
									{item.rest?.map(item => (
										<p className='text-md' key={item}>
											{item}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
					<div className=' flex flex-col gap-8'>
						{secondRow?.map(item => (
							<div key={item?.main} className=' '>
								<h2 className='text-2xl text-gradient '>{item?.main}</h2>

								<div className='flex flex-col gap-3 '>
									{item.rest?.map(item => (
										<p className='text-md' key={item}>
											{item}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
					<div className=' flex flex-col gap-8'>
						{thirdRow?.map(item => (
							<div key={item?.main} className=' '>
								<h2 className='text-2xl text-gradient '>{item?.main}</h2>

								<div className='flex flex-col gap-3 '>
									{item.rest?.map(item => (
										<p className='text-md' key={item}>
											{item}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
					{/* <div className='   gap-10 flex  items-start '>
						<div className=' h-full'>
							<p className='text-6xl text-gradient  '>{title}</p>
						</div>
						<div className='flex flex-wrap   gap-2  '>
							<div className=' h-[900px] w-[1200px] flex flex-col flex-wrap'>
								{options.map(item => {
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
					</div> */}
				</div>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1 '></div>
			</div>
		</>
	)
}

export default NavigationInfo
