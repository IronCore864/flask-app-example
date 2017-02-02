import PartnerList from '../components/PartnerList'
import { connect } from 'react-redux'
import { sortPartners } from '../actions'

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
    filterText: state.filterText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSortPartners: (order) => {
      dispatch(sortPartners(order))
    },
    dispatch
  }
}

const FilterablePartnerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerList)

export default FilterablePartnerList
