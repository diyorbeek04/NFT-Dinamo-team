import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css'
import axios from "axios";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';



function TopCreators() {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get(`http://localhost:8000/TopCreators`)
         .then((data) => setData(data))

   }, [])


   return (
      <>
         <div className={styles.TopCreators}>
            <div className={styles.container}>
               <div className={styles.top}>
                  <div className={styles.top__left}>
                     <h2 className={styles.h2}>
                        Top creators
                     </h2>
                     <p className={styles.p}>
                        Checkout Top Rated Creators on the NFT Marketplace
                     </p>
                  </div>
                  <Link className={styles.button} to={'/ranking'}><RocketLaunchIcon/>View Rankings</Link>
               </div>
               <div className={styles.card}>
                  {data?.data?.map((elem, index) =>
                    <Link className={styles.link} to={'/artist'}>
                     <div className={styles.box} key={index}>
                        <div className={styles.box__top}>
                           <div className={styles.id}>{elem.id}</div>
                           <img className={styles.box__img} src={elem.creatorImage} alt="creator image" />
                        </div>
                       <div className={styles.desc}>
                       <h3 className={styles.name}>{elem.creatorTitle}</h3>
                        <div className={styles.box__bottom}>
                            <p className={styles.box__p}>Total Sales:</p>
                            <span className={styles.price}>{elem.price}</span>
                        </div>
                       </div>
                     </div>
                    </Link>
                  )}
               </div>
            </div>
         </div>
      </>
   )
}

export default TopCreators