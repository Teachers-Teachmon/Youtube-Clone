import styled from '@emotion/styled';

// 카드 전체 컨테이너
export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  border-radius: 15px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(235, 211, 137, 0.2);
    border-radius: 18px;
    opacity: 0;
    transition: top 0.5s ease, left 0.5s ease, right 0.5s ease, bottom 0.5s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
    top: -13px;
    left: -13px;
    right: -13px;
    bottom: -13px;
  }
`;

// 썸네일 영역
export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 비율 유지 */
  background-color: #000;
  border-radius: 14px;
  overflow: hidden;
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 영상 길이 표시
export const Duration = styled.span`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 500;
`;

// 하단 정보 영역
export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const ChannelAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const TextInfo = styled.div`
  flex: 1;
  min-width: 0; /* 텍스트 overflow 처리를 위해 필요 */
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 4px 0;
  
  /* 2줄 넘으면 ... 처리 개쩔어 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ChannelName = styled.p`
  font-size: 15px;
  color: #606060;
  margin: 0 0 2px 0;
`;

export const Metadata = styled.p`
  font-size: 15px;
  color: #606060;
  margin: 0;
`;