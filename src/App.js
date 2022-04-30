import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register';
import ManageInvntory from './components/pages/ManageInventory/ManageInvntory';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';
import Navbar from './components/sharedPages/Navbar';
import RequireAuth from './components/sharedPages/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/inventory' element={<AllProducts></AllProducts>} />
        <Route path='/products/:id' element={<RequireAuth>
          <UpdateProduct></UpdateProduct>
        </RequireAuth>} />
        <Route path='/manage' element={<ManageInvntory></ManageInvntory>} />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>
  );
}

export default App;
