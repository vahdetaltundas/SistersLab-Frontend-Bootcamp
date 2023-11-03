import { useState } from 'react'

import './App.css'
import PostBody from './component/PostBody'

function App() {
  const [id,setId]=useState(100000)

  return (
    <div>
        <button onClick={()=>setId(Math.floor(Math.random()*100+1))}>Show me a random post</button>
        <PostBody id={id}/>
    </div>
  )
}

export default App
