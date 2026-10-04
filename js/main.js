// =========================
// Kembali ke Menu & Navigasi
// =========================
function kembali() {

    console.log("Kembali ke:", asalHalaman);

    tutupPopupInfo();

    if (asalHalaman === "home") {

        home();

    } else if (asalHalaman === "materi") {

        const tombolMateri =
            document.querySelectorAll(".nav-item")[1];

        tampilMateri(tombolMateri);

    }
}
// Funsi Kembali ke Kanji
function kembaliKeKanji() {
    tampilKanji(asalHalaman);
}

// =========================
// Tombol Tab Aktif
// =========================

function aktifkanTab(id) {

    document
        .querySelectorAll(".menu-tab button")
        .forEach(btn => btn.classList.remove("aktif"));

    const tombol = document.getElementById(id);

    if (tombol) {

        tombol.classList.add("aktif");

    }

}

// DURASI SPLASH SCREEN
document.getElementById("bottomNav").style.display = "none";

setTimeout(() => {

    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("bottomNav").style.display = "flex";
}, 3000);

// TAMPILAN MATERI
function tampilMateri(tombol) {
    aktifNav(tombol);
    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

<div class="menu-materi">

    <div class="judul-header">
        <span class="material-symbols-rounded logo-halaman">
          menu_book
        </span>
        <h2>Materi</h2>
    </div>
    
  <div class="content-grid">

    <div class="card-content-top" onclick="tampilHiragana('materi')">
        <span class="simbol-hi">あ</span>
        <div>
            <h3>Hiragana</h3>
            <p>Belajar huruf Jepang dasar.</p>
        </div>
        <span class="panah-latihan">›</span>
    </div>

    <div class="card-content" onclick="tampilKatakana('materi')">
        <span class="simbol-ka">ア</span>
        <div>
            <h3>Katakana</h3>
            <p>Belajar huruf Jepang asing.</p>
        </div>
        <span class="panah-latihan">›</span>
    </div>

    <div class="card-content" onclick="tampilKanji('materi')">
        <span class="simbol-kan">漢</span>
        <div>
            <h3>Kanji</h3>
            <p>Tersedia : N5</p>
        </div>
        <span class="panah-latihan">›</span>
    </div>

    <div class="card-content">
        <span class="material-symbols-rounded bg-kosakata">
        dictionary
        </span>
        <div>
            <h3> Kosakata</h3>
            <p>Segera hadir.</p>
        </div>
        <span class="panah-latihan">🚧</span>
    </div>

    <div class="card-content">
        <span class="material-symbols-rounded bg-tatabahasa">
          format_align_left
        </span>
        <div>
            <h3>Tata Bahasa</h3>
            <p>Segera hadir.</p>
        </div>
        <span class="panah-latihan">🚧</span>
    </div>
  </div>
</div>

`;
    tampilNavbar();
    scrollAtas();
}

// TOMBOL HOME
function home() {

    document.getElementById("isi").innerHTML = "";
    document.getElementById("app").style.display = "block";

    tampilNavbar();

    const tombolHome = document.querySelectorAll(".nav-item")[0];
    aktifNav(tombolHome);

    scrollAtas();
}

// NAVBAR AKTIF 
function aktifNav(tombol) {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    tombol.classList.add("active");
}

// TAMPILAN LATIHAN
function tampilLatihan(tombol = null) {

    if (tombol) {
        aktifNav(tombol);
    } else {
        const tombolLatihan = document.querySelectorAll(".nav-item")[2];
        aktifNav(tombolLatihan);
    }

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

      <div class="menu-latihan">
          <div class="judul-header">
                <span class="material-symbols-rounded logo-halaman">
                  edit_note
                </span>
                <h2> Latihan</h2>
          </div>

          <div class="content-grid">

                <div class="card-content-top" onclick="tampilLevelLatihan()">
                    <span class="material-symbols-rounded bg-kana">
                        translate
                    </span>

                    <div>
                        <h3>Tebak Kana</h3>
                        <p>Tentukan huruf Jepang berdasarkan romaji.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content" onclick="tampilLevelKanji()">
                    <span class="simbol-kan">
                        漢
                    </span>

                    <div>
                        <h3>Tebak Kanji</h3>
                        <p>Tentukan arti dari sebuah kanji.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content">
                    <span class="material-symbols-rounded bg-teka">
                        tooltip_2
                    </span>

                    <div>
                        <h3>Tebak Kata</h3>
                        <p>Tentukan arti dari kata atau kanji.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>               <div class="card-content">
                    <span class="material-symbols-rounded bg-poka">
                        draw
                    </span>

                    <div>
                        <h3>Pola Kalimat</h3>
                        <p>Tentukan partikel dari sebuah kalimat.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div

          </div>

      </div>

    `;

    tampilNavbar();
    scrollAtas();
}
// LEVEL KANJI LATIHAN
function tampilLevelKanji() {

    document.getElementById("isi").innerHTML = `

        <div class="menu-latihan">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h2>Kanji</h2>
              </div>
                
                <button class="tombol-kembali"
                    onclick="tampilLatihan()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                    
                </button>
                
            </div>

            <div class="content-grid">

                <div class="card-content-top" onclick="tampilBabKanjiN5()">
                    <span class="simbol-kan">
                        N5
                    </span>

                    <div>
                        <h3>Kanji N5</h3>
                        <p>Kanji tingkat dasar</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content">
                    <span class="simbol-kan">
                        N4
                    </span>

                    <div>
                        <h3>Kanji N4</h3>
                        <p>Belum tersedia</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content">
                    <span class="simbol-kan">
                        N3
                    </span>

                    <div>
                        <h3>Kanji N3</h3>
                        <p>Belum tersedia</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content">
                    <span class="simbol-kan">
                        N2
                    </span>

                    <div>
                        <h3>Kanji N2</h3>
                        <p>Belum tersedia</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="card-content">
                    <span class="simbol-kan">
                        N1
                    </span>

                    <div>
                        <h3>Kanji N1</h3>
                        <p>Belum tersedia</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

            </div>

        </div>

    `;

    sembunyiNavbar();
    scrollAtas();
}

