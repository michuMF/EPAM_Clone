import DropDownItem from "./DropDownItem"

const NavigationInfo = ({ setShowBackdrop, showBackdrop, content }) => {
	const { title, options } = content
	const { firstRow, secondRow, thirdRow } = options

	return (
		<>
			<div
				onMouseEnter={() => setShowBackdrop(true)}
				onMouseLeave={() => setShowBackdrop(false)}
				className={`${
					showBackdrop ? " opacity-100  " : " opacity-0"
				}  flex  absolute w-full top-[77px] left-0 h-screen transition-opacity  bg-black`}>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1 '></div>
				<div
					className='screen-settings mt-20 
				 grid grid-cols-4 gap-10'>
					<div className=''>
						<h1 className='text-[55px] text-gradient  '>{title}</h1>
					</div>
					<DropDownItem row={firstRow} />
					<DropDownItem row={secondRow} />
					<DropDownItem row={thirdRow} />
				</div>
				<div onMouseEnter={() => setShowBackdrop(false)} className=' flex-1 '></div>
			</div>
		</>
	)
}

export default NavigationInfo
