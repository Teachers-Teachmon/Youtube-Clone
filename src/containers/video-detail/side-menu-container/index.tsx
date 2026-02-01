import SideMenu from "@/components/ui/side-menu";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useSideMenuStore } from "@/stores/useSideMenuStore";
import { useEffect, useState } from "react";

function SideMenuContainer() {
  const navigate = useNavigate();
  const toggleSideMenu = useSideMenuStore(state => state.toggleIsOpen);
  const isOpen = useSideMenuStore(state => state.isOpen);
  const [classList, setClassList] = useState("");

  useEffect(() => {
    setClassList(isOpen ? "opened" : "");
  }, [isOpen]);

  return (
    <>
      <S.Base className={classList}>
        <S.Head>
          <S.Button onClick={() => toggleSideMenu()}>
            <img src="/icons/common/menuBurger.svg" width={26} />
          </S.Button>
          <S.Logo onClick={() => navigate("/")}>
            <img src="/assets/brand/youtube.svg" height={20} />
            <span id="country">KR</span>
          </S.Logo>
        </S.Head>
        <S.Body>
          <SideMenu isOpen />
        </S.Body>
      </S.Base>
      <S.Overlay className={classList} onClick={() => toggleSideMenu()} />
    </>
  );
}

export default SideMenuContainer;
