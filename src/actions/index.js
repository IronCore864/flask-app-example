export const UPDATE_MT_TIME = 'UPDATE_MT_TIME'
export const TOGGLE_PARTNER = 'TOGGLE_PARTNER'
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const CANCLE_ALL_SELECTED = 'CANCLE_ALL_SELECTED'
export const SORT_PARTNERS = 'SORT_PARTNERS'
export const RECEIVE_PARTNERS = 'RECEIVE_PARTNERS'

// asyc actions
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const UPDATE_PARTNERS = 'UPDATE_PARTNERS'


export function updateMtTime(time) {
	return (dispatch, getState) => {
		var selected_parters = []
		var partners = getState().partners
		for (var i=0; i < partners.length; i++) {
			if (partners[i].selected) {
				selected_parters.push(Object.assign({}, partners[i], {
					mtWindow: time,
					selected: false,
				}))
			}
		}
		dispatch({ type: UPDATE_MT_TIME, time })
		return fetch('http://127.0.0.1:5000/partners', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(selected_parters)
			})
			.then(response => response.json())
			.then(json => console.log(json))
	}
}

export function togglePartner(partner) {
	return { type: TOGGLE_PARTNER, partner }
}

export function setFilterText(text) {
	return { type: SET_FILTER_TEXT, text }
}

export function cancelAllSelected() {
	return { type: CANCLE_ALL_SELECTED}
}

export function sortPartners(order) {
	return { type: SORT_PARTNERS, order }
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
		return fetch('http://127.0.0.1:5000/partners', {
			method: 'GET',
			})
			.then(response => response.json())
			.then(json => {
				dispatch(receivePartners(json.partners))	
			})
	}
}
