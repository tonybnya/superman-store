import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import bg from '../assets/images/bg-404.jpg';

const NotFoundPage = () => {
  return (
      <main
          className="relative overflow-hidden min-h-screen bg-cover bg-center flex flex-col justify-center items-center mx-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{backgroundImage: `url(${bg})`}}
        ></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#862019] p-4 font-bold max-lg:text-sm lg:text-lg rounded rotate-12 relative">
            Page Not Found
          </div>
          <button className="mt-5">
            <a
                className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
            >
              <div className="flex gap-2 max-lg:flex-col">
                <NavLink to="/">
                  <Button>Go to HomePage</Button>
                </NavLink>
                <NavLink to="eshop">
                  <Button>View Products</Button>
                </NavLink>
              </div>
            </a>
          </button>
        </div>
      </main>
  )
}

export default NotFoundPage;
