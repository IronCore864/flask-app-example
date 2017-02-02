import React from 'react'
import PartnerRow from './PartnerRow'
import MtWindowEditor from '../containers/MtWindowEditor'
import { fetchPartners } from '../actions'

class PartnerList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {order: true, selected: []}
		this.handleToggleAllVisible = this.handleToggleAllVisible.bind(this)
		this.handleSort = this.handleSort.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
		this.handleToggleCancelAll = this.handleToggleCancelAll.bind(this)
		this.handleSelectAll = this.handleSelectAll.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchPartners())
		this.startPoll()
	}

	startPoll() {
		const { dispatch } = this.props
		this.timeout = setTimeout(() => dispatch(fetchPartners()), 300000);
	}

	handleToggle(partner_name) {
		var new_selected = [...this.state.selected]
		var idx = new_selected.indexOf(partner_name);
		if (idx > -1) {
			new_selected.splice(idx, 1)
		} else {
			new_selected.push(partner_name)
		}
		this.setState(
			{order: this.state.order, selected: new_selected}
		)
	}

	handleToggleCancelAll() {
		this.setState(
			{order: this.state.order, selected: []}
		)	
	}

	handleSelectAll() {
		var all_visible_partners = []
		this.props.partners.forEach((partner) => {
			if (partner.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			all_visible_partners.push(partner.name)
		})
		this.setState(
			{order: this.state.order, selected: all_visible_partners}
		)
	}

	handleSort() {
		this.props.onSortPartners(this.state.order)
		this.setState(
			{order: !this.state.order, selected: this.state.selected}
		)
	}

	handleToggleAllVisible() {
		var none_selected = this.state.selected.length === 0 ? true : false
		if (none_selected) {
			this.handleSelectAll()
		} else {
			this.handleToggleCancelAll()
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
					selected={this.state.selected.indexOf(partner.name) > -1 ? true : false}
					onToggle={this.handleToggle}
				/>);
		});
		return (
		<div>
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
			<MtWindowEditor selected={this.state.selected} cancelSelection={this.handleToggleCancelAll} />
		</div>
		)
	}
}

export default PartnerList
