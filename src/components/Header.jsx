import React, { useEffect } from "react";
import { IMAGE_LOGO } from "../config.js";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firbase.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        //signOut successful
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="flex justify-around border shadow-md h-20 items-center">
        <img className="w-[50px] h-[50px] " src={IMAGE_LOGO} alt="" />

        <ul className="flex  text-lg  font-medium gap-10 justify-center items-center  ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="about">About </Link>
          </li>
          <li>
            <Link to="contact">Contact </Link>
          </li>
        </ul>

        <Button variant="contained" onClick={handlesignout}>
          SignOut
        </Button>
      </div>
    </>
  );
};

export default Header;
