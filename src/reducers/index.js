import { combineReducers } from 'redux'
import { UPDATE_MT_TIME, TOGGLE_PARTNER, SET_FILTER_TEXT } from '../actions'

// only for testing without ui
const test_default = [{
	name: 'tllsp1',
	mtWindow: {
		mon: '10:00-10:30',
		tue: '10:00-10:30',
		wed: '10:00-10:30',
		thu: '10:00-10:30',
		fri: '10:00-10:30',
		sat: '10:00-10:30',
		sun: '10:00-10:30'
	},
	selected: false
}, {
	name: 'tlltg1',
	mtWindow: {
		mon: '11:00-11:30',
		tue: '11:00-11:30',
		wed: '11:00-11:30',
		thu: '11:00-11:30',
		fri: '11:00-11:30',
		sat: '11:00-11:30',
		sun: '11:00-11:30'
	},
	selected: false
}]

const partners = (state = test_default, action) => {
	switch (action.type) {
		case 'UPDATE_MT_TIME':
			return state.map((partner, index) => {
				if (partner.selected) {
					return Object.assign({}, partner, {
						mtWindow: action.time,
						selected: false,
					})
				}
				return partner
			})
		case 'TOGGLE_PARTNER':
			return state.map((partner, index) => {
				if (partner.name === action.partner) {
					return Object.assign({}, partner, {
						selected: !partner.selected
					})
				}
				return partner
			})
		default:
			return state
	}
}


const textFilter = (state = '', action) => {
	switch (action.type) {
		case SET_FILTER_TEXT:
			return action.text
		default:
			return state
	}
}

const parterMtWinApp = combineReducers({
	partners,
	textFilter
})

export default parterMtWinApp
