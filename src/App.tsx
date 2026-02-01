import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout"
import MainPage from "@/pages/main"
import DetailPage from "./pages/detail"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/watch/:videoId" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
};

export default App;