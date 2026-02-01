import { dummyVideos } from "@/utils/dummyData";
import * as S from "./style";
import VideoCard from "@/components/ui/video-card";
import { useEffect, useState } from "react";
import SideMenu from "@/components/ui/side-menu";

function MainPage() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <>
      <SideMenu />
      <S.Videos>
        {dummyVideos.map((v, i) => (
          <VideoCard key={i} video={v} now={now} width="32.5%" size="default" />
        ))}
      </S.Videos>
    </>
  );
}

export default MainPage;
