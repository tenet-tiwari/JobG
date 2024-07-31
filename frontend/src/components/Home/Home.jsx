import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;




// import React, { useContext, useState } from "react";
// import { Context } from "../../main";
// import { Navigate } from "react-router-dom";
// import HeroSection from "./HeroSection";
// import HowItWorks from "./HowItWorks";
// import PopularCategories from "./PopularCategories";
// import PopularCompanies from "./PopularCompanies";
// import { RiSunLine, RiMoonLine } from "react-icons/ri";

// const Home = () => {
//   const { isAuthorized } = useContext(Context);
//   const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode by default

//   if (!isAuthorized) {
//     return <Navigate to={"/login"} />;
//   }

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <>
//       <section className={`homePage page ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
//       <HeroSection isDarkMode={isDarkMode} />

//       <HowItWorks isDarkMode={isDarkMode} />

//       <PopularCategories isDarkMode={isDarkMode} />

//       <PopularCompanies isDarkMode={isDarkMode} />

//         <div className="fixed bottom-4 right-4 flex items-center justify-center">
//           <button onClick={toggleDarkMode} className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}>
//             {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


