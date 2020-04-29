const memorialReducer = (state = [], action) => {
	if (action.type === 'INIT_MEMORIALS') {
		return action.data
	}

	return state
}

export const initializeMemorials = (memorials) => {
	return {
		type: 'INIT_MEMORIALS',
		data: memorials,
	}
}

export default memorialReducer
