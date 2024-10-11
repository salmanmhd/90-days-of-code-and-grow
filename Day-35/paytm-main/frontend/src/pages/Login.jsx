import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthRedirect from "../components/AuthRedirect";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center rounded-lg border border-gray-600 bg-black py-10 shadow-lg">
        <Heading
          title={"Sign In"}
          subtitle={"Enter your credentials to access to your account"}
        />
        <div className="w-full">
          <form className="flex flex-col px-7" onSubmit={handleSubmit}>
            <Input
              label="Email"
              placeholderText={"john@example.com"}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              placeholderText={"**********"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Sign Up" />
          </form>
          <AuthRedirect
            text={"Don't have an account?"}
            redirect={"/signup"}
            redirectText={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
