import { useEffect, useState } from "react";

// import PageNav from "../components/PageNav";
// import { useAuth } from "./FakeAuthContext";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { login, logout } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  // const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  function handleSubmit(e) {
    e.preventDefault();
    // login();
    if (email && password) dispatch(login(email, password));
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/trails", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  return (
    <div>
      {/* <PageNav /> */}
      <form className="px-auto pt-20" onSubmit={handleSubmit}>
        <div className="m-2">
          <label htmlFor="email">信箱（帳號）</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="m-2">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">登入</Button>{" "}
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
