import type { Video } from '@/types/video';

const API_BASE_URL = 'http://localhost:5001';

//전체 영상목록 불러오기
export const fetchVideos = async (): Promise<Video[]> => {
  const response = await fetch(`${API_BASE_URL}/videos`);

  if (!response.ok) {
    throw new Error('영상 목록을 불러오는데 실패했스브니다');
  }

  return response.json();
}
//특정 영상 상세 정보 가져오기
export const fetchVideoById = async (id: string): Promise<Video> => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}`);

  if (!response.ok) {
    throw new Error('영상을 찾을 수 없습니다');
  }

  return response.json();
}