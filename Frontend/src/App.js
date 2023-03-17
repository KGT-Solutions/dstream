import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Upload from "./pages/Upload";
import NavBar from "./components/NavBar";



function App() {
  const [currentAddress, setCurrentAddress] = useState(null);
  
  // const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [player, setPlayer] = useState("");
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchConnectedAccount() {
      const x = await window.ethereum.request({ method: "eth_accounts" });
      setCurrentAddress(x && x[0]);
    }
    fetchConnectedAccount();
    listenToAccountsChange();
  }, []);

  function listenToAccountsChange() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setCurrentAddress(accounts[0]);
        } else {
          setCurrentAddress(null);
        }
      });
    }
  }


  // const accountProps = { currentAddress };

  return (
    <div className="App">
      <NavBar />
      <Box sx={{ paddingTop: "64px" }}>
        <Routes>
          <Route
            path="/"
            element={<Home setPlayer={setPlayer} setTitle={setTitle} />}
          />
          <Route path="upload" element={<Upload />} />
          <Route
            path="/player"
            element={
              <Player
                player={"https://www.youtube.com/watch?v=G7L4YzGAvMA"}
                title={title}
                Comments={Comments}
                setComments={setComments}
              />
            }
          />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
