import LanguageCard from "./LanguageCard.jsx";
function LanguageCards({languages}) {
  return (
    languages.map(language => <LanguageCard
        key={ language.id }
        title={ language.title }
        description={ language.description }
        />)
  )
}

export default LanguageCards