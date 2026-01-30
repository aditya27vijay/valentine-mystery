import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Clue1 from "./pages/Clue1";
import Clue2 from "./pages/Clue2";
import Clue3 from "./pages/Clue3";
import Final from "./pages/Final";



import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <>
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/clue1" element={<Clue1 />} />
        <Route path="/clue2" element={<Clue2 />} />
        <Route path="/clue3" element={<Clue3 />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  );
}

export default App;
