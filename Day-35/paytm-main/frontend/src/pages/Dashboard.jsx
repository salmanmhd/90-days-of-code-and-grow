import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import UserItems from "../components/UserItems";
function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSeacrh] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/bulk?filter=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data.users);
      setUsers(response.data.users);
      console.log("submitted");
    }

    fetchUser();
  }, [search]);

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
          ₹{balance ? balance.toFixed(2) : "00.00"}
        </span>
      </div>
      <div className="px-10">
        <div className="my-8 text-3xl">Users</div>
        <input
          type="text"
          className="mb-7 w-full rounded-lg p-2 text-black placeholder:text-lg"
          placeholder="Search users..."
          onChange={(e) => {
            e.preventDefault();
            setSeacrh(e.target.value);
          }}
        />
        {users.map((user) => (
          <UserItems user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
