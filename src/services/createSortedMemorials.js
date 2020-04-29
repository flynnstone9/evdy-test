let createSortedMemorials = (memorials, sortBy) => {
	switch (sortBy) {
		case 'date':
			return memorials.sort(function (a, b) {
				a = new Date(a.creationDate)
				b = new Date(b.creationDate)
				return a > b ? -1 : a < b ? 1 : 0
			})
		case 'first':
			return memorials.sort((a, b) => {
				let firstNameA = a.first ? a.first : 'z'
				let firstNameB = b.first ? b.first : 'z'
				return firstNameA.localeCompare(firstNameB)
			})
		case 'last':
			return memorials.sort((a, b) => {
				let lastNameA = a.last ? a.last : 'z'
				let lastNameB = b.last ? b.last : 'z'
				return lastNameA.localeCompare(lastNameB)
			})
		default:
			return memorials
	}
}

export default createSortedMemorials
