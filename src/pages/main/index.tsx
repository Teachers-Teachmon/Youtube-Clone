import { dummyVideos } from "@/utils/dummyData";
import * as S from "./style";
import VideoCard from "@/components/ui/video-card";
import { useEffect, useState } from "react";

function MainPage() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <S.Videos>
      {dummyVideos.map((v, i) => (
        <VideoCard key={i} video={v} now={now} />
      ))}
    </S.Videos>
  );
}

export default MainPage;
