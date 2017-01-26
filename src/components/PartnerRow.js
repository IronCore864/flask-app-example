import React from 'react'

class PartnerRow extends React.Component {
	render() {
		return (
			<tr>
				<td>
					<input
						name="edit"
						type="checkbox"
					/>
				</td>
				<td>{this.props.partner.name}</td>
				<td>{this.props.partner.mt_window.m}</td>
				<td>{this.props.partner.mt_window.t}</td>
				<td>{this.props.partner.mt_window.w}</td>
				<td>{this.props.partner.mt_window.th}</td>
				<td>{this.props.partner.mt_window.f}</td>
				<td>{this.props.partner.mt_window.sa}</td>
				<td>{this.props.partner.mt_window.s}</td>
			</tr>
		)
	}
}

export default PartnerRow
