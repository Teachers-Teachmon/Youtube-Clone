import styled from "@emotion/styled";

export const Base = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  gap: 2vw;
`;

export const InputBox = styled.div`
  display: flex;
  max-width: 650px;
  width: 40vw;
  border: 1px solid #00000034;
  border-radius: 20px;
  box-sizing: border-box;
  height: 100%;
`;

export const Input = styled.input`
  flex: 2 1 90%;
  border-radius: 20px 0 0 20px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  box-sizing: border-box;
  height: 100%;
`;

export const SearchButton = styled.button`
  border-left: 1px solid #00000034;
  background-color: rgba(0, 0, 0, 0.05);
  flex: 1 1 64px;
  border-radius: 0 20px 20px 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  background-color: #ebebeb;
  aspect-ratio: 1 / 1;
  height: 100%;
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
