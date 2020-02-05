import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props

    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsync()),
})

ShopPage.propTypes = {
  fetchCollectionsStartAsync: PropTypes.func,
  isCollectionFetching: PropTypes.func,
  isCollectionsLoaded: PropTypes.bool,
  match: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(ShopPage)
