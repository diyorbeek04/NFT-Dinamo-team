import React from "react";
   

function MarketplaceCards() {
   return(
      <>
     
         <div className="section" style={{ background: '#2B2B2B',display:'flex',justifyContent: 'space-between' }}>
         <div className="right">
            <img src="http://127.0.0.1:5500/img/Image%20Placeholder%20(1).png" alt="" style={{ width: '500px',height:'549px' }}/>
         </div>
         <div className="left" style={{marginRight:'100px',marginTop:"20px"}}>
            <h1 className="left-h1" style={{ color:'#FFFFFF',width:"460px",height:"56px" }}>Create account</h1>
            <p className="left-p" style={{ color:'#FFFFFF',width:'250px', }}>Welcome! enter your details and start creating, collecting and selling NFTs.</p> 
        <form action=""style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"250px",}}>
   <input  type=",username"placeholder="username" style={{zIndex:"150px",borderRadius:"20px", width:"250px",height:"30px",textAlign:"center",marginTop:"20px",position:"relative"}} />
     <input type="Email"placeholder="Email Address" style={{zIndex:"90px",borderRadius:"20px", width:"250px",height:"30px",textAlign:"center",marginTop:"20px",position:"relative"}} />
    <input type="Password"placeholder="Password" style={{zIndex:"90px",borderRadius:"20px", width:"250px",height:"30px",textAlign:"center",marginTop:"20px",position:"relative"}} />
    <input type="Password"placeholder="Password"style={{zIndex:"90px",borderRadius:"20px", width:"250px",height:"30px",textAlign:"center",marginTop:"20px",position:"relative"}} />        
        <button style={{borderRadius:"20px", width:"250px",height:"35px",textAlign:"center",marginTop:"20px",border:"2px solid red",background:"#A259FF",color:"white"}}>Create account</button>
        
        </form>
         </div>
      </div>
      
      </>
   )
}

export default MarketplaceCards