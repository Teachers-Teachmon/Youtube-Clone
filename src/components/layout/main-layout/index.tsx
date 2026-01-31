import Header from "@/components/ui/header";
import SideMenu from "@/components/ui/side-menu";
import { Outlet } from "react-router-dom";
import * as S from "./style";

function MainLayout() {
  return (
    <>
      <Header />
      <S.Main>
        <SideMenu />
        <Outlet />
      </S.Main>
    </>
  );
}

export default MainLayout;
