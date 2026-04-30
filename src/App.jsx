
import Container from "react-bootstrap/Container";
import Header from "./components/Header.jsx";
import Buttons from "./components/Buttons.jsx";
import LanguageCards from "./components/LanguageCards.jsx";
import { languages } from "./utils/languages.js";
import { useState } from "react";

function App() {
  const [clickIndex, setClickIndex] = useState(0);
  console.log(clickIndex);
  return (
    <>
    <Header/>
    <Container>
        <Buttons languages={ languages } clickIndex={clickIndex} setClickIndex={setClickIndex}/>
        <LanguageCards languages={ languages }/>
    </Container>
    </>
  );
}
export default App;
