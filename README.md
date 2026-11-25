# dpm
Website konstruksi PT. Diande Putra Mandiri — dibangun dengan Vite + React.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil build di dist/
npm run preview  # cek hasil build secara lokal
```

## Halaman

Setiap menu punya rute dan komponen halamannya sendiri:

| Rute | Halaman |
| --- | --- |
| `/` | Beranda |
| `/tentang` | Tentang Kami (termasuk `#struktur`) |
| `/layanan` | Layanan |
| `/proyek` | Portofolio (filter kategori) |
| `/klien` | Klien & Mitra |
| `/legalitas` | Legalitas |
| `/kontak` | Kontak + form WhatsApp |

## Struktur

```
index.html            # entri HTML Vite (meta, font, favicon)
src/main.jsx          # bootstrap React + BrowserRouter
src/App.jsx           # definisi rute
src/pages/            # satu file per halaman
src/components/       # Header, Footer, Layout, Reveal
src/data/             # data proyek & klien
src/hooks/            # usePageMeta (judul & meta per halaman)
src/site.css          # stylesheet situs
public/assets/        # gambar, logo, bagan organisasi
```

## Deploy ke Vercel

Framework terdeteksi otomatis sebagai **Vite**. `vercel.json` sudah mengatur
`outputDirectory: dist` dan rewrite semua rute ke `index.html`, sehingga URL
seperti `/proyek` tetap bisa dibuka langsung (bukan 404) saat di-refresh.
