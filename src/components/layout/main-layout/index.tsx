import Header from "@/components/ui/header";
import { Outlet } from "react-router-dom";
import * as S from "./style";

function MainLayout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
}

export default MainLayout;
