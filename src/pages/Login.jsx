import { Link } from 'react-router-dom';
import bg from '../assets/images/bg-login-signup.png';

const Login = () => {
  return (
    <main className="relative overflow-hidden min-h-screen bg-cover bg-center flex flex-col justify-center items-center mx-0 pt-10 font-rajdhani">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{backgroundImage: `url(${bg})`}}
      ></div>
      <div className="relative z-10 container flex-1 flex flex-col items-center max-w-xl px-4 py-28">
        <div
          className="flex flex-col p-6 rounded-2xl shadow-2xl shadow-[#862019] w-96 max-sm:w-80"
        >
          <h1 className="text-center text-5xl mb-2 text-neutral-200">Login</h1>
          <h3 className="text-neutral-200 text-center pb-4">
            Don&apos;t have an account yet? <Link to="/signup" className="underline">Sign up here</Link>
          </h3>

          <input
            id="email"
            type="email"
            className="w-auto my-2 mx-8 p-2 rounded-md placeholder-gray-200 border-white border-2 bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="Email"
          />

          <input
            id="password"
            type="password"
            className="w-auto my-2 mx-8 p-2 rounded-md placeholder-gray-200 border-white border-2 bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="Password"
          />

          <Link className="text-center underline">Forgot your password?</Link>

          <button
            className="relative inline-flex items-center justify-center p-0.5 my-4 mx-8 overflow-hidden text-sm font-medium text-[#f1c530] rounded-md bg-[#062a5a] hover:bg-[#862019] hover:text-white focus:outline-none"
          >
            <span
              className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 rounded-md"
            >
              Confirm
            </span>
          </button>
        </div>
      </div>
    </main>

  )
}

export default Login;
