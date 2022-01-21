import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const authSelector = useSelector((state) => state.Auths.isAuth);
  return (
    <>
      <Header />
      {!authSelector && <Auth />}
      {authSelector && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
