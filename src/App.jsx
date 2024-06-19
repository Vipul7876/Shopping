import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Footer from './Components/Footer';
import ItemPage from './Components/ItemPage';
import Cart from './Components/Cart';
import Address from './Components/Address';
import AddressForm from './Components/AddressForm';
import Login from './Components/Login';
import LastPage from './Components/LastPage';
import { useScrollToTop } from './Components/CustomHooks/useScrollToTop';
import { useContext } from 'react';
import Context from './Components/Context/Context';
import { Toaster } from 'react-hot-toast';

function App () {

  const { loggedin } = useContext( Context );

  return (

    <BrowserRouter>
      <ScrollToTop />
      { loggedin ? <Navbar /> : <></> }
      <Routes>
        <Route path='/login' element={ loggedin ? <Navigate to='/' /> : <Login /> } />
        <Route path='/' element={ loggedin ? <Home /> : <Navigate to='/login' /> } />
        <Route path='/men' element={ loggedin ? <Men /> : <Navigate to='/login' /> } />
        <Route path='/women' element={ loggedin ? <Women /> : <Navigate to='/login' /> } />
        <Route path='/kids' element={ loggedin ? <Kids /> : <Navigate to='/login' /> } />
        <Route path='/Product/:category/:id' element={ loggedin ? <ItemPage /> : <Navigate to='/login' /> } />
        <Route path='/cart' element={ loggedin ? <Cart /> : <Navigate to='/login' /> } />
        <Route path='/cart/address' element={ loggedin ? <Address /> : <Navigate to='/login' /> } />
        <Route path='/cart/address/form' element={ loggedin ? <AddressForm /> : <Navigate to='/login' /> } />
        <Route path='/last' element={ loggedin ? <LastPage /> : <Navigate to='/login' /> } />
      </Routes>
      <Footer />
      <Toaster
        position="bottom-right"
        reverseOrder={ false }
        toastOptions={ {
          error: {
            style: {
              background: '#f505057a',
              border: '1px solid red',
              color: 'white',
            }
          }
        }}
      />
    </BrowserRouter>

  );
}

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default App;
