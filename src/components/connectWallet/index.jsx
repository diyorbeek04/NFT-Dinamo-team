import React from "react";
import styles from './style.module.css'
import imageConnect from '../../assets/images/connectWallet/1.png'
import imageConnectAvatar1 from '../../assets/images/connectWallet/Metamask.png'
import imageConnectAvatar2 from '../../assets/images/connectWallet/WalletConnect.png'
import imageConnectAvatar3 from '../../assets/images/connectWallet/Coinbase.png'

function ConnectWalletComponent() {
   return(
      <div className={styles.heroConnect}>
            <div className={styles.boxs}>
               <img className={styles.image} src={imageConnect} alt="connect Image" />
               <div className={styles.text}>
                  <h1>Connect wallet</h1>
                  <p>Choose a wallet you want to connect. There are several wallet providers.</p>
                  <div className={styles.buttons}>
                     <div className={styles.button}><img src={imageConnectAvatar1} alt="avatar" /><span>Metamask</span> </div>
                     <div className={styles.button}><img src={imageConnectAvatar2} alt="avatar" /><span>Wallet Connect</span> </div>
                     <div className={styles.button}><img src={imageConnectAvatar3} alt="avatar" /><span>Coinbase</span> </div>
                  </div>
            </div>
         </div>
      </div>
   )
}

export default ConnectWalletComponent