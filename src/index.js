import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import parterMtWinApp from './reducers'
import App from './components/App'

const preloadedState = {
	partners: [{
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
	},{
		name: 'tllsp2',
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
	},{
		name: 'tllsp3',
		mtWindow: {
			mon: '12:00-12:30',
			tue: '12:00-12:30',
			wed: '12:00-12:30',
			thu: '12:00-12:30',
			fri: '12:00-12:30',
			sat: '12:00-12:30',
			sun: '12:00-12:30'
		},
		selected: false
	},{
		name: 'tlltg1',
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
	},{
		name: 'tlltg2',
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
	},{
		name: 'hamsp1',
		mtWindow: {
			mon: '13:00-13:30',
			tue: '13:00-13:30',
			wed: '13:00-13:30',
			thu: '13:00-13:30',
			fri: '13:00-13:30',
			sat: '13:00-13:30',
			sun: '13:00-13:30'
		},
		selected: false
	},{
		name: 'hamsp2',
		mtWindow: {
			mon: '14:00-14:30',
			tue: '14:00-14:30',
			wed: '14:00-14:30',
			thu: '14:00-14:30',
			fri: '14:00-14:30',
			sat: '14:00-14:30',
			sun: '14:00-14:30'
		},
		selected: false
	}, {
		name: 'hamtg1',
		mtWindow: {
			mon: '15:00-15:30',
			tue: '15:00-15:30',
			wed: '15:00-15:30',
			thu: '15:00-15:30',
			fri: '15:00-15:30',
			sat: '15:00-15:30',
			sun: '15:00-15:30'
		},
		selected: false
	}],
	filterText: ''
}

let store = createStore(parterMtWinApp, preloadedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
