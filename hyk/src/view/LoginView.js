import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../auth";

const style = {
  form: {
    width: 300,
    paddingLeft: 20,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  button: {
    border: " black",
    borderRadius: 10,
    padding: 10,
    marginLeft: 113,
  },
  formeReg: {
    paddingLeft: 128,
    color: "#E84A5F",
  },
};
export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(authOperations.logIn({ email, password }));

      setEmail("");
      setPassword("");
    },
    [dispatch, email, password]
  );

  return (
    <>
      <h2 style={style.formeReg}>Логин</h2>
      <form onSubmit={handleSubmit} style={style.form} autoComplete="on">
        <label style={style.label}>
          Почта :
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={style.label}>
          Пароль :
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button style={style.button} type="submit">
          Войти
        </button>
      </form>
    </>
  );
}
