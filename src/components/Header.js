import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();

  const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
  const isAuth = useSelector(selectIsAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout(undefined));
  };

  return (
    <header className={classes.header}>
      <h1>Redux Counter using Redux Toolkit</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
