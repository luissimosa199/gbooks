import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link
    to="/">
      <img
        className={className}
        src="https://live.staticflickr.com/65535/52277911219_e02d4ef9cc_n.jpg"
        alt="Gbooks Logo"
      />
    </Link>
  );
};

export default Logo;
