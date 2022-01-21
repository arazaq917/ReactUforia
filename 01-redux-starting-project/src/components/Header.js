import { useSelector, useDispatch } from "react-redux";
import { logAuth } from "../store/auth";
import classes from "./Header.module.css";
const Header = () => {
  const isAuth = useSelector((state) => state.Auths.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logAuth.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
