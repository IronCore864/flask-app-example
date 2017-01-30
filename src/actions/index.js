export const UPDATE_MT_TIME = 'UPDATE_MT_TIME'
export const TOGGLE_PARTNER = 'TOGGLE_PARTNER'
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const CANCLE_ALL_SELECTED = 'CANCLE_ALL_SELECTED'
export const SORT_PARTNERS = 'SORT_PARTNERS'
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const RECEIVE_PARTNERS = 'RECEIVE_PARTNERS'

export function updateMtTime(time) {
	return { type: UPDATE_MT_TIME, time }
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