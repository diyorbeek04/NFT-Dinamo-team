import React from "react";
import styles from './style.module.css'
import imageCreate from '../../assets/images/createAccount/Image Placeholder.png'

function CreateAccountComponent() {
   return(
      <>
      <div className={styles.heroConnect}>
            <div className={styles.boxs}>
               <img className={styles.image} src={imageCreate} alt="connect Image" />
               <div className={styles.text}>
                  <h1>Create account</h1>
                  <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                  <form className={styles.buttons}>
                    <input className={styles.button} type="text" placeholder="Username"/> 
                    <input className={styles.button} type="email" placeholder="Email Address"/> 
                    <input className={styles.button} type="password" placeholder="Password"/> 
                    <input className={styles.button} type="password" placeholder="Confirm Password"/> 
                     <button className={styles.button1}>Create account</button>
                  </form>
            </div>
         </div>
      </div>
      </>
   )
}

export default CreateAccountComponent