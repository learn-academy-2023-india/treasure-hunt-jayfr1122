import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    '❌',
    '❌',
    '❌',
    '❌',
    '❌',
    '❌',
    '❌',
    '❌',
    '❌'
  ])

  const handleClick = (id) => {
    // assign a rando number to treasure
    let treasureLocation = Math.floor(Math.random()* board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    console.log("treasure: ", treasureLocation)
    console.log("bomb: ", bombLocation)
    if (treasureLocation === id) {
      board[id] = '🏆'
      setBoard([...board])
    } else if(bombLocation === treasureLocation || bombLocation === id) {
      board[id] = "💣"
      setBoard([...board])
    } else {
      board[id] = '💩'
    // spread operator ...
      setBoard([...board])
  }
}
  return (
    <>
    <div className="background">
      <h1 className="title">Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
      </div>
    </>
  )
}

export default App
