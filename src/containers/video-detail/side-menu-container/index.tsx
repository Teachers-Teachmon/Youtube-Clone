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
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(window.scrollY);
    setClassList(isOpen ? "opened" : "");
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <S.Base className={classList} top={top}>
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
          <SideMenu isOpen position="absolute" />
        </S.Body>
      </S.Base>
      <S.Overlay className={classList} onClick={() => toggleSideMenu()} />
    </>
  );
}

export default SideMenuContainer;
