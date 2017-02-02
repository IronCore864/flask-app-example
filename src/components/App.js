import React from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'
import FilterablePartnerList from '../containers/FilterablePartnerList'

class App extends React.Component {
	render() {
		return (
			<div>
				<SearchBarContainer />
				<FilterablePartnerList />
			</div>
		)
	}
}

export default App
