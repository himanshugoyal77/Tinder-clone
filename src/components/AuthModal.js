import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie";

const AuthModal = ({setshowModal, setIsSignUp, isSignUp}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [cookies, setCookie] = useCookies("user");
   // const {signUp} = useUserAuth;

    let navigate = useNavigate();

 console.log(email, password, confirmPassword,);
 

 const handleClick = () => {
     setshowModal(false);
 }

//  const submithandler = () => {
//      setMinimal(true);
//  }

 const handleSubmit = async (e) => {
     e.preventDefault();
     try {
        if(isSignUp && (password !== confirmPassword)){
            setError('passsword need to be match');
            return
        }
     
      const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, {email, password});
      
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.user_id);
      setCookie("AuthToken", response.data.token)

      const success = response.status === 201;
      console.log(response.status)
      if(success && isSignUp) navigate("/onboarding")
      if(success && !isSignUp) navigate("/dashboard")

     } catch (e) {
         console.log(e)     
    }
 }
     return (
        <div className="auth-modal">
            <div className="container-1">

            {/* <div onClick={handleClick} className="cancel-button">
              ❌
            </div> */}
            <h2>{isSignUp ? "Create Accouont" : "Log In"}</h2>
            <p>By clicking Log In you agree to our terms. Learn how we process your data in our Privacy policy</p>

            <form onSubmit={handleSubmit} >
               <input type="email"
                id="email" 
                name="email" 
                placeholder="email" 
                required={true}
                onChange={(e)=> setEmail(e.target.value)} >
               </input>

               <input type="password"
                id="password" 
                name="password" 
                placeholder="password" 
                required={true}
                onChange={(e)=> setPassword(e.target.value)} >
               </input>

             {isSignUp && <input type="password"
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="confirmPassword" 
                required={true}
                onChange={(e)=> setConfirmPassword(e.target.value)} >
               </input>
             }

               <input type="submit" className="secondary-button" onSubmit={handleSubmit}></input>
              
            </form>
            </div>
            <div className="container-2">
                  {/* <hr/> */}
                  
                  <p>{error}</p>
                 <h2>GET THE APP</h2>

            </div>

           
            <div onClick={handleClick} className="cancel-button">
              ❌
            </div>

            
        </div>
    )
}

export default AuthModal; 