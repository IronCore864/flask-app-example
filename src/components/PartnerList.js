import React from 'react'
import PartnerRow from './PartnerRow'

class PartnerList extends React.Component {
	render() {
		var rows = [];
		this.props.partners.forEach((partner) => {
			if (partner.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			rows.push(<PartnerRow partner={partner} key={partner.name} />);
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Select</th>
						<th>Partner Name</th>
						<th>MT Window - Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
						<th>Sun</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

export default PartnerList
