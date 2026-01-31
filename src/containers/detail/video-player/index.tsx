import * as S from './style';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <S.Container>
      <S.PlayerWrapper>
        { }
        <S.PlaceholderText>
          영상 플레이어 영역 (ID: {videoId})
        </S.PlaceholderText>
      </S.PlayerWrapper>
    </S.Container>
  )
}

export default VideoPlayer;