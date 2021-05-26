import { authSelectors } from "../auth";
import AutenNav from "./AutenNav";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";

const header = {
  link: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    borderBottom: "1px solid #2A363B",
    alignItems: "center",
  },
};
export default function Appbar() {
  const isLogeedIn = useSelector(authSelectors.getIsAuthrnticated);
  return (
    <header style={header.link}>
      <Navigation />

      {isLogeedIn ? <UserMenu /> : <AutenNav />}
    </header>
  );
}
