import React from 'react'

class MtWindowInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			time: ['', '', '', '', '', '', '']
		}
		this.handleChange = this.handleChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		var newState = Object.assign({}, this.state)
		newState.time[event.target.name] = event.target.value
		this.setState(newState)
	}

	handleSubmit(event) {
		event.preventDefault()
		var time = {
			mon: this.state.time[0].trim(),
			tue: this.state.time[1].trim(),
			wed: this.state.time[2].trim(),
			thu: this.state.time[3].trim(),
			fri: this.state.time[4].trim(),
			sat: this.state.time[5].trim(),
			sun: this.state.time[6].trim()
		}
		this.props.onSubmit(time, this.props.selected)
		this.props.cancelSelection()
		this.setState({
			time: ['', '', '', '', '', '', '']
		})
	}

	render() {
		var inputs = []
		for (var i=0;i<7;i++){
			inputs.push(
				<td key={i}>
					<input className='time' name={i} key={i} type="text" value={this.state.time[i]} onChange={this.handleChange} />
				</td>
			)
		}
		return (
			<form onSubmit={this.handleSubmit}>
				<table className='newTime'>
				<tbody>
					<tr>
						<td className='label'>New Time: </td>
						{inputs}
					</tr>
				</tbody>
				</table>
				<div className='submit-btn'><button type='submit'>Apply</button></div>
			</form>
		)
	}
}

export default MtWindowInput