// BAB KANJI LATIHAN
function tampilBabKanjiN5() {

    // Ambil nomor bab yang tersedia
    const daftarBab = [...new Set(kanjiN5.map(item => item.bab))];

    let htmlBab = "";

    daftarBab.forEach(bab => {

        // Ambil semua kanji dalam bab
        const dataBab = kanjiN5.filter(item => item.bab === bab);

        // Nama bab sementara
        let namaBab = `Bab ${bab}`;

        if (bab === 1) {
            namaBab = "Angka & Waktu";
        } else if (bab === 2) {
            namaBab = "Orang & Keluarga";
        } else if (bab === 3) {
            namaBab = "Sekolah & Belajar";
        } else if (bab === 4) {                      namaBab = "Tempat & Arah";           } else if (bab === 5) {                      namaBab = "Aktivitas Sehari-hari"    } else if (bab === 6) {                      namaBab = "Angota Tubuh"             }

        htmlBab += `
            <div class="card-content"
                 onclick="tampilPopupLevelKanji(${bab})">

                <span class="simbol-kan">
                    N5
                </span>

                <div>
                    <h3>Bab ${bab}</h3>
                    <p>${namaBab} · ${dataBab.length} Kanji</p>
                </div>

                <span class="panah-latihan">›</span>

            </div>
        `;
    });

    document.getElementById("isi").innerHTML = `

        <div class="menu-latihan">

            <div class="judul-header ada-kembali">
               <div class="judul-kiri">
                <h2>Kanji N5</h2>
               </div>
                
                <button class="tombol-kembali"
                    onclick="tampilLevelKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
            </div>

            <div class="content-grid">

                ${htmlBab}

            </div>

        </div>

    `;

    sembunyiNavbar();
    scrollAtas();
}
// TAMPIL LVL BAB KANJI
function tampilLevelBabKanji(bab) {

    const dataBab = kanjiN5.filter(item => item.bab === bab);

    let namaBab = `Bab ${bab}`;

    if (bab === 1) {
        namaBab = "Angka & Waktu";
    } else if (bab === 2) {
        namaBab = "Orang & Keluarga";
    } else if (bab === 3) {
        namaBab = "Sekolah & Belajar";
    } else if (bab === 4) {
        namaBab = "Tempat & Arah";
    } else if (bab === 5) {
        namaBab = "Aktivitas Sehari-hari";
    } else if (bab === 6) {
        namaBab = "Anggota Tubuh";
    }

    document.getElementById("isi").innerHTML = `

        <div class="menu-latihan">

            <div class="judul-header ada-kembali">

                <div class="judul-kiri">
                    <h2>Bab ${bab}</h2>
                    <p>${namaBab} · ${dataBab.length} Kanji</p>
                </div>

                <button class="tombol-kembali"
                    onclick="tampilBabKanjiN5()">

                    <span class="material-symbols-rounded">
                        undo
                    </span>

                </button>

            </div>


            <div class="content-grid">

                <div class="card-content"
                    onclick="tampilPopupLevelKanji(${bab})">

                    <span class="simbol-kan">
                        N5
                    </span>

                    <div>
                        <h3>Pilih Level Latihan</h3>
                        <p>3 level tersedia</p>
                    </div>

                    <span class="panah-latihan">›</span>

                </div>

            </div>

        </div>

    `;

    sembunyiNavbar();
    scrollAtas();
}

