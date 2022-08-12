import './App.css'
import Dice from './Dice'


function App() {
  const diceValue = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const dices = diceValue.map(value =>{
    return (
      <Dice 
        value={value}
      />
    )
  })

  return (
    <div className='body'>
      something
    </div>
  )
}

export default App
