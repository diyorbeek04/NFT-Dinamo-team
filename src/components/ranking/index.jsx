import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './style.module.css'
import { Link } from "react-router-dom";
function RankingComponents(){
   const [data, setData] = useState([])
   useEffect( () =>{
      axios.get(`http://localhost:8000/Rankings`)
      .then((data) => setData(data))
  }, [])
  console.log(data.data);
   return(
      <>
      <div className={styles.container}>
      <div className={styles.hero}>
         <h1 className={styles.hero__h1}>Top Creators</h1>
         <p className={styles.hero__p}>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <div className={styles.listHead}>
         <p className={styles.listHead__p}>Today</p>
         <p className={styles.listHead__p}>This Week</p>
         <p className={styles.listHead__p}>This month</p>
         <p className={styles.listHead__p}>All time</p>
         <p className={styles.listHead__p1}>1d</p>
         <p className={styles.listHead__p1}>7d</p>
         <p className={styles.listHead__p1}>30d</p>
         <p className={styles.listHead__p1}>All time</p>
      </div>
      <div className={styles.listIdea}>
         <p className={styles.listIdea__p}>#</p>
         <p className={styles.listIdea__p2}>Artist</p>
         <ul className={styles.ideaUL}>
            <li className={styles.ul__li1}>Change</li>
            <li className={styles.ul__li2}>NFTs sold</li>
            <li className={styles.ul__li}>Volume</li>
         </ul>
      </div>
      <div className={styles.cards}>
         {data?.data?.map((elem, index) =>
      <>
      <div key={index} className={styles.card}>
         <div className={styles.card__id}>
         <p className={styles.card__i}>{elem.id}</p>
         </div>
         <img src={elem.image} className={styles.card__img} alt="" />
         <ul className={styles.ul}>
            <li className={styles.li1}>{elem.name}</li>
            <li className={styles.li2}>{elem.change}</li>
            <li className={styles.li3}>{elem.NFTssold}</li>
            <li className={styles.li4}>{elem.Volume}</li>
         </ul>
      </div>
      </>
      
      )}
      </div>
      </div>
      </>
   )
}

export default RankingComponents