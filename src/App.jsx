import React from 'react'
import Dice from './Dice'


function App() {
  const [dices, setDices] = React.useState(allNewDice())

  function allNewDice(){
    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return newArray
  }

  function rollDice(){
    setDices(allNewDice())
  }

  const diceElements = dices.map(value =>{
    return (
      <Dice 
        value={value}
      />
    )
  })

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll-button'>Roll</button>
    </main>
    
  )
}

export default App
