import LanguageCard from "./LanguageCard.jsx";
function LanguageCards({languages, clickIndex}) {
  return (
    languages.map(language => <LanguageCard
        key={ language.id }
        title={ language.title }
        isOpened = { clickIndex === language.id}
        description={ language.description }
        />)
  )
}

export default LanguageCards