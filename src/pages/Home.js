import Nav from "../components/Nav";
import {useState} from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
 const [showModal, setshowModal] = useState(false);
 const [isSignUp, setIsSignUp] = useState(true);
 const [minimal, setMinimal] = useState(false);


 const handleClick = () => {
     setshowModal(true);
     setIsSignUp(true)
     console.log("clicked");
 }

 const authToken = false;


    return (
        <div  className="overLay">
        <Nav minimal={minimal} 
        setshowModal={setshowModal} 
        showModal={showModal}
         setSignUp={setIsSignUp} />
         
        <div className="home">
            <h1 className="primary-title">Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? "signout" : "Create Account"}
            </button>

        {
            showModal && (<AuthModal setshowModal={setshowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>)
        }

        </div>
        </div>
    )
}

export default Home;