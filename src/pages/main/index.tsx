import Header from "@/containers/common/header"
import Sidebar from "@/containers/common/sidebar"
import VideoGrid from "@/containers/main/video-grid"
import * as S from "./style"

const MainPage = () => {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <Sidebar />
        <VideoGrid />
      </S.MainWrapper>
    </>
  )
}

export default MainPage