import { NavLink } from "react-router-dom";
import { authSelectors } from "../auth";
import { useSelector } from "react-redux";

const style = {
  home: {
    textDecoration: "none",
    padding: 20,
    fontWeight: 700,
    fontSize: 20,
    color: "black",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthrnticated);
  return (
    <div>
      <NavLink exact to="/" style={style.home} activeStyle={style.activeLink}>
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={style.home}
          activeStyle={style.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </div>
  );
}
