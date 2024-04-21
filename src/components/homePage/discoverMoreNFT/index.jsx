import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import { Link } from "react-router-dom";
import axios from "axios";

function DiscoverMoreNFT() {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get(`http://localhost:8000/DiscoverMoreNFT`)
         .then((data) => setData(data))
   }, [])

   return (
      <>
         <div className={styles.container}>
            <div className={styles.top}>
               <div className={styles.top__left}>
                  <h2 className={styles.h2}>
                     Discover More NFTs
                  </h2>
                  <p className={styles.p}>
                     Explore new trending NFTs
                  </p>
               </div>
               <Link className={styles.button} to={'/marketplaceg'}>See All</Link>
            </div>
            <div className={styles.card}>
               {data?.data?.map((elem, index) =>
                  <div className={styles.box}>
                     <img className={styles.img} src={elem.NFTImage} alt="image" />
                     <div className={styles.desc}>
                        <h3 className={styles.h3}>{elem.NFTTitle}</h3>
                        <div className={styles.center}>
                           <img className={styles.icon} src={elem.icon} width={24} height={24} alt="icon" />
                           <h4 className={styles.iconName}>{elem.iconName}</h4>
                        </div>
                        <div className={styles.bottom}>
                           <div className={styles.left}>
                              <p className={styles.pp}>Price</p>
                              <h5 className={styles.price}>{elem.price}</h5>
                           </div>
                           <div className={styles.right}>
                              <p className={styles.pp}>Highest Bid</p>
                              <h5 className={styles.price}>{elem.highest}</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   )
}

export default DiscoverMoreNFT