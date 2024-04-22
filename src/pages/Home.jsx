import Info from "../components/info/Info"
import Slider from "../components/slider/Slider"
import { slidersInfo, slidersInfoTwo } from "../constant/slidersInfo"

const Home = () => {
	return (
		<>
			{/* <DarkMode dark /> */}
			<Slider imgArray={slidersInfo} />
			<Info />
			<Slider imgArray={slidersInfoTwo} />
		</>
	)
}

export default Home
