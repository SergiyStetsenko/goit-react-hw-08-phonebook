import { NavLink } from "react-router-dom";
import React from "react";

const style = {
  regis: {
    textDecoration: "none",
    padding: 20,
    marginRight: 20,
    fontWeight: 700,
    fontSize: 20,
    color: "black",
  },
  login: {
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

const AutenNav = () => (
  <div>
    <NavLink to="/register" style={style.regis} activeStyle={style.activeLink}>
      Регистрация
    </NavLink>
    <NavLink to="/login" style={style.login} activeStyle={style.activeLink}>
      Логин
    </NavLink>
  </div>
);
export default AutenNav;
