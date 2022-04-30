import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/pages/AddItem/AddItem';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register';
import ManageInvntory from './components/pages/ManageInventory/ManageInvntory';
import MyItems from './components/pages/MyItems/MyItems';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';
import Footer from './components/sharedPages/Footer';
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
        <Route path='/manage' element={<RequireAuth>
          <ManageInvntory></ManageInvntory>
        </RequireAuth>} />
        <Route path='/add' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>} />
        <Route path='/myItems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>} />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
