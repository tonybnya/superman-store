<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
>>>>>>> 4f47de75d095dcc1877e9df5d16796f7f0e0e6c0
import Home from './pages/Home';
import Eshop from './pages/Eshop';
import Account from './pages/Account';
import NotFoundPage from './pages/NotFoundPage';
<<<<<<< HEAD
import Layout from './pages/Layout';
import './styles/App.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="e-shop" element={<Eshop />} />
                        <Route path="account" element={<Account />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
=======
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="e-shop" element={<Eshop />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
>>>>>>> 4f47de75d095dcc1877e9df5d16796f7f0e0e6c0
