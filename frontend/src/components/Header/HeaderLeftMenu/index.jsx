import React from "react";
import NavigationText from "./NavigationText";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/brand-logo.png";

export default function HeaderLeftMenu() {
  const navigate = useNavigate();

  function navigateHandler(url) {
    window.scrollTo(0, 0);
    navigate(url);
  }

  return (
    <div className="header__container">
      <img src={logo} height={90} width={150} alt="city sofa mart" onClick={() => navigateHandler("/") } />
      <NavigationText text={"Home"} url="/" />
      <NavigationText text={"New Arrivals"} url="/newarrivals" />
      <NavigationText text={"All Products"} url="/shop" />
    </div>
  );
}
