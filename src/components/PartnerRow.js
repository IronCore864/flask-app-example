import React from 'react'

class PartnerRow extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleCheck = this.handleToggleCheck.bind(this)
  }

  handleToggleCheck() {
    this.props.onToggle(
      this.props.partner.name
    )
  }

	render() {
		return (
			<tr>
				<td className='select' onClick={this.handleToggleCheck}>
					{this.props.selected === true ? <i className="fa fa-check" aria-hidden="true"></i> : ''}
				</td>
				<td className='partner' onClick={this.handleToggleCheck}>{this.props.partner.name}</td>
				<td className='time'>{this.props.partner.mtWindow.mon}</td>
				<td className='time'>{this.props.partner.mtWindow.tue}</td>
				<td className='time'>{this.props.partner.mtWindow.wed}</td>
				<td className='time'>{this.props.partner.mtWindow.thu}</td>
				<td className='time'>{this.props.partner.mtWindow.fri}</td>
				<td className='time'>{this.props.partner.mtWindow.sat}</td>
				<td className='time'>{this.props.partner.mtWindow.sun}</td>
			</tr>
		)
	}
}

export default PartnerRow
