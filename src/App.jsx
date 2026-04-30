
import Container from "react-bootstrap/Container.jsx";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";
import LanguageCard from "./components/LanguageCard.jsx";
import languages from "./utils/languages.js";

function App() {
  return (
    <>
    <Header/>
    <Container>
        <Buttons languages={languages}/>
        <LanguageCard/>
    </Container>
    </>
  );
}
export default App;
