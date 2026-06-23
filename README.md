# Portofolio Juan Fakhri — HR Generalist & Data-Driven Developer

Website portofolio gabungan: cerita karier HR (Recruitment & Training Development) dari
`JuanFakhri_220063_Special_Mission.pptx` dipadukan dengan proyek teknis/data dari
`Juan_Fakhri_Portfolio-main` (website lama). Satu halaman, satu narasi.

## Tema Siang / Malam

Tombol **SIANG / MALAM** di header adalah saklar tema light/dark — sengaja dinamai seperti
istilah shift kerja, merujuk pada perjalanan dari operator lini (kerja shift) ke HR Generalist.
Tema tersimpan otomatis di browser (localStorage) dan default ke preferensi sistem perangkat
jika belum pernah diatur.

## Struktur folder

```
index.html        Halaman utama (satu file, semua section)
src/input.css     Sumber Tailwind + token warna siang/malam (CSS variables)
dist/output.css   CSS hasil compile — sudah jadi, tidak perlu build ulang untuk sekadar membuka
js/main.js        Toggle tema, menu mobile, animasi scroll-reveal
img/              Foto profil & screenshot proyek
tailwind.config.js
package.json
```

## Membuka langsung

Cukup buka `index.html` di browser — semua sudah ter-compile, tidak perlu instalasi apa pun.

## Mengedit konten / styling

Jika ingin mengubah warna, font, atau menambah utility class Tailwind baru:

```bash
npm install
npm run build     # compile sekali
npm run watch      # compile otomatis saat src/input.css berubah
```

Edit konten teks langsung di `index.html`. Edit warna tema di `src/input.css` pada bagian
`:root` (Siang) dan `.dark` (Malam).

## Deploy

Karena ini situs statis, bisa langsung di-deploy ke:
- **GitHub Pages** — push folder ini ke repo, aktifkan Pages dari branch utama.
- **Netlify / Vercel** — drag-and-drop folder ini sebagai static site.

## Kontak yang ditampilkan

Email, WhatsApp, LinkedIn, dan GitHub diambil dari dokumen portofolio terbaru. Alamat rumah
lengkap sengaja tidak ditampilkan di versi publik ini untuk menjaga privasi — cukup kota/provinsi.
