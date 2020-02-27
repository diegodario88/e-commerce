import React from 'react'

import { HomePageContainer } from './homepage.styles'
import DirectoryComponent from '../../components/directory/directory.component'

export default function HomepageComponent() {
  return (
    <HomePageContainer>
      <DirectoryComponent />
    </HomePageContainer>
  )
}
