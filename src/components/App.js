import React from 'react'
import MtWindowEditor from './MtWindowEditor'
import SearchBarContainer from '../containers/SearchBarContainer'
import FilterablePartnerList from '../containers/FilterablePartnerList'
import { fetchPartners } from '../actions'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchPartners())
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
