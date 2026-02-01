import type { Video } from "@/types/video";
import * as S from "./style";
import processView from "@/utils/processView";
import processTime from "@/utils/processTime";
import type { CardSize } from "@/types/videoCard";

interface props {
  video: Video;
  now: Date;
  width: string;
  size: CardSize;
}
function VideoCard({ video, now, width, size }: props) {
  return (
    <S.Base width={width} size={size}>
      <S.Thumbnail />
      <S.VideoData>
        <S.ChannelImg />
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
          <img src="/assets/menuDot.svg" />
        </S.Action>
      </S.VideoData>
    </S.Base>
  );
}

export default VideoCard;
