import { useQuery } from "@tanstack/react-query";
import { generateMockVideos } from "@/utils/mockData";
import type { Video } from "@/types/video";

//영상 목록 가져오는 함수인데 나중에 실제 API로 교체 할거임
const fetchVideos = async (): Promise<Video[]> => {
  // API 호출인데 +0.5딜레이
  await new Promise((resolve) => setTimeout(resolve, 500));
  return generateMockVideos(20);
};

// 영상 목록을 가져오는 Hook
export const useVideos = () => {
  return useQuery({
    queryKey: ['videos'], // 캐시 키(고유 식별자)
    queryFn: fetchVideos, // 내가 만든 데이터 가져오는 함수
  });
};