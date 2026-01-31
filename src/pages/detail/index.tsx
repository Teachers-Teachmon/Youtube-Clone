import { useParams } from 'react-router-dom';
import Header from '@/containers/common/header';
import Sidebar from '@/containers/common/sidebar';
import VideoPlayer from '@/containers/detail/video-player';
import VideoInfo from '@/containers/detail/video-info';
import { generateMockVideos } from '@/utils/mockData';
import * as S from './style';

const DetailPage = () => {
  // URL에서 videoId 가져오기
  const { videoId } = useParams<{ videoId: string }>();

  // Mock 데이터에서 해당 영상 찾기
  const videos = generateMockVideos(20);
  const video = videos.find((v) => v.id === videoId);

  if (!video) {
    return <div>영상을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header />
      <S.PageWrapper>
        <Sidebar />
        <S.MainContent>
          <S.ContentWrapper>
            <VideoPlayer videoId={video.id} />
            <VideoInfo video={video} />
          </S.ContentWrapper>
        </S.MainContent>
      </S.PageWrapper>
    </>
  );
};

export default DetailPage;