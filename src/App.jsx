import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import Account from "./pages/Account";
import NotFoundPage from "./pages/NotFoundPage";

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