// POPUP LVL BAB KANJI
function tampilPopupLevelKanji(bab) {

    document.getElementById("isi").insertAdjacentHTML("beforeend", `

        <div class="popup-level" id="popupLevelKanji">

            <div class="popup-level-content">

                <button class="popup-level-close"
                    onclick="tutupPopupLevelKanji()">
                    ×
                </button>

                <div class="popup-level-icon">
                    🎯
                </div>

                <h2>Pilih Level</h2>

                <div class="level-kanji-list">

                    <div class="level-kanji-item"
                        onclick="popupLevelKanji(${bab}, 1)">

                        <div class="level-kanji-nomor">
                            1
                        </div>

                        <div>
                            <h3>Level 1</h3>
                            <p>Kanji → Arti · 10 Soal</p>
                        </div>

                        <span>›</span>

                    </div>


                    <div class="level-kanji-item"
                        onclick="popupLevelKanji(${bab}, 2)">

                        <div class="level-kanji-nomor">
                            2
                        </div>

                        <div>
                            <h3>Level 2</h3>
                            <p>Kanji → Bacaan · 20 Soal</p>
                        </div>

                        <span>›</span>

                    </div>


                    <div class="level-kanji-item"
                        onclick="popupLevelKanji(${bab}, 3)">

                        <div class="level-kanji-nomor">
                            3
                        </div>

                        <div>
                            <h3>Level 3</h3>
                            <p>Campuran · 20 Soal</p>
                        </div>

                        <span>›</span>

                    </div>

                </div>

            </div>

        </div>

    `);
}

function tutupPopupLevelKanji() {

    const popup = document.getElementById("popupLevelKanji");

    if (popup) {
        popup.remove();
    }

}

