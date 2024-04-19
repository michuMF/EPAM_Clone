import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs"
const Arrows = ({
	slidersInfo,
	imgIndex,
	imgIndexDecrementHandler,
	imgIndexIncrementHandler,
}) => {
	return (
		<div className='mt-36  absolute bottom-[30%]   w-full max-w-[1152px] left-0 right-0 mx-auto px-10 xl:bottom-20 xl:justify-normal	  lg:px-0'>
			<div className='w-full  flex  items-center mb-4 xl:hidden'>
				{slidersInfo.map((slider, index) => (
					<div
						key={slider.title}
						className={`border-b bg-transparent  w-full transition-  ${
							imgIndex === index ? "bg-gradient  h-1 border-none" : "bg-white h-0"
						} `}></div>
				))}
			</div>
			<div className='flex items-center justify-between text-3xl gap-4 xl:justify-normal '>
				<button onClick={imgIndexDecrementHandler}>
					<BsArrowLeftCircle className='hover:text-[#00fff0] cursor-pointer transition-colors hover:scale-105' />
				</button>
				<p className='text-xl xl:hidden'>
					0{imgIndex + 1} / {slidersInfo.length}
				</p>
				<button onClick={imgIndexIncrementHandler}>
					<BsArrowRightCircle className='hover:text-[#00fff0] cursor-pointer transition-colors hover:scale-105' />
				</button>
				<p className='text-xl hidden xl:block'>
					0{imgIndex + 1} / 0{slidersInfo.length}
				</p>
			</div>
		</div>
	)
}

export default Arrows
