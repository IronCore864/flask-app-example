import React from 'react'
import { connect } from 'react-redux'
import { updateMtTime } from '../actions'

let MtWindowTimeInput = ({ dispatch }) => {
  let input1, input2, input3, input4, input5, input6, input7

  return (
    <div className='newTime'>
      <span className='label'>New Time: </span>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(updateMtTime({
          mon: input1.value.trim(),
          tue: input2.value.trim(),
          wed: input3.value.trim(),
          thu: input4.value.trim(),
          fri: input5.value.trim(),
          sat: input6.value.trim(),
          sun: input7.value.trim() 
        }))
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
        input5.value = ''
        input6.value = ''
        input7.value = ''
      }}>

        <input ref={node => {
          input1 = node
        }} />

        <input ref={node => {
          input2 = node
        }} />

        <input ref={node => {
          input3 = node
        }} />

        <input ref={node => {
          input4 = node
        }} />

        <input ref={node => {
          input5 = node
        }} />

        <input ref={node => {
          input6 = node
        }} />
        <input ref={node => {
          input7 = node
        }} />

        <button type="submit">
          Apply
        </button>
      </form>
    </div>
  )
}

MtWindowTimeInput = connect()(MtWindowTimeInput)

export default MtWindowTimeInput
