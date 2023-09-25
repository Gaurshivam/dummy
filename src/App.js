import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Recipe from './Component//Recipe/Recipe'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe' element={<Recipe />} />
    </Routes>
    </div>
  );
}

export default App;
