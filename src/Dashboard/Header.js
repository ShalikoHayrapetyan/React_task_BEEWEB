import { useDispatch, useSelector } from "react-redux";
import { auth } from "../App";
import { signUp } from "../Redux/action";

function Header() {
  const userEmail = useSelector((state) => state.authReducer.userEmail);
  const dispatch = useDispatch();
  const logOut = () => {
    auth.signOut();
    dispatch(signUp());
  };

  return (
    <div className="header">
      <div>
        <p className="email">Email: {userEmail}</p>
        <button className="btn" onClick={logOut}>
          {" "}
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
