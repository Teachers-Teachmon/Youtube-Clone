import Header from "@/components/ui/header";
import SideMenu from "@/components/ui/side-menu";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
