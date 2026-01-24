import styled from '@emotion/styled';

/* 전체 헤더 컨테이너 */
export const Container = styled.header`
  height: 56px;
  width: 100%;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

/* 왼쪽(햄버거 + 로고) */
export const LeftSection = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 16px 23px 16px 8px;
`;

/* 햄버거 아이콘 */
export const hamburger = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

/* YouTube 로고 */
export const Logo = styled.img`
  height: 20px;
  width: 90px;
  object-fit: cover;
  cursor: pointer;
`;
/* 센터 검색창*/
export const CenterSection = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 0px;
  flex: 1;
  max-width: 540px;
  margin: auto;
`;

/*검색 input 래퍼*/
export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 40px 0 0 40px;
  box-shadow: inset 0px 1px 2px #eeeeee;
  padding: 10px 84px 11px 17px;
`;

// 검색 input
export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  color: #888888;
  
  &::placeholder {
    color: #888888;
  }
`;

// 검색 버튼
export const SearchButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  border-radius: 0 40px 40px 0;
  height: 43px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

// 검색 버튼 안의 아이콘
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;