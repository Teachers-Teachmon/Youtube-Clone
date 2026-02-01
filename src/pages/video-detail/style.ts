import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 12px;
  box-sizing: border-box;
`;

export const VideoDetail = styled.div`
  display: flex;
  flex: 2 1;
  box-sizing: border-box;
  flex-direction: column;
`;

export const Video = styled.video`
  background-color: black;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
`;

export const VideoInfo = styled.div``;

export const VideoList = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  width: 420px;
`;
