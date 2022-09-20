import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from './components/Map'
import Intro from './components/Intro'
import Search from "./components/Search";
import Avatar from "./components/Avatar";
import Footprint from "./components/Footprint";
import Diary from "./components/Diary";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/map" element={<Map />} />
          <Route path="/search" element={<Search />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/footprint" element={<Footprint />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App