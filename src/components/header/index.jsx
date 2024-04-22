import React from "react";
import styles from "./style.module.css"
import logo from '../../assets/images/header/logo.png'
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
   return(
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.navbar}>
               <div className={styles.logo}>
                  <Link to={'/'}>
                  <img src={logo} alt="site logo" />
                  </Link>
               </div>
               <div className={styles.menu}>
                  <Link className={styles.link} to={"/marketplace"}>Marketplace</Link>
                  <Link className={styles.link} to={"/ranking"}>Rankings</Link>
                  <Link className={styles.link} to={"/connect-wallet"}>Connect a wallet</Link>
                  <Link className={styles.link__create} to={"/create-account"}><PersonOutlineIcon/> Sign Up</Link>
                  
               </div>
               <div className={styles.hamburger}>
                  <MenuIcon />
               </div>
            </div>
         </div>
      </div>
     

   )
}

export default Header