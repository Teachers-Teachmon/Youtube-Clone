import styled from "@emotion/styled";

interface SideMenuProps {
  width: number;
}

export const Space = styled.div<SideMenuProps>`
  width: ${({ width }) => width}px;
  visibility: hidden;
`;

export const Base = styled.div<SideMenuProps>`
  display: flex;
  width: ${({ width }) => width}px;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 56px;
  left: 0px;
`;

export const Shortcut = styled.button`
  display: flex;
  width: 64px;
  height: 44px;
  padding: 16px 0 14px;
  box-sizing: content-box;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  flex-flow: column nowrap;

  & .icon {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ShortcutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const OpenShortcut = styled.button`
  width: 204px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  padding: 0px 12px;
  gap: 24px;
  border-radius: 10px;

  & .icon {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Account = styled.button`
  box-sizing: border-box;
  display: flex;
  height: 36px;
  width: 92px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  color: #065fd4;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #065fd417;
    border: none;
  }
`;
