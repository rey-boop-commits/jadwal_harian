Daily Planner (Jadwal Harian)
=============================

Ini adalah aplikasi web sederhana untuk mengatur jadwal harian. Dibuat dengan HTML, CSS, dan Vanilla JavaScript. Data disimpan di `localStorage` browser.

Cara menjalankan (lokal):
- Cara mudah: buka `index.html` di browser (File -> Open).  
- Jika ingin serve via HTTP (direkomendasikan untuk beberapa browser), jalankan di PowerShell (dengan Python terpasang):

```powershell
# dari folder project-tik
python -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

Fitur:
- Tambah kegiatan (nama + waktu)
- Hapus kegiatan
- Tandai selesai (checkbox) -> tampil dengan garis coret
- Data tersimpan otomatis di `localStorage`
- Kegiatan diurutkan berdasarkan waktu (format HH:MM)

Catatan:
- Jika browser menghapus localStorage (mode incognito atau pembersihan), data akan hilang.
- Untuk perbaikan atau fitur tambahan: edit `script.js`.

## Permasalahan (sebelum dibuatnya web ini)

Beberapa masalah yang umum dialami pengguna sebelum memiliki aplikasi jadwal harian sederhana ini:

- Sulit mengingat semua kegiatan harian, terutama yang memiliki waktu spesifik.
- Pengelolaan jadwal dilakukan secara manual (catatan kertas atau catatan di aplikasi lain) sehingga rawan terlupakan.
- Tidak ada penyimpanan lokal yang otomatis; menutup browser atau mematikan perangkat dapat menyebabkan hilangnya catatan.
- Sulit melihat kegiatan terurut berdasarkan waktu tanpa menyusun manual.
- Tidak ada cara cepat untuk menandai kegiatan selesai atau menghapus kegiatan yang sudah tidak relevan.

## Permasalahan yang Terselesaikan oleh Aplikasi Ini

Setelah membuat web ini, beberapa masalah di atas ditangani sebagai berikut:

- Penyimpanan persistensi lokal: daftar kegiatan disimpan di `localStorage`, sehingga tetap ada meskipun browser ditutup.
- Penambahan cepat: form sederhana (nama + jam) memungkinkan menambah kegiatan dalam 1-2 detik.
- Pengurutan otomatis: kegiatan diurutkan secara otomatis berdasarkan waktu (format HH:MM) sehingga jadwal mudah dibaca.
- Manajemen kegiatan: fitur hapus dan tandai selesai (checkbox) memungkinkan pengelolaan tugas secara langsung.
- UI responsif dan sederhana: tampil baik pada desktop dan perangkat mobile sehingga mudah diakses kapan saja.

> Catatan: aplikasi ini adalah solusi ringan tanpa backend. Untuk kolaborasi multi-perangkat atau sinkronisasi cloud, perlu pengembangan backend atau integrasi layanan pihak ketiga.

## Menjalankan proyek ini menggunakan "Go Live" (VS Code Live Server)

Jika Anda menggunakan Visual Studio Code, Anda dapat menjalankan proyek ini dengan ekstensi Live Server (sering disebut tombol "Go Live"). Langkah singkat:

1. Buka folder proyek `project-tik` di Visual Studio Code (`File` → `Open Folder...`).
2. Jika belum terpasang, pasang ekstensi "Live Server" (publisher: Ritwick Dey) dari Marketplace.
3. Setelah terpasang, buka file `index.html` di editor.
4. Klik tombol "Go Live" di pojok kanan bawah status bar VS Code atau klik kanan pada `index.html` lalu pilih `Open with Live Server`.
5. Browser akan terbuka otomatis pada alamat seperti `http://127.0.0.1:5500` atau `http://localhost:5500`—di sana Anda dapat melihat dan menguji aplikasi.

Catatan tambahan:

- Live Server menyediakan auto-reload: setiap kali Anda menyimpan perubahan pada file, halaman akan otomatis dimuat ulang.
- Jika port 5500 sudah digunakan, Live Server biasanya memilih port lain; periksa alamat yang ditampilkan di status bar atau console.
- Alternatif: jika tidak ingin menggunakan Live Server, Anda masih dapat menjalankan server HTTP sederhana (lihat instruksi Python di atas).

