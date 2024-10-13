import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Eshop from './pages/Eshop';
import Account from './pages/Account';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='eshop' element={<Eshop />} />
            <Route path='account' element={<Account />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
