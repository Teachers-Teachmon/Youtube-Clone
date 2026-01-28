import "@/styles/global.css";
import { Route, Routes } from "react-router-dom";

import MainLayout from "@/components/layout/main-layout";
import MainPage from "@/pages/main";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
