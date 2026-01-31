import type { Video } from '@/types/video';
import * as S from './style';

interface VideoInfoProps {
  video: Video;
}

const VideoInfo = ({ video }: VideoInfoProps) => {
  return (
    <S.Container>
      <S.Title>{video.title}</S.Title>

      <S.MetaRow>
        <S.ViewCount>조회수 {video.views.toLocaleString()}회</S.ViewCount>
        <S.UploadDate>{video.uploadedAt}</S.UploadDate>
      </S.MetaRow>

      <S.ChannelRow>
        <S.ChannelAvatar src={video.channelAvatar} alt={video.channelName} />
        <S.ChannelInfo>
          <S.ChannelName>{video.channelName}</S.ChannelName>
        </S.ChannelInfo>
      </S.ChannelRow>

      {video.description && (
        <S.Description>{video.description}</S.Description>
      )}
    </S.Container>
  );
};

export default VideoInfo;