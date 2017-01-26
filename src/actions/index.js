export const UPDATE_MT_TIME = 'UPDATE_MT_TIME'
export const TOGGLE_PARTNER = 'TOGGLE_PARTNER'
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'

export function updateMtTime(time) {
  return { type: UPDATE_MT_TIME, time }
}

export function togglePartner(partner) {
  return { type: TOGGLE_PARTNER, partner }
}

export function setFilterText(text) {
  return { type: SET_FILTER_TEXT, text }
}
