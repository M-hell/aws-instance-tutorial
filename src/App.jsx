import { useState } from 'react'

import './App.css'

function App() {
  let [color,setcolor]=useState("black");

  const pink=()=>{setcolor("pink")};

  return (
    <>
      <div className="rto" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap bg-white bottom-12 justify-center gap-20 rounded-3xl inset-x-2 px-2 py-2">
          <button onClick={()=> {setcolor("red")}} className="bg-red-600" >RED</button>
          <button onClick={()=> {setcolor("green")}} className="bg-green-600">GREEN</button>
          <button onClick={()=> {setcolor("blue")}} className="bg-blue-600">BLUE</button>
          <button onClick={pink} className="bg-pink-600">PINK</button>
          <button onClick={()=> {setcolor("orange")}} className="bg-orange-600">ORANGE</button>
        </div>
      </div>
    </>
  )
}

export default App
