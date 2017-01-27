import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { setFilterText } from '../actions'

const mapStateToProps = (state) => {
  return {
    filterText: state.filterText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {onUserInput: (text) => {
    dispatch(setFilterText(text))
  }}
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
