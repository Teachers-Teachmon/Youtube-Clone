import { useQuery } from '@tanstack/react-query';
import { fetchVideoById } from '@/api/videos';

export const useVideoDetail = (videoId: string) => {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => fetchVideoById(videoId),
    enabled: !!videoId,
    staleTime: 1000 * 60 * 10,  // 10분
  });
};