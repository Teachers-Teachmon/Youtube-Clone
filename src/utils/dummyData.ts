import type { Video } from "@/types/video";

const channelNames = [
  "코딩마스터",
  "여행의 기술",
  "요리조리",
  "Tech Reviewer",
  "데일리 브이로그",
  "Music Paradise",
  "운동하는 사람들",
];
const videoTitles = [
  "Typescript 기초 강의",
  "제주도 한 달 살기 꿀팁",
  "세상에서 가장 쉬운 파스타 레시피",
  "아이폰 17 Pro 사용기",
  "오늘의 출근길 브이로그",
  "집중할 때 듣기 좋은 로파이",
  "매일 10분 스트레칭",
  "React로 유튜브 클론하기",
  "세계 여행 필수 아이템 TOP 10",
  "자취생 필수 가전 리뷰",
  "주말 일상 기록",
  "신나는 댄스 플레이리스트",
  "하체 비만 탈출 루틴",
  "코딩 테스트 통과하는 법",
  "도쿄 맛집 탐방",
  "에어프라이어 요리 모음",
  "최신형 노트북 비교 분석",
  "새벽 공부 라이브",
  "강아지와 함께하는 산책",
  "AI가 바꾸는 미래 세상",
];

export const dummyVideos: Video[] = Array.from({ length: 20 }, (_, i) => {
  // 무작위 날짜 생성을 위한 로직 (최근 1년 이내)
  const randomDaysAgo = Math.floor(Math.random() * 365);
  const randomDate = new Date();
  randomDate.setDate(randomDate.getDate() - randomDaysAgo);
  randomDate.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60));

  return {
    name: videoTitles[i % videoTitles.length],
    view: Math.floor(Math.random() * 1000000), // 최대 100만 뷰
    uploadedTime: randomDate,
    uploader: {
      name: channelNames[Math.floor(Math.random() * channelNames.length)],
      subscriber: Math.floor(Math.random() * 500000), // 최대 50만 구독자
    },
  };
});
