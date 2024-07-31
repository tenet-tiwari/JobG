






import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill, RiSunLine, RiMoonLine } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import logo1 from './logo1.svg';
import logo3 from './logo3.svg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://jobg.onrender.com/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'} />;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <section className={`min-h-screen flex justify-center items-center ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div className="w-10/12 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-[324px] h-[224px] p-2 m-2 shadow-lg shadow-gray-700"
              src={logo1}
              alt="logo"
            />
            <h3 className={`p-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl m-2 font-serif ${isDarkMode ? 'bg-blue-950 text-gray-100' : 'bg-blue-500 text-white'} rounded-md`}>
              Login to your account
            </h3>
          </div>
          <div className={`flex justify-center space-x-4 border-[1px] ${isDarkMode ? 'border-gray-700 shadow-xl shadow-gray-700' : 'border-gray-300 shadow-md shadow-gray-300'} rounded-lg`}>
            <form
              className={`flex justify-center lg:w-1/2 m-2 p-3 border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-md ${isDarkMode ? 'shadow-md shadow-gray-700' : 'shadow-md shadow-gray-300'}`}
              onSubmit={handleLogin}
            >
              <div className="w-full m-2 p-2">
                <div className="m-2 p-1 flex flex-col">
                  <label className="m-1 p-1 text-lg font-bold">Login As</label>
                  <div className="flex justify-between">
                    <select
                      className={`my-2 p-2 w-full border-[1px] ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} rounded-md`}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="Employer">Employer</option>
                      <option value="Job Seeker">Job Seeker</option>
                    </select>
                    <div className={`flex justify-center items-center m-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      <FaRegUser />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="font-bold">Email Address</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-2 p-2 w-full border-[1px] ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} rounded-md`}
                      type="email"
                      placeholder="xyz@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={`font-bold flex justify-center items-center m-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      <MdOutlineMailOutline />
                    </div>
                  </div>
                </div>
                <div className="m-2 p-1 flex flex-col">
                  <label className="font-bold">Password</label>
                  <div className="flex justify-between">
                    <input
                      className={`my-2 p-2 w-full border-[1px] ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} rounded-md`}
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={`flex justify-center items-center m-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      <RiLock2Fill />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`shadow-md ${isDarkMode ? 'shadow-blue-950 bg-blue-950 text-gray-100' : 'shadow-blue-500 bg-blue-500 text-white'} text-center m-2 p-3 rounded-md border-[1px] ${isDarkMode ? 'border-blue-950 hover:text-blue-950 hover:bg-gray-100' : 'border-blue-500 hover:text-blue-500 hover:bg-gray-100'}`}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className={`shadow-md ${isDarkMode ? 'shadow-blue-950 bg-blue-950 text-gray-100' : 'shadow-blue-500 bg-blue-500 text-white'} text-center m-2 p-3 rounded-md border-[1px] ${isDarkMode ? 'border-blue-950 hover:text-blue-950 hover:bg-gray-100' : 'border-blue-500 hover:text-blue-500 hover:bg-gray-100'}`}>
                    <Link to={"/register"}>Register Now</Link>
                  </button>
                </div>
              </div>
            </form>
            <div className="w-1/2 m-2 h-full p-1 hidden md:flex md:justify-center md:items-end">
              <img
                className="w-[380px] h-[380px] flex items-end mb-5 mt-20 mr-5 rounded-full p-2 m-2 shadow-lg shadow-gray-70"
                src={logo3}
                alt="login"
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 flex items-center justify-center">
          <button onClick={toggleDarkMode} className="p-3 rounded-full shadow-lg bg-gray-800 text-gray-100 hover:bg-gray-700">
            {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;



