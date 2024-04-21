import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './style.module.css';

const NFTcards = () => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:8000/DiscoverMoreNFT')
         .then(res => setTasks(res.data))
   }, []);

   return (
      <>
         <div className={Styles.section}>
            <div className={Styles.container}>
               <div className={Styles.component}>
                  <div className={Styles.card}>
                     {tasks.map((task, index) => (
                        <div key={index} className={Styles.card__item}>
                           <img className={Styles.img} src={task.NFTImage} alt="" />
                           <h2 className={Styles.card__h2}>{task.NFTTitle}</h2>
                           <div className={Styles.card__item__top}>
                              <img className={Styles.icon} src={task.icon} alt="" />
                              <p className={Styles.card__p}>{task.iconName}</p>
                           </div>
                           <div className={Styles.card__item__bottom}>
                              <div className={Styles.card__item__bottom__left}>
                                 <h2 className={Styles.h2}>Price</h2>
                                 <span className={Styles.card__span}>{task.price}</span>
                              </div>
                              <div className={Styles.card__item__bottom__left}>
                                 <h2 className={Styles.h2}>Highest Bid</h2>
                                 <span className={Styles.card__span}>{task.highest}</span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default NFTcards;
