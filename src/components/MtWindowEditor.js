import React from 'react'
import MtWindowTimeLabel from './MtWindowTimeLabel'
import MtWindowTimeInput from '../containers/MtWindowTimeInput'

class MtWindowEditor extends React.Component {
  render() {
    return (
      <div>
          <MtWindowTimeLabel />
          <MtWindowTimeInput />
      </div>
    )
  }
}

export default MtWindowEditor
