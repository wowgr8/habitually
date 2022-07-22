import './App.css';
import Home from './Home';
import Login from "./Login";
import Header from './Header';
// import Material UI for styling
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="card">
          <div className='row'>
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path ="/" element={<Home />}/>
            </Routes>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
