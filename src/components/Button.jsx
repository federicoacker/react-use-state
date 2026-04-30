
function Button({title, clickState}) {
    const btnClass = clickState ? 'btn-warning' : 'btn-primary'
  return (
    <button className={`btn ${btnClass}`}>{ title }</button>
  )
}

export default Button