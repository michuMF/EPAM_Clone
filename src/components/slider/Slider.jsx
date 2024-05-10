import { useEffect, useState } from "react"
import { useMotionValue } from "framer-motion"
import { motion } from "framer-motion"

import Arrows from "../../components/slider/Arrows"
import SliderImg from "./SliderImg"

const DRAG_BUFFER = 50
const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
}
const Slider = ({ imgArray }) => {
	const [imgIndex, setImgIndex] = useState(0)

	const dragX = useMotionValue(0)

	const imgIndexDecrementHandler = () => {
		setImgIndex(prev => prev - 1)

		if (imgIndex === 0) {
			setImgIndex(imgArray.length - 1)
		}
	}
	const imgIndexIncrementHandler = () => {
		setImgIndex(prev => prev + 1)

		if (imgIndex === imgArray.length - 1) {
			setImgIndex(0)
		}
	}

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get()
			if (x === 0) {
				setImgIndex(pv => {
					if (pv === imgArray.length - 1) {
						return 0
					}
					return pv + 1
				})
			}
		}, AUTO_DELAY)

		return () => clearInterval(intervalRef)
	}, [dragX, imgArray.length])

	const onDragEnd = () => {
		const x = dragX.get()

		if (x <= -DRAG_BUFFER && imgIndex < imgArray.length - 1) {
			setImgIndex(prev => prev + 1)
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex(prev => prev - 1)
		}
	}
	return (
		<>
			<div className=' overflow-hidden'>
				<div className='relative '>
					<motion.div
						drag='x'
						style={{
							x: dragX,
						}}
						dragConstraints={{
							left: 0,
							right: 0,
						}}
						animate={{
							translateX: `-${imgIndex * 100}%`,
						}}
						transition={SPRING_OPTIONS}
						onDragEnd={onDragEnd}
						className='flex items-center cursor-grab active:cursor-grabbing'>
						{imgArray.map(slider => (
							<SliderImg
								key={slider.title}
								headline={slider.headline}
								headlineSpan={slider.headlineSpan}
								readMore={slider.readMore}
								slider={slider.slider}
								title={slider.title}
								titleSpan={slider.titleSpan}
								title2={slider.title2}
								width={slider.width}
								imgIndex={imgIndex}
								setImgIndex={setImgIndex}
							/>
						))}
					</motion.div>
					<Arrows
						imgIndex={imgIndex}
						imgIndexDecrementHandler={imgIndexDecrementHandler}
						imgIndexIncrementHandler={imgIndexIncrementHandler}
						slidersInfo={imgArray}
					/>
				</div>
			</div>
		</>
	)
}

export default Slider
