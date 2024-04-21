import React from "react";
import styles from './style.module.css'
import magic from './image/magic.png'

function MagicMashrooms() {
   return(
      <>
     <div className={styles.container}>
     <img  src={magic} alt="magic" />
     </div>
      </>
   )
}

export default MagicMashrooms