import { Link } from "react-router-dom"
import { navigationList } from "../../../constant/navigationList"
import NavigationInfo from "./NavigationInfo"
import { useState } from "react"
const NavigationList = () => {
	const [showbackdrop, setShowBackdrop] = useState(false)
	const [menuInfo, setMenuInfo] = useState({})
	const hoverHandler = item => {
		console.log(item)
		setMenuInfo(item)
	}
	return (
		<>
			{navigationList.map(item => {
				return (
					<Link
						key={item.title}
						onMouseEnter={() => {
							hoverHandler(item.content)
							setShowBackdrop(true)
						}}
						onMouseLeave={() => {
							// setShowBackdrop(false)
							hoverHandler(item.content)
						}}
						// to={item.link}
						className=' bg-blue-600   w-full h-full  cursor-pointer   transition-colors'>
						{item.title}

						{showbackdrop && (
							<NavigationInfo
								key={item.title}
								setShowBackdrop={setShowBackdrop}
								showbackdrop={showbackdrop}
								content={menuInfo}
							/>
						)}
					</Link>
				)
			})}
		</>
	)
}

export default NavigationList
