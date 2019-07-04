import request from 'superagent'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const advertisementsFetched = advertisements => ({
  type: ADVERTISEMENTS_FETCHED,
  advertisements
})

export const loadAdvertisements = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().advertisements) return

  // a GET /events request
  request(`${baseUrl}/advertisements`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(advertisementsFetched(response.body))
    })
    .catch(console.error)
}