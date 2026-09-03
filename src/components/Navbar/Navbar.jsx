import { Home, CircleArrowUp, CircleArrowDown, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        ExpenseTracker
      </NavLink>

      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            to="/"
            className={`navbar__link ({ isActive }) => (isActive ? 'active' : 'inactive')`}
          >
            <Home strokeWidth={1.5} />
            <span>Overview</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/income"
            className={`navbar__link ({ isActive }) => (isActive ? 'active' : 'inactive')`}
          >
            <CircleArrowUp strokeWidth={1.5} />
            <span>Income</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/expenses"
            className={`navbar__link ({ isActive }) => (isActive ? 'active' : 'inactive')`}
          >
            <CircleArrowDown strokeWidth={1.5} />
            <span>Expenses</span>
          </NavLink>
        </li>
        <li className="navbar__item navbar__settings">
          <NavLink
            to="/settings"
            className={`navbar__link ({ isActive }) => (isActive ? 'active' : 'inactive')`}
          >
            <Settings strokeWidth={1.5} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
