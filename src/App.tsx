import "@/styles/global.css";
import { Route, Routes } from "react-router-dom";

import MainLayout from "@/components/layout/main-layout";
import MainPage from "@/pages/main";
import VideoDetailPage from "./pages/video-detail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/watch" element={<VideoDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
