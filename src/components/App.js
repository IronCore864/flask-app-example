import React from 'react'
import MtWindowEditor from './MtWindowEditor'
import SearchBarContainer from '../containers/SearchBarContainer'
import FilterablePartnerList from '../containers/FilterablePartnerList'

const App = () => (
	<div>
		<SearchBarContainer />
		<FilterablePartnerList />
		<MtWindowEditor />
	</div>
)

export default App
