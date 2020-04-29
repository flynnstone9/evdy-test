import React from 'react'
import List from './List'
import Button from './Button'
import Dropdown from './Dropdown'
import '../styles/Modal.css'

const Modal = ({
	modalVisible,
	setModalVisible,
	sortBy,
	setSortBy,
	dropdownActive,
	setDropDownActive,
}) => {
	const closeModal = () => {
		setModalVisible(false)
		setDropDownActive(false)
	}

	if (modalVisible) {
		return (
			<div className='modal'>
				<div className='modal__header'>
					<h1>Memorials</h1>
					<Button text='X' action={closeModal} styleName='modal__button' />
					<div className='modal__headerSpace'></div>
				</div>
				<Dropdown
					sortBy={sortBy}
					setSortBy={setSortBy}
					dropdownActive={dropdownActive}
					setDropDownActive={setDropDownActive}
				/>
				<List sortBy={sortBy} />
			</div>
		)
	}
	return null
}

export default Modal
