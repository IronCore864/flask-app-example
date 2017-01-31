import React from 'react'
import PartnerRow from './PartnerRow'
import { fetchPartners } from '../actions'

class PartnerList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {order: true}
		this.handleToggleAllVisible = this.handleToggleAllVisible.bind(this)
		this.handleSort = this.handleSort.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchPartners())
	}

	handleSort() {
		this.props.onSortPartners(this.state.order)
		this.setState(
			{order: !this.state.order}
		)
	}

	handleToggleAllVisible() {
		var none_selected = true
		var all_selected = true
		this.props.partners.forEach((partner) => {
			if (partner.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			if (partner.selected) {
				none_selected = false
			} else {
				all_selected = false
			}
		})
		if (none_selected || all_selected) {
			this.props.partners.forEach((partner) => {
				if (partner.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				this.props.onToggle(
				partner.name
			)
			})
		} else {
			this.props.onToggleCancelAll()
		}
	}

	render() {
		var rows = [];
		this.props.partners.forEach((partner) => {
			if (partner.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			rows.push(
				<PartnerRow
					partner={partner}
					key={partner.name}
					onToggle={this.props.onToggle}
				/>);
		});
		return (
			<table className='partners'>
				<thead>
					<tr>
						<th className='select' onClick={this.handleToggleAllVisible}>Select</th>
						<th className='partner' onClick={this.handleSort}>Name</th>
						<th className='time'>Mon</th>
						<th className='time'>Tue</th>
						<th className='time'>Wed</th>
						<th className='time'>Thu</th>
						<th className='time'>Fri</th>
						<th className='time'>Sat</th>
						<th className='time'>Sun</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

export default PartnerList
