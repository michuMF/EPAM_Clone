import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { horizontalScrolling } from "../../constant/horizontalScrollingInfo"

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

	return (
		<section ref={targetRef} className='relative h-[200vh]   '>
			<div
				style={{
					padding: "0px calc(-37.2rem + 50vw)",
				}}
				className='sticky top-0  flex h-screen items-center -mt-[400px] overflow-hidden  '>
				<motion.div style={{ x }} className='flex gap-4  '>
					{horizontalScrolling.map(card => {
						return <Card item={card} key={card.title} />
					})}
				</motion.div>
			</div>
		</section>
	)
}

const Card = ({ item }) => {
	return (
		<div
			key={item.title}
			className='flex  w-[23vw]  mr-16 relative  overflow-hidden border-t '>
			<div className='  '>
				<h3 className='  text-[150px] text-gradient  bg-red-600  text-white  my-5'>
					{item.title}
				</h3>
				<p className='text-xl font-semibold w-[70%] tracking-wider'>{item.info}</p>
			</div>
		</div>
	)
}

export default HorizontalScrollCarousel
