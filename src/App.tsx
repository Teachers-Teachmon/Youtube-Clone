import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "@/pages/main"
import DetailPage from "./pages/detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/watch/:videoId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;