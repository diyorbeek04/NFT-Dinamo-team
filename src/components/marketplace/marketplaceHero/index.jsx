import React from "react";
import styles from './style.module.css'

function MarketplaceHero() {
   return(
      <>
      <div className={styles.brow}>
            <div className={styles.container}>
            <div className={styles.browse}>
                  <div className={styles.browse__manu}>
                     <h1 className={styles.browse__h1}>Browse Marketplace</h1>
                     <p className={styles.browse__p}>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                  </div>
                  <form className={styles.browse__form}>
                     <input className={styles.browse__input} placeholder="Search your favourite NFTs" required />
                  </form>
               </div>
            </div>
         </div>
         <div className={styles.dashboard}>
            <div className={styles.container}>
               <div className={styles.dashboard__center}>
                  <div className={styles.dashboard__fara}>
                     <h6 className={styles.dashboard__h6}>NFTs</h6>
                     <button  className={styles.dashboard__button}>302</button>
                  </div>
                  <div className={styles.dashboard__fara}>
                     <h6 className={styles.dashboard__hp}>Collections</h6>
                     <button  className={styles.dashboard__button}>67</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MarketplaceHero