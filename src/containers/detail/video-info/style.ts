import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 0;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 12px 0;
  color: #0f0f0f;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #606060;
`;

export const ViewCount = styled.span``;

export const UploadDate = styled.span`
  &::before {
    content: '·';
    margin-right: 8px;
  }
`;

export const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

export const ChannelAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const ChannelInfo = styled.div`
  flex: 1;
`;

export const ChannelName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #0f0f0f;
`;

export const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #0f0f0f;
  white-space: pre-wrap;
`;