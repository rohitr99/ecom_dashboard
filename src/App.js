import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<h1>Products listening component</h1>}/>
        <Route path="/add" element={<h1>Add some products here</h1>}/>
        <Route path="/update" element={<h1>update some products here</h1>}/>
        <Route path="/logout" element={<h1>logout here</h1>}/>
        <Route path="/profile" element={<h1>this is your profile</h1>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
