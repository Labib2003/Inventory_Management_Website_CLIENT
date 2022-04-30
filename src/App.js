import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Navbar from './components/sharedPages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>
  );
}

export default App;
