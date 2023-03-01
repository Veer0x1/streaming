import React, { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { auth } from "./firebase";
import {
  Feed,
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Form,
} from "./components";

const App = () => {
  // const navigate = useNavigate();

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const SignedInState = createContext(setIsUserSignedIn);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsUserSignedIn(true);
        // navigate("/feed");
      }
    });
  }, [setIsUserSignedIn]);

  console.log(isUserSignedIn);

  return (
    <React.StrictMode>
      <SignedInState.Provider value={setIsUserSignedIn}>
        <BrowserRouter>
          <Box sx={{ backgroundColor: "#000" }}>
            {!isUserSignedIn && (
              <>
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  
                </Routes>
              </>
            )}

            {isUserSignedIn && (
              <>
                <Navbar />
                <Routes>
                <Route path="/form" element={<Form />} />
                  <Route path="/feed" exact element={<Feed />} />
                  <Route path="/video/:id" element={<VideoDetail />} />
                  <Route path="/channel/:id" element={<ChannelDetail />} />
                  <Route path="/search/:searchTerm" element={<SearchFeed />} />
                  <Route path="/signin" element={<SignIn />} />
                </Routes>
              </>
            )}
          </Box>
        </BrowserRouter>
      </SignedInState.Provider>
    </React.StrictMode>
  );
};

export default App;
