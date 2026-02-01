import type { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import * as S from './style';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <S.ContentArea>
        <Sidebar />
        <S.Main>{children}</S.Main>
      </S.ContentArea>
    </>
  )
}

export default Layout;