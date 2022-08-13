import React from 'react'
import Dice from './Dice'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dices, setDices] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [roll, setRoll] = React.useState(0)
  const [start, setStart] = React.useState(false)

  React.useEffect(() => {
    setStart(true)
    let value = dices[0].value
    let isHeld = dices.every(dice => dice.isHeld)
    let sameValue = dices.every(dice => dice.value === value)
    if (sameValue && isHeld){
      setTenzies(true)
    }
    else{
      setTenzies(false)
    }
  }, [dices])

  function allNewDice(){
    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push({id: nanoid(),value:(Math.floor(Math.random() * 6) + 1), isHeld:false})
    }
    return newArray
  }

  function holdDice(id){
    if (tenzies){
      return
    }
    setDices(dices => dices.map(dice =>{
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))
  }

  function rollDice(){
    if (tenzies){
      setDices(allNewDice())
      return
    }
    setDices(dices => dices.map(dice =>{
      return dice.isHeld === false ? {...dice, value: (Math.floor(Math.random() * 6) + 1)}: dice
    }))
    setRoll(x => x + 1)
    
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
      
      {tenzies && <Confetti />}
      {!start && <h1 className="title">Tenzies</h1>}
      {!start && <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>}
      {start && <h1 className='count-roll'>Count: {roll}</h1>}
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll-button'>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
    
  )
}

export default App
