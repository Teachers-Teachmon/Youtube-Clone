import SearchBar from "@/components/ui/search-bar";
import * as S from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <S.Base>
        <S.Section>
          <S.Button>
            <Link to="/">
              <img src="/assets/menuBurger.svg" width={26} />
            </Link>
          </S.Button>
          <S.Logo>
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
            <img src="/assets/account.svg" width={28} />
            로그인
          </S.Account>
        </S.Section>
      </S.Base>
      <S.Space />
    </>
  );
}

export default Header;
