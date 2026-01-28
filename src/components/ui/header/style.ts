import styled from "@emotion/styled";

export const Base = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0px;
`;

export const Space = styled.div`
  display: hidden;
  width: 100%;
  height: 56px;
`;

export const Section = styled.div`
  flex: 0 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
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

export const Logo = styled.div`
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

export const SettingBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: #b7b7b7;
  }
`;

export const Account = styled.button`
  box-sizing: border-box;
  display: flex;
  height: 36px;
  width: 92px;
  justify-content: center;
  align-items: center;
  gap: auto;
  padding: 8px;
  color: #065fd4;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #065fd417;
    border: none;
  }
`;
