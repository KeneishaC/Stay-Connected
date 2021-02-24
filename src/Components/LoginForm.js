import { useState } from 'react'
import axios from 'axios'
function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async ( e) => {
        e.preventDefault()

        
        const authObject = { 'Projet-ID':'a1967ba2-df19-43a8-9eb7-dfb57a51dd7d', 'User-Name': username, 'User-Secret': password  }
        
        try {
            //username | password => chatengine -> give message 
             await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            //works out -> logged in 
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            //error -> try again

            
        }

    }

    return (
        <div className='wrapper'>
            <div>
                <h1 className='title'>Stay Connected</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Get Connected</span>
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
