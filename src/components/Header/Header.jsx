import "./Header.css";
import { Calendar } from "lucide-react";
import { usePage } from "../../context/PageContext";
import { NavLink } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { useFinance } from "../../context/FinanceContext";

const Header = () => {
  const { currentPage } = usePage();
  const { finance } = useFinance();
  const date = formatDate(new Date());

  return (
    <header className="header">
      <h1 className="heading-1">{currentPage}</h1>

      <p className="header__date">
        <Calendar color="#64748b" size={16} strokeWidth={1.5} />

        <span>{date}</span>
      </p>

      <NavLink className="header__account" to="/settings">
        {finance ? finance.name.slice(0, 2) : "?"}
      </NavLink>
    </header>
  );
};

export default Header;
