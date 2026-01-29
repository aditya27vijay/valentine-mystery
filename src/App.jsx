import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Clue1 from "./pages/Clue1";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <>
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clue1" element={<Clue1 />} />
      </Routes>
    </>
  );
}

export default App;
