import React from 'react'
import myImage from '../img/li.png';
import styles from './Principale.module.css'
function NavBar() {
 
  return (
    <div>

  <header>

    <img className={styles.imagess} src={myImage} alt="Ma superbe image"  width={230} height={70}/>
     <nav>

       
    </nav>
 
</header>

    </div>
  
  )
}

export default NavBar