// Tampilan Level Latihan Kana
function tampilLevelLatihan() {

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="menu-level-latihan">

            <div class="judul-header ada-kembali">
                
              <div class="judul-kiri">
                <h2>Tebak Kana</h2>
              </div>

                <button class="tombol-kembali"
                    onclick="tampilLatihan()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                    
                </button>

            </div>

            <div class="content-grid">

                <!-- LEVEL 1 -->
                <div class="card-content"
                    onclick="popupLevel(1)">

                    <span class="material-symbols-rounded
                     lvl-1">
                        looks_one
                    </span>

                    <div>
                        <h3>Level 1 — Dasar</h3>

                        <p>
                            Hiragana dan Katakana dasar.
                        </p>
                    </div>

                    <span class="panah-latihan">›</span>

                </div>


                <!-- LEVEL 2 -->
                <div class="card-content"
                    onclick="popupLevel(2)">

                    <span class="material-symbols-rounded
                     lvl-2">
                        looks_two
                    </span>

                    <div>
                        <h3>Level 2 — Menengah</h3>

                        <p>
                            Dakuten, Handakuten, Yōon
                            dan campuran.
                        </p>
                    </div>

                    <span class="panah-latihan">›</span>

                </div>


                <!-- LEVEL 3 -->
                <div class="card-content"
                    onclick="popupLevel(3)">

                    <span class="material-symbols-rounded
                     lvl-3">
                        looks_3
                    </span>

                    <div>
                        <h3>Level 3 — Lanjutan</h3>

                        <p>
                            Seluruh materi
                            sebelumnya, kana -> romaji, romaji -> kana.
                        </p>
                    </div>

                    <span class="panah-latihan">›</span>

                </div>

            </div>

        </div>

    `;

    sembunyiNavbar();
    scrollAtas();
}
// TAMPILAN SOAL KANA LEVEL 1 - 3
function mulaiLatihanHuruf(level = 1) {

    levelLatihanAktif = level;
    document.getElementById("app").style.display = "none";

    soalSekarang = 0;
    skorLatihan = 0;
    jawabanDipilih = null;
    sudahDikonfirmasi = false;
    hasilSesi = [];

    // Siapkan soal berdasarkan level
    if (level === 1) {

        jumlahSoalLatihan = 10;

        soalLatihanAktif =
            ambilSoalCampuran(dataHiraganaDasar, dataKatakanaDasar, jumlahSoalLatihan);

    } else if (level === 2) {

    jumlahSoalLatihan = 20;

    const semuaHiragana = [
        ...dataHiraganaDasar,
        ...dataHiraganaDakuten,
        ...dataHiraganaHandakuten,
        ...dataHiraganaYoon
    ];

    const semuaKatakana = [
        ...dataKatakanaDasar,
        ...dataKatakanaDakuten,
        ...dataKatakanaHandakuten,
        ...dataKatakanaYoon
    ];

    soalLatihanAktif = ambilSoalCampuran(
        semuaHiragana,
        semuaKatakana,
        jumlahSoalLatihan
    );

    } else if (level === 3) {

console.log("LEVEL 3 DIPANGGIL");

    jumlahSoalLatihan = 30;
console.log("Jumlah soal:", jumlahSoalLatihan);
    const semuaHiragana = [
        ...dataHiraganaDasar,
        ...dataHiraganaDakuten,
        ...dataHiraganaHandakuten,
        ...dataHiraganaYoon
    ];
console.log(
        "Total data Hiragana:",
        semuaHiragana.length);
    const semuaKatakana = [
        ...dataKatakanaDasar,
        ...dataKatakanaDakuten,
        ...dataKatakanaHandakuten,
        ...dataKatakanaYoon
    ];
console.log(
        "Total data Katakana:",
        semuaKatakana.length
    );
console.log("SEBELUM AMBIL CAMPURAN");

console.log(
    "FUNGSI CAMPURAN:",
    typeof ambilSoalCampuran
);

console.log(
    "ISI FUNGSI:",
    ambilSoalCampuran.toString()
);

soalLatihanAktif = ambilSoalCampuran(
    semuaHiragana,
    semuaKatakana,
    jumlahSoalLatihan
);

console.log(
    "HASIL SOAL AKTIF:",
    soalLatihanAktif
);

console.log(
    "JUMLAH SOAL AKTIF:",
    soalLatihanAktif.length
);

console.log("SESUDAH AMBIL CAMPURAN");

    }

    document.getElementById("isi").innerHTML = `

        <div class="soal-container">

            <div class="judul-header ada-kembali">

              <div class="judul-kiri">
                <h2>Tebak Huruf</h2>
              </div>

                <button class="tombol-kembali"
                    onclick="konfirmasiKeluarLatihan()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                    
                </button>

            </div>

<div class="content-grid">

            <div class="soal-card">

                <div class="soal-header">

                    <span class="nomor-soal">
                        1 / ${jumlahSoalLatihan}
                    </span>

                    <button
                        class="tombol-info-soal"
                        onclick="infoSoal()">

                        <span class="material-symbols-rounded">
                            info
                        </span>

                    </button>

                </div>

                <div class="huruf-soal">
                    あ
                </div>

                <div class="instruksi-soal">
                    Pilih romaji yang benar
                </div>

                <div class="pemisah-soal"></div>

                <div class="pilihan-card">

                    <button onclick="pilihJawaban(this)">
                        a
                    </button>

                    <button onclick="pilihJawaban(this)">
                        i
                    </button>

                    <button onclick="pilihJawaban(this)">
                        u
                    </button>

                    <button onclick="pilihJawaban(this)">
                        e
                    </button>

                </div>

                <button
                    id="btnKonfirmasi"
                    class="tombol-konfirmasi"
                    style="display: none;"
                    onclick="konfirmasiJawaban()">
                    Konfirmasi
                </button>

                <button
                    id="btnBerikutnya"
                    class="tombol-berikutnya"
                    style="display: none;"
                    onclick="soalBerikutnya()">
                    Berikutnya
                </button>

            </div>
</div>
        </div>
    `;

    tampilkanSoal();
    scrollAtas();
}



// TAMPILAN UTAMA PROGRES
function tampilProgress(tombol = null) {

    if (tombol) {
        aktifNav(tombol);
    } else {
        const tombolProgress = document.querySelectorAll(".nav-item")[3];
        aktifNav(tombolProgress);
    }

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="menu-progress">

            <div class="judul-header">
                <span class="material-symbols-rounded logo-halaman">
                bar_chart
                </span>
                <h2>Progress</h2>
            </div>

<div class="content-grid">

            <div class="progress-ringkasan">

                <div class="progress-ringkasan-header">
                    <h3>📚 Progress Belajar</h3>
                    <span class="material-symbols-rounded">
                        trending_up
                    </span>
                </div>

                <div class="progress-item">

                    <div class="progress-item-header">
                        <span>Hiragana</span>
                        <span>0%</span>
                    </div>

                    <div class="progress-track">
                        <div class="progress-fill" style="width: 0%;"></div>
                    </div>

                </div>

                <div class="progress-item">

                    <div class="progress-item-header">
                        <span>Katakana</span>
                        <span>0%</span>
                    </div>

                    <div class="progress-track">
                        <div class="progress-fill" style="width: 0%;"></div>
                    </div>

                </div>

                <div class="progress-item">

                    <div class="progress-item-header">
                        <span>Kanji N5</span>
                        <span>0%</span>
                    </div>

                    <div class="progress-track">
                        <div class="progress-fill" style="width: 0%;"></div>
                    </div>

                </div>

            </div>


            <div class="progress-ringkasan">

                <div class="progress-ringkasan-header">
                    <h3>🎯 Target Hari Ini</h3>
                    <span class="material-symbols-rounded">
                        flag
                    </span>
                </div>

                <div class="target-info">
                    <strong>0 / 10</strong>
                    <span>Latihan selesai</span>
                </div>

            </div>


            <div class="progress-ringkasan">

                <div class="progress-ringkasan-header">
                    <h3>🔥 Aktivitas</h3>
                    <span class="material-symbols-rounded">
                        local_fire_department
                    </span>
                </div>

                <div class="aktivitas-info">
                    <strong>0</strong>
                    <span>hari belajar berturut-turut</span>
                </div>

            </div>
</div>
        </div>

    `;

    tampilNavbar();
    scrollAtas();
}
// TAMPILAN PENGATURAN
function tampilPengaturan(tombol) {

    aktifNav(tombol);

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="menu-pengaturan">

            <div class="judul-header">
            <span class="material-symbols-rounded
             logo-halaman">settings</span>
                <h2>Pengaturan</h2>
            </div>
            
<div class="content-grid">

            <div class="pengaturan-section">

                <h3>Tampilan</h3>

                <div class="setting-card">
                    <div>
                        <h4>🌙 Mode Gelap</h4>
                        <p>Gunakan tampilan gelap.</p>
                    </div>

                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>

            </div>

            <div class="pengaturan-section">

                <h3>🔊 Suara</h3>

                <div class="setting-card">
                    <div>
                        <h4>Efek Suara</h4>
                        <p>Aktifkan suara saat latihan.</p>
                    </div>

                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider"></span>
                    </label>
                </div>

            </div>

            <div class="pengaturan-section">

                <h3>📚 Belajar</h3>

                <div class="setting-card">
                    <div>
                        <h4>Latihan</h4>
                        <p>Atur preferensi latihan.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

                <div class="setting-card">
                    <div>
                        <h4>🔄 Reset Progress</h4>
                        <p>Hapus seluruh progress belajar.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

            </div>

            <div class="pengaturan-section">

                <h3>ℹ️ Tentang</h3>

                <div class="setting-card">
                    <div>
                        <h4>Tentang NihonGo</h4>
                        <p>Informasi aplikasi.</p>
                    </div>

                    <span class="panah-latihan">›</span>
                </div>

            </div>
</div>
        </div>

    `;

    tampilNavbar();
    scrollAtas();
}
