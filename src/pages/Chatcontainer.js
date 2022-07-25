import ChatDisplay from "../components/ChatDisplay";
import MatchesDisplay from "../components/MatchesDisplay";
import ChatHeader from "../components/ChatHeader";


const Chatcontainer= () => {
    return (
        <div className="chat-container">
       <ChatHeader/>
         <div>
             <button className="option">Match</button>
             <button className="option">Chat</button>

         </div>
       <MatchesDisplay/>
       <ChatDisplay/>
       </div>
    )
}

export default Chatcontainer;