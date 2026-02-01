import SideMenuContainer from "@/containers/video-detail/side-menu-container";
import * as S from "./style";
import { useCurrnetVideoStore } from "@/stores/useCurrentVideoStore";
import { useState, useEffect } from "react";
import { dummyVideos } from "@/utils/dummyData";
import VideoCard from "@/components/ui/video-card";

function VideoDetailPage() {
  const { currentVideo } = useCurrnetVideoStore();
  const [video, setVideo] = useState(dummyVideos[currentVideo]);
  const now = new Date();

  useEffect(() => {
    setVideo(dummyVideos[currentVideo]);
  }, [currentVideo]);

  return (
    <>
      <SideMenuContainer />
      <S.Main>
        <S.VideoList>
          {dummyVideos.map((_, i) => {
            if (i !== currentVideo) return <VideoCard key={i} videoIndex={i} now={now} width="100%" size="small" />;
            return <></>;
          })}
        </S.VideoList>
      </S.Main>
    </>
  );
}

export default VideoDetailPage;
