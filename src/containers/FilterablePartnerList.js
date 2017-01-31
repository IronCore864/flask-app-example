import PartnerList from '../components/PartnerList'
import { connect } from 'react-redux'
import { togglePartner, cancelAllSelected, sortPartners } from '../actions'

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
    filterText: state.filterText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (partner) => {
      dispatch(togglePartner(partner))
    },
    onToggleCancelAll: () => {
      dispatch(cancelAllSelected())
    },
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
