import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../auth";
import avatar from "../UserMenu/unnamed.jpg";

const style = {
  continue: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    marginRight: 20,
    color: "#E84A5F",
    fontWeight: 700,
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 0,
  },
  button: {
    border: " black",
    borderRadius: 10,
    padding: 10,
  },
  mail: {
    color: "rgb(2, 74, 95)",
    marginRight: 20,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
};
export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  const name = useSelector(authSelectors.getUsername);
  const onLogOut = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch]
  );

  return (
    <div style={style.continue}>
      <img src={avatar} alt={name} width="35" />
      <p style={style.name}>Welcome, {name}: </p>
      <p style={style.mail}>{email}</p>
      <button style={style.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
