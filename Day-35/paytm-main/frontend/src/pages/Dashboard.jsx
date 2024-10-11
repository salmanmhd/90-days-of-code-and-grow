import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import UserItems from "../components/UserItems";
function Dashboard() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  useEffect(() => {
    async function fetchDetails() {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response || !response.data) {
        console.log("Error: Invalid response data");
        return;
      }
      setBalance(response.data.balance);
      setName(response.data.firstName);
      console.log("fetching data");
    }

    fetchDetails();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-950 to-indigo-950">
      <Navigation />
      <div className="ml-10 mt-10 flex h-20 w-96 items-center justify-center rounded-lg border border-emerald-600 text-3xl font-bold">
        Your Balance:{" "}
        <span className="text-green-400">
          {" "}
          ₹{balance ? Math.round(balance) : 500}
        </span>
      </div>
      <div className="px-10">
        <div className="my-8 text-3xl">Users</div>
        <input
          type="text"
          className="mb-7 w-full rounded-lg p-2 placeholder:text-lg"
          placeholder="Search users..."
        />
        <UserItems />
        <UserItems />
      </div>
    </div>
  );
}

export default Dashboard;

// TODO: fix the amount format
