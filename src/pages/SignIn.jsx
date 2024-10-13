import bg from "../assets/images/bg-login-signup.png";

const SignIn = () => {
  return (
    <main
      className="relative overflow-hidden min-h-screen bg-cover bg-center flex flex-col justify-center items-center mx-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{backgroundImage: `url(${bg})`}}
      ></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-8xl">Login Page</h1>
      </div>
    </main>
  )
}

export default SignIn;
