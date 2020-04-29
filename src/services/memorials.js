let baseUrl = `https://dev.requiemapp.com/public/memorial/random`

const getMemorials = async () => {
	let req = await fetch(baseUrl)
	let memorialData = await req.json()
	return memorialData.data
}

export default {
	getMemorials: getMemorials,
}
