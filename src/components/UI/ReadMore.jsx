// import { HiArrowLongRight } from "react-icons/hi2"
const ReadMore = ({ readMore }) => {
	return (
		<p className='font-bold text-sm flex items-center  gap-2 hover:text-[#00fff0] cursor-pointer w-fit xl:text-xl'>
			{readMore ? readMore : ""}
			{/* <HiArrowLongRight className='text-4xl' /> */}
		</p>
	)
}

export default ReadMore
