const DropDownItem = ({ row }) => {
	return (
		<div className=' flex flex-col gap-8'>
			{row?.map(item => (
				<div key={item?.main} className=' '>
					<h2 className='text-2xl text-gradient mb-2 font-bold'>{item?.main}</h2>

					<div className='flex flex-col gap-3 mt-6'>
						{item.rest?.map(item => (
							<p className='text-md' key={item}>
								{item}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default DropDownItem
