import React from 'react'
import { connect } from 'react-redux'
import { setFilterText } from '../actions'
import { SearchBar } from '../components'

let SearchBar = ({ dispatch }) => {
  let input

	return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={
        	dispatch(setFilterText(input.value))
        }
      />
    </form>
  )
}

SearchBar = connect()(SearchBar)

export default SearchBar
