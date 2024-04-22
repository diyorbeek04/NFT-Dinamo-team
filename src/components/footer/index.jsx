import React from "react";
import styles from "./style.module.css"
import logo from '../../assets/images/footer/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";



function Footer() {
   return(
      <div className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.footer__top}>
               <div className={styles.footer__top_left}>
               <Link to={'/'}>
                  <img src={logo} alt="site logo" />
                  </Link>
                  <p>NFT marketplace UI created with Anima for Figma.</p>
                  <p>Join our community</p>
                  <div className={styles.icons}>
                     <YouTubeIcon/>
                     <TwitterIcon/>
                     <InstagramIcon/>
                  </div>
               </div>
               <div className={styles.footer__top_center}>
                  <h1>Explore</h1>
                  <div className={styles.menu}>
                  <Link className={styles.link} to={"/marketplace"}>Marketplace</Link>
                  <Link className={styles.link} to={"/ranking"}>Rankings</Link>
                  <Link className={styles.link} to={"/connect-wallet"}>Connect a wallet</Link>
               </div>
               </div>
               <div className={styles.footer__top_right}>
                  <h1>Join our weekly digest</h1>
                  <p>Get exclusive promotions & updates straight to your inbox.</p>
                  <div className={styles.connect}>
                     <h3 className={styles.true}>Enter your email here</h3>
                     <h3 className={styles.false}>Subscribe</h3>
                  </div>
               </div>
            </div>
            <hr />
            <div className={styles.footer__bottom}>
               <p>&copy NFT Market. Use this template freely.</p>
               <p>Created by the DYNAMO team</p>
            </div>
         </div>
      </div>

   )
}

export default Footer