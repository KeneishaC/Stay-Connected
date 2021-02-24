import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'

function App() {

   if(!localStorage.getItem('username')) return <LoginForm />

  return (
     <ChatEngine 
        height='100vh'
        projectID='a1967ba2-df19-43a8-9eb7-dfb57a51dd7d'
        userName='happygolucky'
        userSecret='1234'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;
