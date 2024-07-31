





import React, { useContext, useState } from "react";
import { FaRegUser, FaPencilAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill, RiSunLine, RiMoonLine } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import logo4 from "./logo4.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section
        className={`min-h-screen flex justify-center items-center ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="w-10/12 justify-center">
          <div className="flex flex-col items-center">
            {/* <img
              className="rounded-full w-[324px] h-[224px] p-2 m-2"
              src={logo}
              alt="logo"
            /> */}
            <h3
              className={`p-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl m-1 font-serif ${
                isDarkMode
                  ? "bg-blue-950 text-gray-100"
                  : "bg-blue-950 text-gray-100"
              } rounded-md`}
            >
              Create a new account
            </h3>
          </div>
          <div className="flex h-auto justify-center space-x-4 border-[1px] border-slate-300 shadow-md shadow-slate-400">
            <form
              className="w-full md:w-1/2 h-auto m-1 p-1 border-2 border-slate-200 rounded-md shadow-md shadow-slate-400"
              onSubmit={handleRegister}
            >
              <div className="m-2 my-0 p-2">
                <div className="m-1 my-0 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Register As</label>
                  <div className="flex justify-between">
                    <select
                      className={`my-1 p-2 w-full border-[1px] ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800 text-gray-100"
                          : "border-slate-200 bg-gray-100 text-gray-900"
                      } rounded-md`}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="Employer">Employer</option>
                      <option value="Job Seeker">Job Seeker</option>
                    </select>
                    <div className="flex justify-center items-center m-3">
                      <FaRegUser />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Name</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-1 p-1 w-full border-[1px] ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800 text-gray-100"
                          : "border-slate-200 bg-gray-100 text-gray-900"
                      } rounded-md`}
                      type="text"
                      placeholder="Ayush"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex justify-center items-center m-3">
                      <FaPencilAlt />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Email Address</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-1 p-1 w-full border-[1px] ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800 text-gray-100"
                          : "border-slate-200 bg-gray-100 text-gray-900"
                      } rounded-md`}
                      type="email"
                      placeholder="xyz@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex justify-center items-center m-3">
                      <MdOutlineMailOutline />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Phone Number</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-1 p-1 w-full border-[1px] ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800 text-gray-100"
                          : "border-slate-200 bg-gray-100 text-gray-900"
                      } rounded-md`}
                      type="number"
                      placeholder="12345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="flex justify-center items-center m-3">
                      <FaPhoneAlt />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Password</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-1 p-1 w-full border-[1px] ${
                        isDarkMode
                          ? "border-gray-700 bg-gray-800 text-gray-100"
                          : "border-slate-200 bg-gray-100 text-gray-900"
                      } rounded-md`}
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-center items-center m-3">
                      <RiLock2Fill />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`shadow-md shadow-blue-950 text-center m-2 p-3 rounded-md border-[1px] ${
                      isDarkMode
                        ? "border-blue-950 hover:text-blue-950 hover:bg-gray-100 bg-blue-950 text-gray-100"
                        : "border-blue-950 hover:text-blue-950 hover:bg-gray-100 bg-blue-950 text-gray-100"
                    } flex flex-col`}
                    type="submit"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`shadow-md shadow-blue-950 text-center m-2 p-3 rounded-md border-[1px] ${
                      isDarkMode
                        ? "border-blue-950 hover:text-blue-950 hover:bg-gray-100 bg-blue-950 text-gray-100"
                        : "border-blue-950 hover:text-blue-950 hover:bg-gray-100 bg-blue-950 text-gray-100"
                    } flex flex-col`}
                  >
                    <Link to={"/login"}>Login Now</Link>
                  </button>
                </div>
              </div>
            </form>
            <div className="w-1/2 m-2 h-auto mb-48 size-6 p-1 hidden md:flex md:justify-center md:items-end">
              <img
                className="w-[380px] h-[380px] flex items-end mb-0"
                src={logo4}
                alt="login"
              />
            </div>
            {/* <div
              className={`absolute bottom-4 right-4 z-50 ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              <button
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-blue-950 text-gray-100"
                    : "bg-gray-100 text-gray-900"
                }`}
                onClick={toggleDarkMode}
              >
                {darkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
              </button>
            </div> */}
            <div className="fixed bottom-4 right-4 flex items-center justify-center">
          <button onClick={toggleDarkMode} className="p-3 rounded-full shadow-lg bg-gray-800 text-gray-100 hover:bg-gray-700">
            {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
          </button>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

