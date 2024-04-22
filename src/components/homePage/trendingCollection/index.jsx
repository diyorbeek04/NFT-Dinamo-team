import React from "react";
import styles from './style.module.css'
import Fox1 from './image/1.png'
import Fox2 from './image/1.1.png'
import Fox3 from './image/1.2.png'
import Shroomie1 from './image/2.png'
import Shroomie2 from './image/2.1.png'
import Shroomie3 from './image/2.2.png'
import Robots1 from './image/3.png'
import Robots2 from './image/3.1.png'
import Robots3 from './image/3.2.png'
import Image from './image/Number.png'
import Fox from './image/fox.png'
import Shroomie from './image/shroomie.png'
import Robots from './image/robots.png'

function TrendingCollection() {
   return (
      <>
         
         <div className={styles.TrendingCollection}>
            <div className={styles.container}>
               <div className={styles.section}>
                  <div className={styles.top}>
                     <h1 className={styles.h1}>Trending Collection</h1>
                     <p className={styles.p}>
                        Checkout our weekly updated trending collection.
                     </p>
                  </div>
                  <div className={styles.card}>
                     <div className={styles.box}>
                        <img src={Fox1} alt="img" />
                        <div className={styles.center}>
                           <img src={Fox2} alt="img" />
                           <img src={Fox3} alt="img" />
                           <img src={Image} alt="img" />
                        </div>
                        <h3 className={styles.h3}>Magic Mushrooms</h3>
                        <div className={styles.bottom}>
                           <img src={Fox} alt="avatar" />
                           <h4 className={styles.h4}>MrFox</h4>
                        </div>
                     </div>
                     <div className={styles.box}>
                        <img src={Shroomie1} alt="img" />
                        <div className={styles.center}>
                           <img src={Shroomie2} alt="img" />
                           <img src={Shroomie3} alt="img" />
                           <img src={Image} alt="img" />
                        </div>
                        <h3 className={styles.h3}>Magic Mushrooms</h3>
                        <div className={styles.bottom}>
                           <img src={Shroomie} alt="avatar" />
                           <h4 className={styles.h4}>MrFox</h4>
                        </div>
                     </div>
                     <div className={styles.box}>
                        <img src={Robots1} alt="img" />
                        <div className={styles.center}>
                           <img src={Robots2} alt="img" />
                           <img src={Robots3} alt="img" />
                           <img src={Image} alt="img" />
                        </div>
                        <h3 className={styles.h3}>Magic Mushrooms</h3>
                        <div className={styles.bottom}>
                           <img src={Robots} alt="avatar" />
                           <h4 className={styles.h4}>MrFox</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default TrendingCollection