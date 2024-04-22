import React from "react";
import styles from './style.module.css'
import { Link } from "react-router-dom";
import heroImg from './image/hero.png'
import Avatar from './image/avatar.png'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
function Hero() {
   return (
      <>
         
         <div className={styles.hero}>
            <div className={styles.container}>
               <div className={styles.hero__section}>
                  <div className={styles.left}>
                     <h1 className={styles.h1}>
                        Discover digital art & Collect NFTs
                     </h1>
                     <p className={styles.p}>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                     </p>
                     <Link className={styles.link__create} to={"/create-account"}><RocketLaunchIcon/>Get Started</Link>
                     <div className={styles.bottom}>
                        <ul className={styles.ul}>
                           <li className={styles.li}>
                              <h3 className={styles.h3}>240k+ </h3>
                              <p className={styles.li__p}>Total Sale</p>
                           </li>
                           <li>
                              <h3 className={styles.h3}>100k+ </h3>
                              <p className={styles.li__p}>Auctions </p>
                           </li>
                           <li>
                              <h3 className={styles.h3}>240k+ </h3>
                              <p className={styles.li__p}>Artists </p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className={styles.right}>
                     <img className={styles.img} src={heroImg} alt="hero img" />
                     <h2 className={styles.h2}>Space Walking</h2>
                  <div className={styles.right__bottom}>
                     <img src={Avatar} alt="avatar" />
                     <small className={styles.small}>Animakid</small>
                  </div>
                     </div>
                  
               </div>
            </div>
         </div>

      </>
   )
}

export default Hero