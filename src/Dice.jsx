function Dice(props) {
  const faces = [
    [<div className="dot center middle"></div>],

    [<div className="dot top right"></div>,
    <div className="dot bottom left"></div>],

    [<div className="dot top right"></div>,
    <div className="dot center middle"></div>,
    <div className="dot bottom left"></div>],

    [<div className="dot top left"></div>,
    <div className="dot top right"></div>,
    <div className="dot bottom left"></div>,
    <div className="dot bottom right"></div>],

    [<div className="dot top left"></div>,
    <div className="dot top right"></div>,
    <div className="dot center middle"></div>,
    <div className="dot bottom left"></div>,
    <div className="dot bottom right"></div>],

    [<div className="dot top left"></div>,
    <div className="dot top right"></div>,
    <div className="dot center left"></div>,
    <div className="dot center right"></div>,
    <div className="dot bottom left"></div>,
    <div className="dot bottom right"></div>],
  ]
  let face = faces[props.value - 1]
  return (
    <div onClick={props.holdDice} className={props.isHeld === true ? 'dice held' : 'dice'}>
      {face}
    </div>
  )
}

export default Dice