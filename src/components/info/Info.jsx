import ReadMore from "../UI/ReadMore"
import HorizontalScrollCarousel from "./HorizontalScrolling"

const Info = () => {
	return (
		<>
			<div className='screen-settings  min-h-screen font-thin  mt-20   '>
				<h3 className='text-3xl    xl:text-8xl w-[92%] !leading-tight '>
					We can help you{" "}
					<span className='text-gradient font-normal  '>reimagine </span>
					your business through a digital lens
				</h3>

				<h3 className='text-3xl    xl:text-8xl mt-40'>Customer Results</h3>
				<p className='text-xl  tracking-wide  font-normal mt-20 mb-10'>
					Our teams of technologists, strategists and designers deliver powerful
					digital experiences. We specialize in 11 industries across 55 countries &
					regions, delivering innovative solutions to our customers’ most challenging
					problems. The numbers speak for themselves.{" "}
				</p>
				<ReadMore readMore={"Learn More"} />
			</div>
			<HorizontalScrollCarousel />
		</>
	)
}

export default Info
