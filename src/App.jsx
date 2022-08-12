import Die from './Die'


function App() {
  const diceValue = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const dices = diceValue.map(value =>{
    return (
      <Die 
        value={value}
      />
    )
  })

  return (
    <div className='body'>
      {dices}
    </div>
  )
}

export default App
