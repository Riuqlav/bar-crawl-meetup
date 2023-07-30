import React from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MainNavigation />
      <main className="flex-grow container mx-auto p-4">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
