import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AuthorProfile from "./pages/AuthorProfile";
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/author/:name" element = {<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;