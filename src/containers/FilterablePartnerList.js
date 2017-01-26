import React from 'react'
import PartnerList from '../components/PartnerList'

class FilterablePartnerList extends React.Component {
	render() {
		return (
			<PartnerList
				partners={this.props.partners}
				filterText={this.state.filterText}
			/>
		)
	}
}

export default FilterablePartnerList
