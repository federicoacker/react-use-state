import Button from "./Button.jsx";

function Buttons({ languages }) {
    return (
    <div className="py-5 d-flex gap-3 flex-wrap">
        { languages.map(language => <Button
            key={language.id}
            title={language.title}
            />) }
    </div>
    )
}

export default Buttons