import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/List.css'
import moment from 'moment'
import createSortedMemorials from '../services/createSortedMemorials'

const List = ({ sortBy }) => {
	const memorials = useSelector((state) => state)

	let createFullName = (name) => {
		let nameArr = []
		for (const word in name) {
			if (name[word]) {
				nameArr.push(name[word])
			}
		}

		if (nameArr.length === 0) {
			nameArr.push('Private User')
		}

		return nameArr.join(' ')
	}

	let memorialsBasicData = memorials.map((m) => {
		let { _id, creationDate, name } = m
		let { first, middle, last } = name
		return {
			key: _id,
			creationDate: creationDate,
			dateFormatted: moment(creationDate).format('MMMM Do YYYY, h:mm:ss a'),
			name: name,
			fullName: createFullName(name),
			first: first,
			middle: middle,
			last: last,
		}
	})

	let sortedMemorials = createSortedMemorials(memorialsBasicData, sortBy)

	let createList = () => {
		return sortedMemorials.map((m) => {
			return (
				<div className='list__item' key={m.key}>
					<div className='list__name'>{m.fullName}</div>
					<div className='list__date'>
						<div className='list__datecreate'>Date Created</div>
						<div className='list__datetext'>{m.dateFormatted}</div>
					</div>
				</div>
			)
		})
	}

	return <div className='list'>{createList()}</div>
}

export default List
