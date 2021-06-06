import { Button } from "antd";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  let [sign, setSign] = useState(null);

  if (sign === "in") return <SignIn setSign={setSign} />;
  if (sign === "up") return <SignUp setSign={setSign} />;

  return (
    <div className="loginPage">
      <h1 className="welcome">Welcome in my task!</h1>
      <Button
        className="button"
        type="primary"
        htmlType="submit"
        onClick={() => setSign("in")}
      >
        {" "}
        Sign in{" "}
      </Button>
      <Button
        className="button"
        type="primary"
        htmlType="submit"
        onClick={() => setSign("up")}
      >
        {" "}
        Sign up{" "}
      </Button>
    </div>
  );
}

export default App;
