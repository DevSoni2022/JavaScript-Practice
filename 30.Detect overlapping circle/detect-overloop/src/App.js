import React from 'react'

const App = () => {
        const ClickDetect = (e) =>{
          debugger
const {} = e
        } 
  return (
    <div style={{width:'100vw',height:'100vh'}}>
    <div onClick={(e)=>ClickDetect(e)} style={{width:'100%',height:'100%'}}>App</div>
    </div>
  )
}

export default App