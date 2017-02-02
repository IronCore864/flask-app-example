import React from 'react'

class PageNavigator extends React.Component {
	constructor(props) {
		super(props)
		this.handleJumpBackwardSection = this.handleJumpBackwardSection.bind(this)
		this.handleJumpForwardSection = this.handleJumpForwardSection.bind(this)
		this.handleJumpToBeginning = this.handleJumpToBeginning.bind(this)
		this.handleJumpToEnding = this.handleJumpToEnding.bind(this)
		this.state = { start: 1, end: 5, selected: 1 }
	}

	handleSelectPage(pageNum) {
		this.setState({start: this.state.start, end: this.state.end, selected: pageNum})
		this.props.handleSelectPage(pageNum)
	}
	
	handleJumpToBeginning() {
		this.setState({start: 1, end: 5, selected: 1})
		this.props.handleSelectPage(1)
	}

	handleJumpBackwardSection() {
		var start = this.state.start-5
		if (start<1) {
			start=1
		}
		var end = Math.min(start+4, parseInt(this.props.totalPages, 10))
		this.setState({start: start, end: end, selected: start})
		this.props.handleSelectPage(start)
	}

	handleJumpForwardSection() {
		var start = this.state.end+1
		var end = Math.min(start+4, parseInt(this.props.totalPages, 10))
		this.setState({start: start, end: end, selected: start})
		this.props.handleSelectPage(start)
	}

	handleJumpToEnding() {
		this.setState({start: parseInt(this.props.totalPages, 10)-parseInt(this.props.totalPages, 10)%5, end: parseInt(this.props.totalPages, 10), selected: parseInt(this.props.totalPages, 10)})
		this.props.handleSelectPage(parseInt(this.props.totalPages, 10))
	}

	render() {
		var pages = []
		pages.push(<div className='page' key='start' onClick={this.handleJumpToBeginning}>{"<<"}</div>)
		pages.push(<div className={'page ' + (this.state.start === 1 ? 'disable' : '')} key='prev' onClick={this.state.start !== 1? this.handleJumpBackwardSection : ''}>{"<"}</div>)
		for (var i=this.state.start;i<=Math.min(this.state.end, this.props.totalPages);i++) {
			if (i === this.state.selected) {
				pages.push(<div className='page page-selected' key={i} onClick={this.handleSelectPage.bind(this, i)}>{i}</div>)
			} else {
				pages.push(<div className='page' key={i} onClick={this.handleSelectPage.bind(this, i)}>{i}</div>)
			}
		}
		pages.push(<div className={'page ' + (this.state.end === parseInt(this.props.totalPages, 10) ? 'disable' : '')} key='next' onClick={this.state.end !== parseInt(this.props.totalPages, 10)? this.handleJumpForwardSection : ''}>{">"}</div>)
		pages.push(<div className='page' key='end' onClick={this.handleJumpToEnding}>{">>"}</div>)
		return (
			<div className='navigator'>
				{pages}
			</div>
		)
	}
}

export default PageNavigator
