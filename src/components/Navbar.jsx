import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../utils/constants.js";
import SearchBar from "./SearchBar";

import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

const Navbar = () => {
  // const SignedInState = useContext(setIsUserSignedIn);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/feed">
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <SearchBar></SearchBar>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Sign Out
      </button>
    </Stack>
  );
};

export default Navbar;
