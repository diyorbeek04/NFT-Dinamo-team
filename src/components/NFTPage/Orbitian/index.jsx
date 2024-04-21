import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './style.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import Img from './images/clock.png'
import { useNavigate } from 'react-router-dom';





const Orbitian = () => {
   const [tasks, setTasks] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
      axios.get('http://localhost:8000/DiscoverMoreNFT')
         .then(res => {
            const firstTask = res.data[1];
            setTasks([firstTask]);
         })
   }, []);

   return (
      <>
         <div className={Styles.section}>
            <div className={Styles.container}>
               <div className={Styles.card}>
                  <div className={Styles.card__left}>
                     <h1 className={Styles.card__h1} >The Orbitians</h1>
                     <strong className={Styles.card__strong}>Minted on Sep 30, 2022</strong>
                     {tasks.map((task, index) => (
                        <div key={index} className={Styles.card__item} >
                            <p className={Styles.card__p}>Created By</p>
                           <div className={Styles.card__item__top}>
                              <img className={Styles.icon} src={task.icon} alt="" />
                              <span className={Styles.card__span}>{task.iconName}</span>
                           </div>
                           <p className={Styles.card__p}>Description</p>
                           <h2 className={Styles.card__h2}>{task.description} </h2>
                        </div>
                     ))}
                     <p className={Styles.card__p}>Details</p>
                     <div className={Styles.card__item__top}>
                        <LanguageIcon sx={{ color: 'gray' }} />
                        <span className={Styles.card__span}>View on Etherscan</span>
                     </div>
                     <div className={Styles.card__item__top}>
                        <LanguageIcon sx={{ color: 'gray' }} />
                        <span className={Styles.card__span}>View Original</span>
                     </div>
                     <p className={Styles.card__p}>Tags</p>
                     <div className={Styles.card__bottom}>
                           <button className={Styles.card__button}  >ANIMATION</button>
                           <button className={Styles.card__button}  >ILLUSTRATION</button>
                           <button className={Styles.card__button}  >MOON</button>
                           <button className={Styles.card__button}  >MOON</button>
                     </div>
                  </div>
                  <div className={Styles.card__right}>
                     <img className={Styles.img}  src={Img} alt=''/>
                  </div>
               </div>
               <div className={Styles.cards__bottom}>
                     <h1 className={Styles.cards__h1}>More from this artist</h1>
                     <button className={Styles.cards__button}  onClick={() => navigate('/artist')}>Go To Artist Page</button>
                  </div>
            </div>
         </div>
      </>
   );
};

export default Orbitian;
