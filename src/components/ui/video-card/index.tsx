import * as S from "./style";
import processView from "@/utils/processView";
import processTime from "@/utils/processTime";
import type { CardSize } from "@/types/videoCard";
import { dummyVideos } from "@/utils/dummyData";
import { useNavigate } from "react-router-dom";
import { useCurrnetVideoStore } from "@/stores/useCurrentVideoStore";

interface props {
  videoIndex: number;
  now: Date;
  width: string;
  size: CardSize;
}
function VideoCard({ videoIndex, now, width, size }: props) {
  const video = dummyVideos[videoIndex];
  const navigate = useNavigate();
  const changeCurrentVideo = useCurrnetVideoStore(state => state.changeCurrentVideo);

  const showDetail = () => {
    navigate("/watch");
    changeCurrentVideo(videoIndex);
  };

  return (
    <S.Base width={width} size={size} onClick={showDetail}>
      <S.Thumbnail />
      <S.VideoData>
        {size === "default" && <S.ChannelImg />}
        <S.VideoInfo>
          <S.VideoName>{video.name}</S.VideoName>
          <S.Uploader>{video.uploader.name}</S.Uploader>
          <S.ViewAndTime>
            {processView(video.view)}
            <span className="delimiter">·</span>
            {processTime(video.uploadedTime, now)}
          </S.ViewAndTime>
        </S.VideoInfo>
        <S.Action>
          <img src="/icons/common/menuDot.svg" />
        </S.Action>
      </S.VideoData>
    </S.Base>
  );
}

export default VideoCard;
