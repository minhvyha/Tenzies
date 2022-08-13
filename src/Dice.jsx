function Dice(props) {
  return (
    <div onClick={props.holdDice} className={props.isHeld === true ? 'dice held' : 'dice'}>
      <span>{props.value}</span>
    </div>
  )
}

export default Dice