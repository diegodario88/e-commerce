import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateCollections } from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverview
)

const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionID`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={loading}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

ShopPage.propTypes = {
  updateCollections: PropTypes.func,
  match: PropTypes.object
}

export default connect(null, mapDispatchToProps)(ShopPage)
