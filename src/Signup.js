
import React, {useState} from 'react'
function Signup() {
    const [name, setname]=useState("");
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    
    const Collectdata=()=>{
        console.warn(name,email,password)
    }

  return (
    <div className='box'>
        <h1>
            Register
        </h1>
     <div><input  className= "inputbox" onChange={(e)=>setname(e.target.value)} placeholder='Enter Name'></input></div>   
     <div><input  className= "inputbox" onChange={(e)=>setemail(e.target.value)}placeholder='Enter email'></input></div> 
     <div><input  className= "inputbox"onChange={(e)=>setpassword(e.target.value)} placeholder='Enter password'></input></div><br></br>
     <button onClick={Collectdata}>Submit</button>
    </div>
  )

}

export default Signup