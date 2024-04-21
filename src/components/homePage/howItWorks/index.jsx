import React from "react";
import styles from './style.module.css'
import image from './image/work1.png'

function HowItWorks() {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.top}>
               <h1 className={styles.h1}>How it works</h1>
               <p className={styles.p}>
                  Find out how to get started
               </p>
            </div>
            <div className={styles.card}>
               <div className={styles.box}>
                  <img src={image} alt="image" />
                  <div className={styles.desc}>
                     <h3 className={styles.h3}>
                        Setup Your wallet
                     </h3>
                     <h4 className={styles.h4}>
                        Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                     </h4>
                  </div>
               </div>
               <div className={styles.box}>
                  <img src={image} alt="image" />
                  <div className={styles.desc}>
                     <h3 className={styles.h3}>
                     Create Collection
                     </h3>
                     <h4 className={styles.h4}>
                        Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                     </h4>
                  </div>
               </div>
               <div className={styles.box}>
                  <img src={image} alt="image" />
                  <div className={styles.desc}>
                     <h3 className={styles.h3}>
                     Start Earning
                     </h3>
                     <h4 className={styles.h4}>
                        Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                     </h4>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default HowItWorks