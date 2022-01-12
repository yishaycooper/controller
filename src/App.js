import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonWidget from "./components/ButtonWidget";
import TextWidget from "./components/TextWidget";
import MainNav from "./components/MainNav";
import StatusWidget from "./components/StatusWidget";

function App() {
  return (
    <div className="App">
      <StatusWidget></StatusWidget>
      <Router>
        <Routes>
          <Route path="/" element={<MainNav />}>
            <Route path="/button" element={<ButtonWidget />} />
            <Route path="/text" element={<TextWidget />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
