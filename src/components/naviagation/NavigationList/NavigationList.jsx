import { Link } from "react-router-dom"
import { navigationList } from "../../../constant/navigationList"
import NavigationInfo from "./NavigationInfo"
import { useState } from "react"
const NavigationList = () => {
	const [showBackdrop, setShowBackdrop] = useState(false)
	const [menuInfo, setMenuInfo] = useState(null)
	const hoverHandler = item => {
		setMenuInfo(item)
	}
	return (
		<>
			{navigationList.map(item => (
				<div key={item.title}>
					<Link
						onMouseEnter={() => {
							setShowBackdrop(true)
							hoverHandler(item.content)
						}}
						// to={item.link}
						className='   w-full h-full  cursor-pointer   transition-colors'>
						{item.title}
					</Link>
					{showBackdrop && (
						<>
							<div className='absolute  left-0 right-0 ' />
							<NavigationInfo
								key={item.title}
								setShowBackdrop={setShowBackdrop}
								showBackdrop={showBackdrop}
								content={menuInfo}
							/>
						</>
					)}
				</div>
			))}
		</>
	)
}

export default NavigationList
