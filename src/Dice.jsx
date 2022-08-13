function Dice(props) {
  return (
    <div onClick={(event) =>props.holdDice(props.id)} className={props.isHeld === true ? 'dice held' : 'dice'}>
      <span>{props.value}</span>
    </div>
  )
}

export default Dice