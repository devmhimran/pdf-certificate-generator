import React, { useState } from "react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-screen bg-[#39a78e] flex items-center">
      <div className=" container mx-auto py-10">
        <div class="flex flex-col w-2/6 mx-auto bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
          <h1 className="text-xl font-bold mb-2">Login</h1>
          <form>
            <div>
              <input
                type="email"
                class="py-3 border px-4 my-2 block w-full border-gray-200 rounded-md outline-none text-sm focus:border-green-700 focus:ring-green-700 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                class="py-3 border px-4 my-2 block w-full border-gray-200 rounded-md outline-none text-sm focus:border-green-700 focus:ring-green-700 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your email"
                required
              />
              <Link
                className="cursor-pointer font-semibold text-[#39a78e]"
                to="/"
              >
                <small>Forgot password?</small>
              </Link>
              <span>
                <AiOutlineEyeInvisible
                  className={`absolute right-2 top-3 text-xl cursor-pointer ${
                    show ? "block" : "hidden"
                  }`}
                  onClick={() => setShow(false)}
                />
                <AiFillEye
                  className={`absolute right-2 top-3 text-xl cursor-pointer ${
                    show ? "hidden" : "block"
                  }`}
                  onClick={() => setShow(true)}
                />
              </span>
            </div>
            <div>
              <button
                type="button"
                class="py-3 mt-4 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-700 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
