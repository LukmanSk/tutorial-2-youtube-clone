import React from "react";

const LoginScreen = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div
        className="text-content flex flex-col items-center 
      bg-[#F8F8F8] py-10 px-4 rounded-lg shadow-lg border"
      >
        <div className="w-[7rem] ">
          <img
            className="w-full"
            src="https://i.imgur.com/H1QkVat.png"
            alt=""
          />
        </div>
        <button className="bg-[#606060] rounded-lg text-white py-2 px-10 mt-4 hover:bg-white hover:outline hover:outline-1 hover:outline-[#606060] hover:text-[black] transition-all duration-[.3s] ">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
