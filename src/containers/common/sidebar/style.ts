import styled from '@emotion/styled';

// 사이드바 전체 컨테이너
export const Container = styled.aside`
  width: 240px;
  min-width: 240px;
  height: calc(100vh - 56px);
  background-color: #ffffff;
  border-right: 1px solid #0000001a;
  border-bottom: 1px solid #0000001a;
  overflow-y: auto;
  padding: 12px;
`;

// 메뉴 아이템 하나
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  
  &:hover {
    background-color: #0000000d;
  }
  
  &.active {
    background-color: #0000000d;
  }
`;

// 메뉴 아이콘
export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

// 메뉴 텍스트
export const MenuText = styled.span`
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  color: #0f0f0f;
  line-height: 20px;
  white-space: nowrap;
  
  /* 첫 번째 메뉴(홈)는 Medium 폰트 */
  .active & {
    font-family: "Roboto-Medium", Helvetica;
    font-weight: 500;
  }
`;