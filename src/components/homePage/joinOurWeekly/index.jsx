import React from "react";
import styles from './style.module.css'
import image from './image/join.png'

function JoinOurWeekly() {
   return (
      <>
         
         <div className={styles.container}>
            <div className={styles.join}>
               <img className={styles.img} src={image} alt="image" />
               <div className={styles.right}>
                  <h2 className={styles.h2}>
                     Join our weekly digest
                  </h2>
                  <p className={styles.p}>
                     Get exclusive promotions & updates straight to your inbox.
                  </p>
                  <form>
                     <input type="text" placeholder="Enter your email here" required />
                     <button type="submit">Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default JoinOurWeekly