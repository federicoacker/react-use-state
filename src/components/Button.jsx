
function Button({title, clickState, clickHandler}) {
    const btnClass = clickState ? 'btn-warning' : 'btn-primary'
  return (
    <button onClick={clickHandler} className={`btn ${btnClass}`}>{ title }</button>
  )
}

export default Button