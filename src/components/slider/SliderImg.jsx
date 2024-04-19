import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import ReadMore from "../UI/ReadMore"

const SliderImg = ({
	title,
	titleSpan,
	title2,
	headline,
	headlineSpan,
	readMore,
	slider,
	width,
}) => {
	return (
		<div className='h-screen w-full  text-white'>
			<motion.div
				style={{
					backgroundImage: slider,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className='w-screen  shrink-0 h-[75%]  xl:h-full bg-neutral-800 object-cover  '>
				<div className='   w-full max-w-[1152px] mx-auto h-full  flex flex-col   justify-start pt-[120px] xl:justify-center xl:pt-0  px-10	  lg:px-0  '>
					<h2 className='text-sm tracking-widest font-bold xl:text-lg'>
						{headline}
						<span className='font-normal '> {headlineSpan}</span>
					</h2>
					<h1
						className={twMerge(
							`text-3xl font-thin mt-14 mb-64  ${width} xl:text-6xl xl:mb-44 !leading-tight  `
						)}>
						{title}
						<span className='text-3xl text-gradient test font-normal xl:text-6xl'>
							{titleSpan}{" "}
						</span>

						{title2}
					</h1>
					<ReadMore readMore={readMore} />
				</div>
			</motion.div>
		</div>
	)
}

export default SliderImg
