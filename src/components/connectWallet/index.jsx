import React from "react";

function ConnectWalletComponent() {
   return(
      <>
          <div className="section" style={{ background: '#2B2B2B',display:'flex',justifyContent: 'space-between' }}>
         <div className="right">
            <img src="http://127.0.0.1:5500/img/Image%20Placeholder%20(2).png" alt="" style={{ width: '500px',height:'549px' }}/>
         </div>
         <div className="left" style={{marginRight:'300px',marginTop:"50px",width:"250px"}}>
            <h1 className="left-h1" style={{ color:'#FFFFFF',width:"250px",height:"56px" }}>Connect wallet</h1>
            <p className="left-p" style={{ color:'#FFFFFF',width:'250px', marginTop:"-20px"}}>Choose a wallet you want to connect. There are several wallet providers.</p> 
           <button style={{width:"250px",color:"white",height:"50px",border:"1px solid #A259FF",background:"#3B3B3B",marginBottom:"20px",borderRadius:"20px"}}><img style={{marginRight:"150px"}} src="http://127.0.0.1:5500/img/Metamask.png"alt=""/> <h4 style={{marginTop:"-25px"}}>Metamask</h4></button>
           <button style={{width:"250px",color:"white",height:"50px",border:"1px solid #A259FF",background:"#3B3B3B",borderRadius:"20px",marginBottom:"20px"}}><img style={{marginRight:"150px"}}  src="http://127.0.0.1:5500/img/Coinbase%20(1).png" alt="" /><h4 style={{marginTop:"-25px"}}>Wallet Connect</h4></button>
           <button style={{width:"250px",color:"white",height:"50px",border:"1px solid #A259FF",background:"#3B3B3B",borderRadius:"20px",marginBottom:"20px"}}><img style={{marginRight:"150px"}} src="http://127.0.0.1:5500/img/Coinbase%20(1).png" alt="" /><h4 style={{marginTop:"-25px"}}>Coinbase</h4></button>
            </div></div> </>
   )
}

export default ConnectWalletComponent