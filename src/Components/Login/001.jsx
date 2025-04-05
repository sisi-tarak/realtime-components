import React from "react";
import { Google, GitHub } from "@mui/icons-material";

import loginImg from "../Assets/bg2.jpg";

const SimpleLogIn = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">WEBORTEX.</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg cursor-pointer hover:shadow-xl px-6 py-2 relative flex items-center">
              <GitHub className="mr-2" /> GitHub
            </p>
            <p className="border shadow-lg cursor-pointer hover:shadow-xl px-6 py-2 relative flex items-center">
              <Google className="mr-2" /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input className="border relative bg-gray-100 p-2" type="text" />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>

          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>

          <p className="flex items-center mt-2 relative text-cyan-900">
            <input
              className="form-checkbox cursor-pointer mr-2"
              type="checkbox"
              value=""
            />
            <label>Remember Me</label>
          </p>

          <p className="text-center mt-8 relative">
            Not a member?{" "}
            <a
              href="/"
              className="cursor-pointer text-teal-900 hover:text-teal-700"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SimpleLogIn;
