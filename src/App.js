import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Navbar from './components/sharedPages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
