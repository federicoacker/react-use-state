import { useState } from "react"

function Button({title}) {
    const [clickState, setClickState] = useState(false);

    const clickHandler = () => {
        setClickState(!clickState);
    }

    const btnClass = clickState ? 'btn-warning' : 'btn-primary'
  return (
    <button onClick={clickHandler} className={`btn ${btnClass}`}>{ title }</button>
  )
}

export default Button