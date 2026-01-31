import type { Video } from '@/types/video';

export const generateMockVideos = (count: number): Video[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `video-${i + 1}`,
    title: `재밌는 영상 제목 ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${i}/320/180`,
    channelName: `채널 ${i + 1}`,
    channelAvatar: `https://picsum.photos/seed/avatar${i}/40/40`,
    views: Math.floor(Math.random() * 1000000),
    uploadedAt: `${Math.floor(Math.random() * 30)}일 전`,
    duration: `${Math.floor(Math.random() * 20)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    description: `이것은 영상 ${i + 1}의 설명입니다.`,
  }));
};