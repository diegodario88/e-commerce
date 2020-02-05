import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import CollectionItem from '../collection-item/collection-item.component'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles'

const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>

    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

CollectionPreview.propTypes = {
  title: PropTypes.object,
  items: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  routeName: PropTypes.object,
}

export default withRouter(CollectionPreview)
