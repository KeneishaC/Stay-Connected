import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './Components/ChatFeed'

function App() {
  return (
     <ChatEngine 
        height='100vh'
        projectID='a1967ba2-df19-43a8-9eb7-dfb57a51dd7d'
        userName='swekeneisha'
        userSecret='Sjc*1993'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;
