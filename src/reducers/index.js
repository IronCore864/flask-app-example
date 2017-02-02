import { combineReducers } from 'redux'
import { UPDATE_MT_TIME, SET_FILTER_TEXT, RECEIVE_PARTNERS, SORT_PARTNERS } from '../actions'

const partners = (state = [], action) => {
	switch (action.type) {
		case UPDATE_MT_TIME:
			return state.map((partner, index) => {
				if (action.selected.indexOf(partner.name) > -1) {
					return Object.assign({}, partner, {mtWindow: action.time})
				}
				return partner
			})
		case RECEIVE_PARTNERS:
			return action.json;
		case SORT_PARTNERS:
			if (action.order) {
				return [...state].sort((a, b) => a['name'] < b['name'])
			}
			return [...state].sort((a, b) => a['name'] > b['name'])
		default:
			return state
	}
}

const filterText = (state = '', action) => {
	switch (action.type) {
		case SET_FILTER_TEXT:
			return action.text
		default:
			return state
	}
}

const parterMtWinApp = combineReducers({
	partners,
	filterText
})

export default parterMtWinApp
