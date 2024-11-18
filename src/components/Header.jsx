import React from "react";
import { IMAGE_LOGO } from "../config.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-around border shadow-md h-20 items-center">
        <img className="w-[50px] h-[50px] " src={IMAGE_LOGO} alt="" />

        <ul className="flex  text-lg  font-medium gap-10 justify-center items-center  ">
          <li>
            <Link></Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="">Contact </Link>
          </li>
        </ul>

        <Button variant="contained">SignOut</Button>
      </div>
    </>
  );
};

export default Header;
