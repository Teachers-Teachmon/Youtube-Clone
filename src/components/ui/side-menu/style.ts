import styled from "@emotion/styled";

interface SideMenuProps {
  width: number;
}

export const Base = styled.div<SideMenuProps>`
  display: flex;
  width: ${({ width }) => width}px;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
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

export const OpenShortcut = styled.button`
  width: 192px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
`;
