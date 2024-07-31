import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className=" text-center bg-slate-500 flex p-3 m-3 flex-col">
      <div>&copy; All Rights Reserved By Ayush Tiwari-2024.</div>
      <div className="flex justify-around ">
        <Link className="animate-bounce" to={"https://facebbok.com/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link className="animate-bounce" to={"https://www.youtube.com/"} target="_blank">
          <FaYoutube />
        </Link>
        <Link className="animate-bounce" to={"https://www.linkedin.com/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link className="animate-bounce" to={"https://www.instagram.com/?hl=en"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;




