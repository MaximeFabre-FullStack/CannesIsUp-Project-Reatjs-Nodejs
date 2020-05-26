import React from "react";
import NavbarAdmin from "../Component/Navbar/NavbarAdmin/NavbarAdmin";
import NavbarAdherent from "../Component/Navbar/NavbarAdherent/NavbarAdherent";
import NavbarVisiteurs from "../Component/Navbar/NavbarVisiteurs/NavbarVisiteurs";

export function affichageNavbar() {
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");

  if (admin && uid && token) {
    return <NavbarAdmin />;
  } else if (uid && token) {
    return <NavbarAdherent />;
  } else {
    return <NavbarVisiteurs />;
  }
}
