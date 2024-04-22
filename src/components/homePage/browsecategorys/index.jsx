import React from "react";
import styles from './style.module.css'
import img1 from './image/art.png'
import img2 from './image/Collectibles.png'
import img3 from './image/music.png'
import img4 from './image/Photography.png'
import img5 from './image/video.png'
import img6 from './image/Utility.png'
import img7 from './image/video.png'
import img8 from './image/VirtualWorlds.png'
import { Link } from "react-router-dom";

function BrowseCategory() {
   return (
      <>
         <div className={styles.BrowseCategories} >
            <div className={styles.container}>
               <div className={styles.categories}>
                  <h2 className={styles.h2}>Browse Categories</h2>
                  <div className={styles.card}>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img1} alt="categories image" />
                           <p className={styles.p}>
                              Art
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img2} alt="categories image" />
                           <p className={styles.p}>
                              Collectibles
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img3} alt="categories image" />
                           <p className={styles.p}>
                              Music
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img4} alt="categories image" />
                           <p className={styles.p}>
                              Photography
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img5} alt="categories image" />
                           <p className={styles.p}>
                              Video
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img6} alt="categories image" />
                           <p className={styles.p}>
                              Utility
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img7} alt="categories image" />
                           <p className={styles.p}>
                              Sport
                           </p>
                        </div>
                     </Link>
                     <Link to={'/marketplace'}>
                        <div className={styles.box}>
                           <img className={styles.img} src={img8} alt="categories image" />
                           <p className={styles.p}>
                              Virtual Worlds
                           </p>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default BrowseCategory