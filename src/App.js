import React from "react";
import styled from "styled-components";
// import {
//   Routes,
//   Route,
//   Link } from "react-router-dom";
// import Header from "./components/Header";

import Sidebar from "./SideNav";

// import index from "./pages/main";
// import cocktail from "./pages/cocktail";
// import drink from "./pages/drink";
// import Game from "./pages/Game";



function App() {
    return(
    <Center>
      <div>
        <Sidebar/>
      </div>
      <div>
        <p>아야야
        </p>
        <p>
          오우쮓~
        </p>
      </div>
      {/* <Center> */}
          {/* <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/mylist" element={drink} />
            <Route path="/likedlist" element={cocktail} />
            <Route path="/setting" element={index} />
          </Routes> */}
        {/* </Center> */}
      </Center>
      )
}

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

export default App;