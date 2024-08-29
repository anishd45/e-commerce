import React from 'react'
import './CSS/LoginSignup.css'
// import { useContext } from 'react'
// import { StoreContext } from '../../Context/StoreContext'
// import axios from 'axios'

const LoginSignup = ({setShowLogin}) => {

  // const {url,setToken} = useContext(StoreContext)
  
  // const [currState,SetCurrState] =useState("Login")
  //   const [data,setData] = useState({
  //     name:"",
  //     email:"",
  //     password:""
  //   })

    // const onChangeHandler = (event) =>{
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setData(data=>({...data,[name]:value}))
    // }

    // const onLogin = async (event)=>{
    //   event.preventDefault()
    //   let newUrl = url;
    //   if (currState==="Login") {
    //     newUrl += "/api/user/login"
    //   } else {
    //     newUrl += "/api/user/register"
    //   }

    //   const response = await axios.post(newUrl,data);
    //   if (response.data.success) {
    //     setToken(response.data.token);
    //     localStorage.setItem("token",response.data.token);
    //       setShowLogin(false)
    //   }else{
    //     alert(response.data.message)
    //   }
    // }

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>SetCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>SetCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginSignup
