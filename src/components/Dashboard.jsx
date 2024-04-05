import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-around ">
      <div className="w-[25% bg-black text-white p-2 gap-3 flex flex-col">
        <div className=" bg-rose-200 p-4">Creative-ink</div>
        <div className=" bg-pink-500 p-4">Dashboard</div>
        <div className="">Product</div>
        <div className="">Banners</div>
        <div className="">Popup</div>
      </div>
    </div>
  );
};

export default Dashboard;
