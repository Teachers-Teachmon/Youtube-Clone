import styled from "@emotion/styled";

export const Base = styled.div`
  display: flex;
  width: 32%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 8px 32px 8px;
  gap: 16px;
`;

export const Thumbnail = styled.img`
  border-radius: 12px;
  aspect-ratio: 16 / 9;
  width: 90%;
`;

export const VideoData = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
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
