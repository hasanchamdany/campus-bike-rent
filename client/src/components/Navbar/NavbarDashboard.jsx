import React from "react";

const NavbarDashboard = () => {
  return (
    <>
      <div className="justify-center pt-10 mx-60">
        <div className="py-0 bg-blue-dark mx-60 px-0 flex rounded-[15px]">
          <a href="/admin/bike" className="flex-1">
            <button
              className="flex-1 py-2 px-14 bg-blue-dark hover:bg-c-yellow hover:text-blue-dark rounded-[15px] w-full focus:bg-c-yellow focus:text-blue-dark"
              
            >
              BIKE
            </button>
          </a>
          <a href="/admin/member" className="flex-1">
            <button
              className="flex-1 py-2 px-14 bg-blue-dark hover:bg-c-yellow hover:text-blue-dark rounded-[15px] w-full focus:bg-c-yellow focus:text-blue-dark"
              
            >
              MEMBER
            </button>
          </a>
          <a
            href="/admin/rent"
            className="flex-1 focus:bg-c-yellow focus:text-blue-dark"
          >
            <button
              className="flex-1 py-2 px-14 bg-blue-dark hover:bg-c-yellow hover:text-blue-dark rounded-[15px] w-full focus:bg-c-yellow focus:text-blue-dark"
              
            >
              RENT
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;
