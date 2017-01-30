import { combineReducers } from 'redux'
import { UPDATE_MT_TIME, TOGGLE_PARTNER, SET_FILTER_TEXT, CANCLE_ALL_SELECTED, SORT_PARTNERS, RECEIVE_PARTNERS } from '../actions'

const partners = (state = [], action) => {
	switch (action.type) {
		case UPDATE_MT_TIME:
			return state.map((partner, index) => {
				if (partner.selected) {
					return Object.assign({}, partner, {
						mtWindow: action.time,
						selected: false,
					})
				}
				return partner
			})
		case TOGGLE_PARTNER:
			return state.map((partner, index) => {
				if (partner.name === action.partner) {
					return Object.assign({}, partner, {
						selected: !partner.selected
					})
				}
				return partner
			})
		case CANCLE_ALL_SELECTED:
			var toggle_status = state[0].selected === true ? false : true
			return state.map((partner, index) => {
				return Object.assign({}, partner, {
					selected: !toggle_status
				})
			})
		case SORT_PARTNERS:
			if (action.order) {
				return [...state].sort((a, b) => a['name'] < b['name'])
			}
			return [...state].sort((a, b) => a['name'] > b['name'])
		case RECEIVE_PARTNERS:
			return action.json;
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
