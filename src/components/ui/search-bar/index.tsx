import * as S from "./style";

function SearchBar() {
  return (
    <S.Base>
      <S.InputBox>
        <S.Input placeholder="검색" />
        <S.SearchButton>
          <img src="/icons/common/search.svg" width={28} />
        </S.SearchButton>
      </S.InputBox>
      <S.Button>
        <img src="/icons/common/mic.svg" width={28} />
      </S.Button>
    </S.Base>
  );
}

export default SearchBar;
