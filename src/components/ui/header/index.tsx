import * as S from './style';

const Header = () => {
  return (
    <S.Container>

      <S.LeftSection>
        <S.SearchIcon src="/icons/hamburger.png" alt="메뉴" />
        <S.Logo src="/icons/youtube-logo.png" alt="Youtube" />
      </S.LeftSection>

      <S.CenterSection >

        <S.SearchInputWrapper>
          <S.SearchInput placeholder="검색" />
        </S.SearchInputWrapper>

        <S.SearchButton>
          <S.SearchIcon src="/icons/search.png" alt="검색" />
        </S.SearchButton>

      </S.CenterSection>

    </S.Container>
  )
}

export default Header;