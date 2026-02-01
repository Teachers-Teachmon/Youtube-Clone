import { useParams } from 'react-router-dom';
import VideoPlayer from '@/containers/detail/video-player';
import VideoInfo from '@/containers/detail/video-info';
import { useVideoDetail } from '@/hooks/useVideoDetail';
import * as S from './style';

const DetailPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const { data: video, isLoading, isError } = useVideoDetail(videoId!);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError || !video) {
    return <div>영상을 찾을 수 없습니다.</div>;
  }

  return (
    <S.ContentWrapper>
      <VideoPlayer videoId={video.id} />
      <VideoInfo video={video} />
    </S.ContentWrapper>
  );
};

export default DetailPage;