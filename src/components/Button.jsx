
function Button({ title, index, setClickIndex, clickIndex }) {

    const isToggled = clickIndex === index;
    const clickHandler = () => {
        if(isToggled){
            setClickIndex(0);
        }
        else{
            setClickIndex(index);
        }
    }
    const btnClass = isToggled ? 'btn-warning' : 'btn-primary';

    return (
        <button onClick={clickHandler} className={`btn ${btnClass}`}>{title}</button>
    )
}

export default Button