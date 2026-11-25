import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Proyek from "./pages/Proyek.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="tentang" element={<Tentang />} />
        <Route path="proyek" element={<Proyek />} />
        <Route path="layanan" element={<Navigate to="/tentang#layanan" replace />} />
        <Route path="klien" element={<Navigate to="/proyek#klien" replace />} />
        <Route path="legalitas" element={<Navigate to="/tentang#legalitas" replace />} />
        <Route path="kontak" element={<Navigate to="/#penawaran" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
