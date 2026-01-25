export interface Video {
  id: string;                    // 영상 고유 ID
  title: string;                 // 영상 제목
  thumbnail: string;             // 썸네일 이미지 URL
  channelName: string;           // 채널명
  channelAvatar: string;         // 채널 프로필 이미지 URL
  views: number;                 // 조회수
  uploadedAt: string;            // 업로드 시간
  duration: string;              // 영상 길이
  description?: string;          // 영상 설명
}