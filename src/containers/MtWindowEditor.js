import { connect } from 'react-redux'
import MtWindowInput from '../components/MtWindowInput'
import { updateMtTime } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {onSubmit: (time, selected) => {
    dispatch(updateMtTime(time, selected))
  }}
}

const MtWindowEditor = connect(
  null,
  mapDispatchToProps
)(MtWindowInput)

export default MtWindowEditor
