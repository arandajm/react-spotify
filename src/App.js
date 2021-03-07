import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
