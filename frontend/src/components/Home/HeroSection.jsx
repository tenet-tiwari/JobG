import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="w-auto flex flex-col justify-center items-center m-5 p-5">
        <div className=" bg-slate-100 rounded-md space-x-5 w-auto flex h-2/3 justify-center m-4">
          <div className="w-1/2 flex justify-center items-center">
             <div className=" flex flex-col items-center  m-3 p-1">
            <h1 className=" text-lg md:text-xl lg:text-4xl font-bold w-full m-3">"Go confidently in the direction of your dreams!"
            </h1>
            <h1 className=" animate-bounce pr-3 mr-3 text-sm sm:text-lg md:text-xl  font-bold text-right w-full"> - Henry David Thoreau</h1>
            
            <p className=" text-sm sm:text-lg md:text-xl font-semibold mt-9">
            Starting a new job can be nerve-racking, but it's also exciting. You're embarking on a new future, positioning yourself to write a fresh story on a clean slate.
            </p>
          </div></div>
          <div className="w-1/2 p-8 hidden md:flex">
            <img className="rounded-3xl animate-pulse " src="https://img.freepik.com/free-vector/laptop-isometric-hiring-illustration_23-2148085112.jpg?t=st=1720441306~exp=1720444906~hmac=da4528d97fde13b6fdcd88e103bb189ac627a86ded0718c73f266edbb6a5fd55&w=740" alt="hero" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex justify-around w-full mt-10 pt-3">
          {details.map((element) => {
            return (
              <div className=" bg-slate-50 m-2 p-2 border-[1px] border-slate-400 rounded-md flex justify-center items-center space-x-4 shadow-lg shadow-blue-950" key={element.id}>
                <div className="text-blue-950 hover:animate-spin ">{element.icon}</div>
                <div className="">
                  <p className="font-bold">{element.title}</p>
                  <p className="font-bold">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;





// import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// const HeroSection = ({ isDarkMode }) => {
//   const details = [
//     {
//       id: 1,
//       title: "1,23,441",
//       subTitle: "Live Job",
//       icon: <FaSuitcase />,
//     },
//     {
//       id: 2,
//       title: "91,220",
//       subTitle: "Companies",
//       icon: <FaBuilding />,
//     },
//     {
//       id: 3,
//       title: "2,34,200",
//       subTitle: "Job Seekers",
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "1,03,761",
//       subTitle: "Employers",
//       icon: <FaUserPlus />,
//     },
//   ];

//   return (
//     <div className={`w-auto flex flex-col justify-center items-center m-5 p-5 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-slate-100 text-gray-900'}`}>
//       <div className={`w-full flex flex-col md:flex-row justify-center items-center rounded-md space-x-5 h-2/3 m-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="w-full md:w-1/2 flex justify-center items-center">
//           <div className="flex flex-col items-center m-3 p-1">
//             <h1 className={`text-lg md:text-xl lg:text-4xl font-bold w-full m-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//               "Go confidently in the direction of your dreams!"
//             </h1>
//             <h1 className={`animate-bounce pr-3 mr-3 text-sm sm:text-lg md:text-xl font-bold text-right w-full ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               - Henry David Thoreau
//             </h1>
//             <p className={`text-sm sm:text-lg md:text-xl font-semibold mt-9 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
//               Starting a new job can be nerve-racking, but it's also exciting. You're embarking on a new future, positioning yourself to write a fresh story on a clean slate.
//             </p>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 p-8 hidden md:flex">
//           <img
//             className="rounded-3xl"
//             src="https://img.freepik.com/free-vector/laptop-isometric-hiring-illustration_23-2148085112.jpg?t=st=1720441306~exp=1720444906~hmac=da4528d97fde13b6fdcd88e103bb189ac627a86ded0718c73f266edbb6a5fd55&w=740"
//             alt="hero"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 md:flex justify-around w-full mt-10 pt-3">
//         {details.map((element) => (
//           <div
//             className={`m-2 p-2 border-[1px] rounded-md flex justify-center items-center space-x-4 shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100 shadow-gray-700' : 'bg-slate-50 border-slate-400 text-gray-900 shadow-blue-950'}`}
//             key={element.id}
//           >
//             <div className={`text-blue-950 hover:animate-spin ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
//               {element.icon}
//             </div>
//             <div>
//               <p className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{element.title}</p>
//               <p className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{element.subTitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

