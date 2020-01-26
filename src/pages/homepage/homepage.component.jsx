import React from 'react'

import './homepage.styles.scss';
import DirectoryComponent from '../../components/directory/directory.component';

export default function HomepageComponent() {

    return (
        <div className='homepage'>
            <DirectoryComponent />
        </div >
    )
}
