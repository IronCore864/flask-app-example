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
				<input name={i} key={i} type="text" value={this.state.time[i]} onChange={this.handleChange} />
			)
		}
		return (
			<div className='newTime'>
				<span className='label'>New Time: </span>
				<form onSubmit={this.handleSubmit}>
					{inputs}
					<button type='submit'>Apply</button>
				</form>
			</div>
		)
	}
}

export default MtWindowInput
