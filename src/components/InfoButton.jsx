import { NavLink } from 'react-router-dom';

const InfoButton = () => {
  return (
    <button className="w-8 h-8 rounded-full bg-[#062A5A] text-white hover:scale-110">
      <NavLink>
        <i className="fa-solid fa-info text-white"></i>
      </NavLink>
    </button>
  )
}

export default InfoButton;
