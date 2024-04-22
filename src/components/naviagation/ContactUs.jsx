const ContactUs = ({ darkMode }) => {
	return (
		<button
			className={` ${
				darkMode ? "bg-black text-white" : "bg-white text-black"
			} px-5 py-[6px] rounded-full font-semibold tracking-wider text-sm hover:bg-white hover:text-black `}>
			CONTACT US
		</button>
	)
}

export default ContactUs
