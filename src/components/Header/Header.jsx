import "./Header.css";
import { Calendar } from "lucide-react";
import { usePage } from "../../context/PageContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { currentPage } = usePage();
  const dateObj = new Date();

  const month = dateObj
    .toLocaleString("default", { month: "long" })
    .slice(0, 3);
  const year = dateObj.getFullYear();
  const day = dateObj.getDate();
  const nthNumber = (number) => {
    if (number > 3 && number < 21) {
      return "th";
    }

    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const date = `${day}${nthNumber(day)} ${month}, ${year}`;

  return (
    <header className="header">
      <div className="header__group">
        {/* <p className="header__message">Welcome back, Edward</p> */}

        <h1 className="heading-1">{currentPage}</h1>

        <p className="header__date">
          <Calendar color="#64748b" size={16} strokeWidth={1.5} />

          <span>{date}</span>
        </p>

        <NavLink className="header__account" to="/settings">
          ED
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
