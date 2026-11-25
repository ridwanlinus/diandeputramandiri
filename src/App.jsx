import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Layanan from "./pages/Layanan.jsx";
import Proyek from "./pages/Proyek.jsx";
import Klien from "./pages/Klien.jsx";
import Legalitas from "./pages/Legalitas.jsx";
import Kontak from "./pages/Kontak.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="tentang" element={<Tentang />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="proyek" element={<Proyek />} />
        <Route path="klien" element={<Klien />} />
        <Route path="legalitas" element={<Legalitas />} />
        <Route path="kontak" element={<Kontak />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
