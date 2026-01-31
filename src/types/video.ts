import type { Channel } from "./channel";

export interface Video {
  name: string;
  view: number;
  uploadedTime: Date;
  uploader: Channel;
}
