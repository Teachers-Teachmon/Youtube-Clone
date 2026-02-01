import { dummyVideos } from "@/utils/dummyData";
import * as S from "./style";
import VideoCard from "@/components/ui/video-card";
import { useEffect, useState } from "react";
import SideMenu from "@/components/ui/side-menu";
import { useSideMenuStore } from "@/stores/useSideMenuStore";

function MainPage() {
  const [now, setNow] = useState(new Date());
  const isSideMenuOpen = useSideMenuStore(state => state.isOpen);

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <S.Main>
      <SideMenu isOpen={isSideMenuOpen} />
      <S.Videos>
        {dummyVideos.map((_, i) => (
          <VideoCard key={i} videoIndex={i} now={now} width="32.5%" size="default" />
        ))}
      </S.Videos>
    </S.Main>
  );
}

export default MainPage;
