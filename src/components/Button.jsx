
function Button({ title, Index, setClickIndex, isToggled }) {

    const clickHandler = () => {
        setClickIndex(Index);
    }
    const btnClass = isToggled ? 'btn-warning' : 'btn-primary';

    return (
        <button onClick={clickHandler} className={`btn ${btnClass}`}>{title}</button>
    )
}

export default Button