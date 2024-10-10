import trailer from "../assets/images/home-trailer-image.png";

const TrailerHome = () => {
  return (
    <div className="container py-10">
      <a href="https://www.youtube.com/watch?v=yP7J0rlFkrg" target="_blank">
        <img src={trailer} alt="Man Of Steel trailer image" />
      </a>
    </div>
  )
}

export default TrailerHome;
