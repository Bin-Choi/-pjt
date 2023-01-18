import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
// import SidebarItem from "./SidebarItem";


function SideNav() {
  // const menus = [
  //   { name: "game", path: "/game"},
  //   { name: "drink", path: "/drink"},
  //   { name: "shot"},
  //   { name: "cocktail", path: "/cocktail"}
  // ]

  return (

    <Side>{/*네비 최상위 태그*/}
      <Button><img alt="game" src="img/game.png"/></Button>{/*네비 버튼*/}
      <Button><img alt="drink" src="img/drink.png"/></Button>
      <Button><img alt="shot" src="img/shot.png"/></Button>
      <Button><img alt="cocktail" src="img/cocktail.png"/></Button>
    </Side>
  );
}


const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: space-between;
  width: 125px;
  height: 600px;
  background: #004680;
`
const Button = styled.div`
align-items: center ;
justify-content: center;
width: 100px;
height: 100px;
`
// const Menu = styled.div`
//   margin-top: 30px;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
// `

export default SideNav;