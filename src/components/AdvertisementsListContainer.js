import React, { Component } from 'react'
import {loadAdvertisements} from '../actions/advertisements'
import {connect} from 'react-redux'
import AdvertisementsList from './AdvertisementsList'

export class AdvertisementsListContainer extends Component {
  componentDidMount() {
    this.props.loadAdvertisements()
  }
  
  render() {
    return (
      <div>
        <AdvertisementsList advertisements={this.props.advertisements} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  advertisements: state.advertisements
})

export default connect(mapStateToProps, {loadAdvertisements})(AdvertisementsListContainer)