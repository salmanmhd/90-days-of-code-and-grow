import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthRedirect from "../components/AuthRedirect";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !username || !password) {
      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      {
        username,
        password,
        firstName,
        lastName,
      },
    );
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
    console.log("submitted");
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center rounded-lg border border-gray-600 bg-black py-10 shadow-lg">
        <Heading
          title={"Sign Up"}
          subtitle={"Enter your information to create an account"}
        />
        <div className="w-full">
          <form className="flex flex-col px-7" onSubmit={handleSubmit}>
            <Input
              label="First Name"
              placeholderText={"John"}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last Name"
              placeholderText={"Doe"}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            text={"Already have an account?"}
            redirect={"/login"}
            redirectText={"Sign In"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
