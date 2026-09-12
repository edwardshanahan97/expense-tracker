import "./Header.css";
import { Calendar } from "lucide-react";
import { usePage } from "../../context/PageContext";
import { NavLink } from "react-router-dom";
import formatDate from "../../utils/formatDate";

const Header = () => {
  const { currentPage } = usePage();
  const date = formatDate(new Date());

  return (
    <header className="header">
      <h1 className="heading-1">{currentPage}</h1>

      <p className="header__date">
        <Calendar color="#64748b" size={16} strokeWidth={1.5} />

        <span>{date}</span>
      </p>

      <NavLink className="header__account" to="/settings">
        ED
      </NavLink>
    </header>
  );
};

export default Header;
