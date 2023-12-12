import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
