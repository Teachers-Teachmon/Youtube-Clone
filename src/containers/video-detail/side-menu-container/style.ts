import styled from "@emotion/styled";

export const Base = styled.div<{ top: number }>`
  display: flex;
  flex-flow: column nowrap;
  width: 240px;
  height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: ${({ top }) => top}px;
  left: -240px;
  transition: left 0.2s ease;
  z-index: 1000;
  background-color: #fff;

  &.opened {
    left: 0px;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease;
  width: 0;
  height: 0;
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;

  &.opened {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 56px;
`;

export const Button = styled.button`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #dcdcdc;
  }

  &:active {
    background-color: #b7b7b7;
  }
`;

export const Logo = styled.button`
  padding: 0 14px;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 10px;

  & #country {
    position: relative;
    top: -8px;
  }
`;

export const Body = styled.div`
  position: relative;
`;
