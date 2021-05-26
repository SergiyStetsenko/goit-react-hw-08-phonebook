import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../auth";
import Appbar from "../AppBar";
import { Switch } from "react-router";
import PrivateRoute from "../../components/PrivateRoute";
import PublicRoute from "../PublicRoute";

const HomeView = lazy(() => import("../../view/Homeview"));
const RegisterView = lazy(() => import("../../view/RegisterView"));
const LoginView = lazy(() => import("../../view/LoginView"));
const ContactsView = lazy(() => import("../../view/ContactsView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Appbar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </>
  );
}
