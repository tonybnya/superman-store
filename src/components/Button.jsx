import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g10 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-cantarell base-bold text-p4 uppercase">
          {children}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g10 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g10 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

// Define prop types
Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
