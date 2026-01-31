import VideoCard from '@/components/ui/video-card';
import { useVideos } from '@/hooks/useVideos';
import * as S from './style';

const VideoGrid = () => {
  // React Query Hook 사용
  const { data: videos, isLoading, isError } = useVideos();

  // 로딩 중
  if (isLoading) {
    return <S.Container>로딩 중...</S.Container>;
  }
  // 에러 발생
  if (isError) {
    return <S.Container>에러가 발생했습니다.</S.Container>;
  }
  // 데이터 없음
  if (!videos || videos.length === 0) {
    return <S.Container>영상이 없습니다.</S.Container>;
  }
  // 정상 렌더링
  return (
    <S.Container>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </S.Container>
  );
};

export default VideoGrid;