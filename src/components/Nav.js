import colorLogo from "../images/Tinder-Logo.png"
import whiteLogo from "../images/wordmark-R-white-RGB.png"


const Nav = ({minimal, setshowModal, showModal, setSignUp}) => {
   const handleClick= () => {
       setshowModal(true)
       setSignUp(false)
   } 
   
   const authToken = true

    return (
    <nav>
        <div className="logo-container">
            <img className="logo" src={ minimal ? colorLogo : whiteLogo }></img>
        </div>

      {/* {!authToken && */}
      { !minimal && <button className="nav-button"
      onClick={handleClick} disabled={showModal}
      >Log In</button>}
    </nav>
    )
}

export default Nav;