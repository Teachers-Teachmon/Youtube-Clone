import { useNavigate } from "react-router-dom";
import type { Video } from "@/types/video";
import * as S from "./style";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <S.Container onClick={handleClick}>

      <S.Thumbnail>
        <S.ThumbnailImage src={video.thumbnail} alt={video.title} />
        <S.Duration>{video.duration}</S.Duration>
      </S.Thumbnail>

      <S.InfoWrapper>
        <S.ChannelAvatar src={video.channelAvatar} alt={video.channelName} />
        <S.TextInfo>
          <S.Title>{video.title}</S.Title>
          <S.ChannelName>{video.channelName}</S.ChannelName>
          <S.Metadata>
            조회수 {video.views.toLocaleString()}회 • {video.uploadedAt}
          </S.Metadata>
        </S.TextInfo>
      </S.InfoWrapper>
    </S.Container>
  );
};

export default VideoCard;