import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Button from './components/Button'
import Modal from './components/Modal'
import { useDispatch } from 'react-redux'
import { initializeMemorials } from './reducers/memorialReducer'
import memorialService from './services/memorials'

function App() {
	let [modalVisible, setModalVisible] = useState(false)
	let [sortBy, setSortBy] = useState('date')
	let [dropdownActive, setDropDownActive] = useState(false)

	const dispatch = useDispatch()

	const memorialReq = () => {
		memorialService.getMemorials().then((res) => {
			dispatch(initializeMemorials(res))
		})
	}

	useEffect(memorialReq, [])

	const openModal = () => {
		setModalVisible(true)
	}

	return (
		<div className='App'>
			<div className='main-container'>
				Simple Redux Modal
				<Button text='Open Modal' action={openModal} />
			</div>
			<Modal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				sortBy={sortBy}
				setSortBy={setSortBy}
				dropdownActive={dropdownActive}
				setDropDownActive={setDropDownActive}
			/>
		</div>
	)
}

export default App
