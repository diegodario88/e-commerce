import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropType from 'prop-types'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { CollectionsOverviewContainer } from './collections-overview.styles'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview
        key={id}
        {...otherCollectionProps}
      ></CollectionPreview>
    ))}
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

CollectionsOverview.propTypes = {
  collections: PropType.arrayOf(PropType.object),
}

export default connect(mapStateToProps)(CollectionsOverview)
