import React from 'react'
import MtWindowEditor from './MtWindowEditor'
import SearchBarContainer from '../containers/SearchBarContainer'
import FilterablePartnerList from '../containers/FilterablePartnerList'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<SearchBarContainer />
				<FilterablePartnerList />
				<MtWindowEditor />
			</div>
		)
	}
}

export default App
