import Button from "./Button.jsx";

function Buttons({ languages, clickIndex, setClickIndex }) {
    return (
        <div className="py-5 d-flex gap-3 flex-wrap">
            {languages.map(language => <Button
                key={language.id}
                title={language.title}
                index={language.id}
                clickIndex={clickIndex}
                setClickIndex={setClickIndex}
            />)}
        </div>
    )
}

export default Buttons