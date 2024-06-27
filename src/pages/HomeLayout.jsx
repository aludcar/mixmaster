import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const value = "some value";
  return (
    <div>
      <Navbar />
      <section className="page">
        {navigation.state === "loading" ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{value}} />
        )}
      </section>
    </div>
  );
};

export default HomeLayout;
