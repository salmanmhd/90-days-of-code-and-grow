import Button from "../components/Button";

function SendMoney() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-emerald-950 px-8 py-12 shadow-md shadow-black">
        <p className="mb-14 text-center text-4xl font-bold">Send Money</p>
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-lg">
            U
          </div>
          <p className="text-2xl font-semibold">Friend's Name</p>
        </div>
        <p className="mt-6 text-xl">Amount (in Rs)</p>
        <input
          type="text"
          placeholder="Enter Amount"
          className="mt-4 w-full rounded-xl px-6 py-3 text-black"
        />
        <div className="mt-8 w-full">
          <Button text={"Initiate Transfer"} />
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
