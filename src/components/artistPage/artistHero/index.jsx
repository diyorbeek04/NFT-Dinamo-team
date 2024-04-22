import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import AddIcon from '@mui/icons-material/Add';
import avatar from "./images/avatar.png"
import axios from "axios";
function ArtistHero() {
   return(
      <>
         <div className={styles.section}>
             <img className={styles.img__avatar} src={avatar} alt={avatar}/>
         </div>
         <div className={styles.container}>
         <div className={styles.anime}>
            <h3 className={styles.anime__h3}>Animakid</h3>
            {/* <div className={styles.anime__button}>
               <button className={styles.anime__button__but1}><CopyAllIcon className={styles.icon1}/><p className={styles.anime__button__p}>0xc0E3...B79C</p></button>
               <button className={styles.anime__button__but2}><AddIcon /><p className={styles.anime__button__p2}>Follow</p></button>
            </div> */}
            <ul className={styles.anime__ul}>
               <li className={styles.anime__ul__li}>
                 <h3 className={styles.anime__ul__li__h3}>250k+</h3>
                 <p className={styles.anime__ul__li__p}>Volume</p>
               </li>
               <li className={styles.anime__ul__li}>
                 <h3 className={styles.anime__ul__li__h3}>50+</h3>
                 <p className={styles.anime__ul__li__p}>NFTs Sold</p>
               </li>
               <li className={styles.anime__ul__li}>
                 <h3 className={styles.anime__ul__li__h3}>3000+</h3>
                 <p className={styles.anime__ul__li__p}>Followers</p>
               </li>
            </ul>
            <div className={styles.anime__ends}>
               <h3 className={styles.anime__ends__h3}>Bio</h3>
               <p className={styles.anime__ends__p}>The internet's friendliest designer kid.</p>
            </div>
            <div className={styles.anime__bottom}>
               <h3 className={styles.anime__ends__h3}>Links</h3>
               <div className={styles.anime__bottom__icon}>
               <LanguageIcon/><YouTubeIcon/><XIcon/><InstagramIcon/>
               </div>
            </div>
       
           </div>
           <hr className={styles.hr__hero} />
         </div>
       
      </>
   )
}

export default ArtistHero