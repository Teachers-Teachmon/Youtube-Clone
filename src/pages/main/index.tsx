import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import VideoCard from '@/components/ui/video-card';
import * as S from './style';
import { generateMockVideos } from '@/utils/mockData';

const MainPage = () => {
  const videos = generateMockVideos(20);

  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}