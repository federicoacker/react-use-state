
import Container from "react-bootstrap/Container";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";
import LanguageCards from "./components/LanguageCards.jsx";
import { languages } from "./utils/languages.js";

function App() {
  return (
    <>
    <Header/>
    <Container>
        <Buttons languages={ languages }/>
        <LanguageCards languages={ languages }/>
    </Container>
    </>
  );
}
export default App;
