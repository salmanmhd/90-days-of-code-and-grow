import { ChevronRight, CircleHelp } from "lucide-react";

function Card() {
  const title = "Amount Pending";
  const color = "bg-[#ffffff]";
  const amount = "92,312.20";
  const orderCount = 23;
  return (
    <div className={`${color} rounded-sm p-6 shadow-md`}>
      <div className="mb-4 flex items-center space-x-3 text-[#525067]">
        <p>{title}</p>
        <p>
          <CircleHelp color="#525067" size={19} />
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold">₹{amount}</p>
        <div className="flex font-medium text-[#146ec6] underline underline-offset-2">
          <p>{orderCount} orders</p>
          {<ChevronRight color="#146ec6" size={25} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
