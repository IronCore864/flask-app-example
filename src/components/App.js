import React from 'react'
import MtWindowEditor from './MtWindowEditor'
import SearchBar from '../containers/SearchBar'
import FilterablePartnerList from '../containers/FilterablePartnerList'

const App = () => (
	<div>
		<SearchBar />
		<FilterablePartnerList />
		<MtWindowEditor />
	</div>
)

export default App
