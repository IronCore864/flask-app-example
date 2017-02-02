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

	componentDidUpdate(prevProps, prevState) {
		// prevState.selected === this.state.selected means no one is clicking the labels
		// however prevProps.selected !== this.props.selected means filterText is updated so PartnerList updated props
		// in this case, reset page to 1
		if (prevProps.selected !== this.props.selected && prevState.selected === this.state.selected) {
			this.setState({ start: 1, end: 5, selected: 1 })
		}
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
		if (start > parseInt(this.props.totalPages, 10)) {
			this.handleJumpToEnding()
			return
		}
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
		pages.push(<div className={'page ' + (this.state.selected === 1 ? 'disable' : '')} key='start' onClick={this.state.selected !== 1 ? this.handleJumpToBeginning : ''}><i className="fa fa-fast-backward" aria-hidden="true"></i></div>)
		pages.push(<div className={'page ' + (this.state.selected === 1 ? 'disable' : '')} key='prev' onClick={this.state.selected !== 1 ? this.handleJumpBackwardSection : ''}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>)
		for (var i=this.state.start;i<=Math.min(this.state.end, this.props.totalPages);i++) {
			if (i === this.state.selected) {
				pages.push(<div className='page page-selected' key={i} onClick={this.handleSelectPage.bind(this, i)}>{i}</div>)
			} else {
				pages.push(<div className='page' key={i} onClick={this.handleSelectPage.bind(this, i)}>{i}</div>)
			}
		}
		pages.push(<div className={'page ' + (this.state.selected === parseInt(this.props.totalPages, 10) ? 'disable' : '')} key='next' onClick={this.state.selected !== parseInt(this.props.totalPages, 10) ? this.handleJumpForwardSection : ''}><i className="fa fa-arrow-right" aria-hidden="true"></i></div>)
		pages.push(<div className={'page ' + (this.state.selected === parseInt(this.props.totalPages, 10) ? 'disable' : '')} key='end' onClick={this.state.selected !== parseInt(this.props.totalPages, 10) ? this.handleJumpToEnding : ''}><i className="fa fa-fast-forward" aria-hidden="true"></i></div>)
		return (
			<div className='navigator'>
				{pages}
			</div>
		)
	}
}

export default PageNavigator
