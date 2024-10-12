import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function SendMoney() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const userId = searchParams.get("userId");
  const name = searchParams.get("name");
  console.log(userId, name);

  // useEffect(() => {}, []);

  async function handleTransfer() {
    if (!amount) return;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          to: userId,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setMessage(response.data.msg);
      setAmount("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.msg);
      console.log(error);
    }
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-96 rounded-lg bg-emerald-950 px-8 py-12 shadow-md shadow-black">
        <p className="mb-14 text-center text-4xl font-bold">Send Money</p>
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-lg">
            {name[0].toUpperCase()}
          </div>
          <p className="text-2xl font-semibold">{name}</p>
        </div>
        <p className="mt-6 text-xl">Amount (in Rs)</p>
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => {
            e.preventDefault();
            const value = e.target.value;
            if (!value) return;
            setAmount(value);
            console.log(value);
          }}
          className="mt-4 w-full rounded-xl px-6 py-3 text-black"
        />
        <div className="mt-8 w-full">
          <Button text={"Initiate Transfer"} onClick={handleTransfer} />
        </div>
      </div>

      <p className="mt-16">{message ? message : ""}</p>
    </div>
  );
}

export default SendMoney;
