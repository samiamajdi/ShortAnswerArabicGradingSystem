import React from 'react'

import Page from './Page'
import NavBar from './NavBar'
import myImage from '../img/image.png';
import styles from './Principale.module.css'

function Principale() {
  return (
    <div>
<NavBar></NavBar>
<img src={myImage} alt="Ma superbe image" width={700} height={600}/>
<Page></Page>

    </div>
  )
}

export default Principale
