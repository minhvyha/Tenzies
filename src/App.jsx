import React from 'react'
import Dice from './Dice'
import { nanoid } from 'nanoid'

function App() {
  const [dices, setDices] = React.useState(allNewDice())

  function allNewDice(){
    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push({id: nanoid(),value:(Math.floor(Math.random() * 6) + 1), isHeld:false})
    }
    return newArray
  }

  function holdDice(id){
    setDices(dices => dices.map(dice =>{
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))
  }

  function rollDice(){
    setDices(allNewDice())
  }

  const diceElements = dices.map(dice =>{
    return (
      <Dice 
        key={dice.id}
        value={dice.value}
        isHeld={dice.isHeld}
        id={dice.id}
        holdDice={() => holdDice(dice.id)}
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
