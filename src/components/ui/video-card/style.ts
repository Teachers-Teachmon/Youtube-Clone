import type { CardSize } from "@/types/videoCard";
import styled from "@emotion/styled";

interface BaseProps {
  width: string;
  size: CardSize;
}
export const Base = styled.div<BaseProps>`
  display: flex;
  width: ${({ width }) => width};
  flex-flow: ${({ size }) => (size === "default" ? "column" : "row")} nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 8px 32px 8px;
  gap: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Thumbnail = styled.img`
  border-radius: 12px;
  aspect-ratio: 16 / 9;
  width: 98%;
`;

export const VideoData = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  position: relative;
`;

export const ChannelImg = styled.img`
  width: 36px;
  aspect-ratio: 1 / 1;
  border-radius: 18px;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const VideoName = styled.span`
  padding-right: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Uploader = styled.span`
  font-size: 14px;
  color: #606060;
  line-height: 20px;
`;

export const ViewAndTime = styled.span`
  font-size: 14px;
  color: #606060;
  line-height: 20px;

  & .delimiter {
    margin: 0px 4px;
  }
`;

export const Action = styled.button`
  width: 32px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;

  &:hover {
    background-color: #dddddd;
  }

  &:active {
    background-color: #b7b7b7;
  }
`;
