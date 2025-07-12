import { useState } from "react";
import ScrollIndicator from "./components/ScrollIndicator";
import FloatingCircles from "./components/FloatingCircles";
import ScrollIntro from "./components/ScrollIntro";
import MainContent from "./components/MainContent";
import "./index.css";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <FloatingCircles />
      {!showMain && <ScrollIndicator />}
      <ScrollIntro onFinish={() => setShowMain(true)} />
      {showMain && <MainContent />}
    </>
  );
}

export default App;
