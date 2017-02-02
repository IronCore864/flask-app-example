export const UPDATE_MT_TIME = 'UPDATE_MT_TIME'
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const RECEIVE_PARTNERS = 'RECEIVE_PARTNERS'
export const SORT_PARTNERS = 'SORT_PARTNERS'

// asyc actions
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const UPDATE_PARTNERS = 'UPDATE_PARTNERS'


export function updateMtTime(time, selected) {
	return (dispatch, getState) => {
		dispatch({ type: UPDATE_MT_TIME, time, selected })
		return fetch('http://eew00063.ger.win.int.kn:5000/partners', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				time: time,
				selected: selected
			})
		})
		.then(response => response.json())
		.then(json => console.log(json))
	}
}

export function sortPartners(order) {
	return { type: SORT_PARTNERS, order }
}

export function setFilterText(text) {
	return { type: SET_FILTER_TEXT, text }
}

export function requestPartners() {
	return {
		type: REQUEST_PARTNERS
	}
}

export function receivePartners(json) {
	return {
		type: RECEIVE_PARTNERS,
		json
	}
}

export function fetchPartners() {
	return function (dispatch) {
		return fetch('http://eew00063.ger.win.int.kn:5000/partners', {
			method: 'GET',
			})
			.then(response => response.json())
			.then(json => {
				dispatch(receivePartners(json.partners))	
			})
	}
}
