import SearchBar from "@/components/ui/search-bar";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useSideMenuStore } from "@/stores/useSideMenuStore";

function Header() {
  const navigate = useNavigate();
  const toggleSideMenu = useSideMenuStore(state => state.toggleIsOpen);

  return (
    <div className="header">
      <S.Base>
        <S.Section>
          <S.Button onClick={() => toggleSideMenu()}>
            <img src="/assets/menuBurger.svg" width={26} />
          </S.Button>
          <S.Logo onClick={() => navigate("/")}>
            <img src="/assets/youtube.svg" height={20} />
            <span id="country">KR</span>
          </S.Logo>
        </S.Section>
        <S.Section>
          <SearchBar />
        </S.Section>
        <S.Section>
          <S.SettingBtn>
            <img src="/assets/menuDot.svg" width={28} />
          </S.SettingBtn>
          <S.Account>
            <img src="/assets/accountBlue.svg" width={28} />
            로그인
          </S.Account>
        </S.Section>
      </S.Base>
      <S.Space />
    </div>
  );
}

export default Header;
