import React from 'react'
import '../styles/Dropdown.css'

const Dropdown = ({ sortBy, setSortBy, dropdownActive, setDropDownActive }) => {
	let sortByText = ''

	if (sortBy === 'date') {
		sortByText = 'Date Created'
	}

	if (sortBy === 'first') {
		sortByText = 'First Name'
	}

	if (sortBy === 'last') {
		sortByText = 'Last Name'
	}

	const openDropdown = () => {
		setDropDownActive(!dropdownActive)
	}

	if (dropdownActive) {
		return (
			<div className='dropdown' onClick={openDropdown}>
				<div className='dropdown__text'>
					<p>
						Sort By: <span className='dropdown__optCurrent'>{sortByText}</span>
					</p>
					<div className='dropdown__optContainer'>
						<div className='dropdown__opt' onClick={() => setSortBy('date')}>
							Date Created
						</div>
						<div className='dropdown__opt' onClick={() => setSortBy('first')}>
							First Name
						</div>
						<div className='dropdown__opt' onClick={() => setSortBy('last')}>
							Last Name
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='dropdown' onClick={openDropdown}>
			<p className='dropdown__text'>
				Sort By: <span className='dropdown__optCurrent'>{sortByText}</span>
			</p>
		</div>
	)
}

export default Dropdown
