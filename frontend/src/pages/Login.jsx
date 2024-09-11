import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {login} from "../redux/apiCalls"
import { useDispatch,useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const Login = () => {
 
  const [showPassword,setShowPassword]=useState(false);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user)
  const error=useSelector((state)=>state.user.error)

  const handleTogglePassword=()=>{
    setShowPassword(!showPassword)
  }

  const handleLogin=async ()=>{

    if(email && password){
      try {
        setLoading(true)
        await login(dispatch,{email,password})
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)

      }
    }

  }
console.log(user.currentUser)

  return (
    <div>
      <Navbar/>
      <div className="h-[80vh] flex item-center justify-evenly p-[50px] text-gray-300 ">

        <img src="/hero.png" alt="" />
        
        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounded-md ">

          <input type="text" placeholder="Enter Your Email"  
          onChange={(e)=>setEmail(e.target.value)}
          className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] mt-[10%] ml-[10%] outline  border-none" />
          
          <div className="flex items-center ">
          
            <input type={showPassword? "text" : "password" } 
            placeholder="Enter Your Password"  
            onChange={(e)=>setPassword(e.target.value)}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] mt-[10%] ml-[10%]  outline  border-none" />

          <span style={{display: "inline",cursor: "pointer",fontSize: "20px",}} onClick={handleTogglePassword} >
            {showPassword ? "👁️" : "🔒"}
          </span>
          

          </div>

          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%] " 
          onClick={handleLogin}>
            Login
            {loading? 'Loading...': Login}
            {user.currentUser && <Navigate to="/myparcels" /> }
          </button>
          {error && <span className="text-red-500">Please make sure that u have used correct email and password </span> }
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Login
