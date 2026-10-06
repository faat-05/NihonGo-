
let scrollPos = 0;

function tutupPopupInfo() {
    document.getElementById("popupInfo").style.display = "none";

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPos);
}
function infoHuruf(huruf, romaji, contoh, arti){

    document.getElementById("huruf").textContent = huruf;
    document.getElementById("romaji").textContent = romaji;
    document.getElementById("contoh").textContent = contoh;
    document.getElementById("arti").textContent = arti;
    scrollPos = window.scrollY;
    document.getElementById("popup").style.display = "flex";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = "100%";
}
function popupInfoHiragana(){

    document.getElementById("judulInfo").textContent =
    "📖 Tentang Hiragana";

    document.getElementById("isiInfo").innerHTML = `
      <p>
    Hiragana adalah huruf dasar bahasa Jepang yang digunakan
    untuk menulis kata asli Jepang, partikel, dan akhiran kata.
    </p>

    <br>

    <b>Digunakan untuk:</b>

    <ul style="text-align:left;margin-top:10px;">

        <li>Kata asli Jepang</li>

        <li>Partikel (は・を・に)</li>

        <li>Akhiran kata (Okurigana)</li>

    </ul>

    <br>

    <b>Contoh:</b>

    <p style="font-size:22px;">
    わたし は がくせい です
    </p>

    <p>Saya adalah seorang pelajar.</p>
    `;
    scrollPos = window.scrollY;
    document.getElementById("popupInfo").style.display = "flex";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = "100%";
}
function popupInfoKatakana(){

    document.getElementById("judulInfo").textContent =
    "📖 Tentang Katakana";

    document.getElementById("isiInfo").innerHTML = `

    <p>
    Katakana adalah huruf Jepang yang digunakan
    untuk menulis kata serapan dari bahasa asing,
    nama orang asing, nama negara, suara (onomatope), 
    dan nama ilmiah.
    </p>

    <br>

    <b>Digunakan untuk:</b>

    <ul style="text-align:left; margin-top:10px;">

        <li>Kata serapan (Gairaigo)</li>

        <li>Nama orang asing</li>

        <li>Nama negara asing</li>

        <li>Nama merek atau produk</li>

        <li>Onomatope (kata tiruan bunyi)</li>

    </ul>

    <br>

    <b>Contoh:</b>

    <p style="font-size:22px;">
    テレビ ・ コンピューター ・ コーヒー
    </p>

    <p>
    (Televisi • Komputer • Kopi)
    </p>

    `;
    scrollPos = window.scrollY;
    document.getElementById("popupInfo").style.display = "flex";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = "100%";
}

//  POPUP INFO LEVEL
function popupLevel(level) {

    let judul = "";
    let materi = "";
    let tombolMulai = "";
    let jumlahSoal = 0;

    if (level === 1) {

        judul = "Level 1 — Dasar";
        jumlahSoal = 10;

        materi = `
            <p>• Hiragana dasar</p>
            <p>• Katakana dasar</p>
        `;

        tombolMulai = `
            <button class="tombol-mulai"
                onclick="mulaiLatihanHuruf(1)">
                Mulai Latihan
            </button>
        `;

    } else if (level === 2) {

        judul = "Level 2 — Menengah";
        jumlahSoal = 20;

        materi = `
            <p>• Hiragana & Katakana dasar</p>
            <p>• Dakuten, Handakuten, Yōon</p>
            <p>• Campuran Hiragana & Katakana</p>
        `;

        tombolMulai = `
            <button class="tombol-mulai" onclick="mulaiLatihanHuruf(2)">
                Mulai Latihan
            </button>
        `;

    } else {

    judul = "Level 3 — Lanjutan";
    jumlahSoal = 30;

    materi = `
        <p>• Hiragana & Katakana</p>
        <p>• Dakuten, Handakuten & Yōon</p>
        <p>• 15 soal Kana → Romaji</p>
        <p>• 15 soal Romaji → Kana</p>
    `;

    tombolMulai = `
        <button class="tombol-mulai"
            onclick="mulaiLatihanHuruf(3)">
            Mulai Latihan
        </button>
    `;
    }

    document.getElementById("isi").insertAdjacentHTML("beforeend", `

        <div class="popup-level" id="popupLevel">

            <div class="popup-level-content">

                <button class="popup-level-close"
                    onclick="tutupPopupLevel()">
                    ×
                </button>

                <div class="popup-level-icon">
                    🎯
                </div>

                <h2>${judul}</h2>

                <div class="info-jumlah-soal">
                  <span>📝</span>
                  <strong>${jumlahSoal} Soal</strong>
                </div>

                <div class="info-latihan">

                    <h3>📚 Materi</h3>

                    <div class="materi-level">
                        ${materi}
                    </div>

                </div>

                <div class="info-latihan">

                    <h3>🧠 Penguasaan</h3>

                    <p>
                        Jawaban benar meningkatkan penguasaan item.
                    </p>

                    <p>
                        Item yang masih lemah akan lebih diutamakan
                        pada latihan berikutnya.
                    </p>

                </div>

                <div class="info-latihan">

                    <h3>🪙 Reward</h3>

                    <p>
                        Jawab pertanyaan dengan benar untuk
                        mendapatkan poin.
                    </p>

                </div>

                ${tombolMulai}

            </div>

        </div>

    `);
}
// Tutup Popup
function tutupPopupLevel() {
    document.getElementById("popupLevel").remove();
}

//  POPUP CEK HASIL LATIHAN
function cekHasilLatihan() {

    hasilSesi.forEach(hasil => {

        if (hasil.benar) {
            tambahProgresHuruf(hasil.huruf);
        }

    });

    const popup =
    document.getElementById("popupHasilLatihan");
    popup.dataset.mode = "kana";
  
const skor =
    document.getElementById("skorHasil");

const jumlahBenar =
    document.getElementById("jumlahBenar");

const jumlahSalah =
    document.getElementById("jumlahSalah");

const pesanHasil =
    popup.querySelector(".popup-hasil-pesan");

if (pesanHasil) {
    pesanHasil.innerText =
        `Kamu sudah menyelesaikan ${jumlahSoalLatihan} soal.`;
}

skor.innerText =
    `${skorLatihan} / ${jumlahSoalLatihan}`;

jumlahBenar.innerText =
    skorLatihan;

jumlahSalah.innerText =
    jumlahSoalLatihan - skorLatihan;

popup.classList.add("aktif");
}
function tutupPopupHasil() {
    document
        .getElementById("popupHasilLatihan")
        .classList.remove("aktif");
}
// DETAIL HASIL LATIHAN
function tampilkanDetailHasil() {

    const popup =
        document.getElementById(
            "popupHasilLatihan"
        );

    const content =
        popup.querySelector(
            ".popup-hasil-content"
        );


    content.innerHTML = `

        <div class="popup-hasil-icon">
            📋
        </div>

        <h2>Detail Jawaban</h2>

        <p class="popup-hasil-pesan">
            Berikut hasil jawaban kamu.
        </p>


        <div class="detail-jawaban-list">

            ${hasilSesi.map((hasil, index) => `

                <div class="
                    detail-jawaban
                    ${
                        hasil.benar
                            ? "detail-benar"
                            : "detail-salah"
                    }
                ">

                    <div class="detail-nomor">
                        ${index + 1}
                    </div>


                    <div class="detail-info">

                        <span>
                            Soal:
                            <b>${hasil.soal}</b>
                        </span>


                        <span>
                            Jawaban kamu:
                            <b>${hasil.jawaban}</b>
                        </span>


                        ${
                            hasil.benar

                            ? `
                                <span class="detail-status">
                                    ✓ Jawaban benar
                                </span>
                            `
                            : `
                                <span>
                                    Jawaban benar:
                                    <b>
                                        ${hasil.jawabanBenar}
                                    </b>
                                </span>

                                <span class="detail-status">
                                    ✕ Jawaban salah
                                </span>

                            `
                        }

                    </div>

                </div>

            `).join("")}

        </div>


        <div class="tombol-hasil-container">

            <button
                class="tombol-kembali-hasil"
                onclick="kembaliKeHasilLatihan()">

                Kembali

            </button>

        </div>

    `;
}

// FUNGSI KEMBALI KE HASIL LATIHAN
function kembaliKeHasilLatihan() {

    const popup =
        document.getElementById("popupHasilLatihan");

    const content =
        popup.querySelector(".popup-hasil-content");

    const jumlahSoal =
        sedangLatihanKanji
            ? dataLatihanKanji.length
            : jumlahSoalLatihan;

    const skor =
        sedangLatihanKanji
            ? jawabanBenarKanji
            : skorLatihan;

    content.innerHTML = `

        <div class="popup-hasil-icon">
            🎉
        </div>

        <h2>Latihan Selesai!</h2>

        <p class="popup-hasil-pesan">
            Kamu sudah menyelesaikan ${jumlahSoal} soal.
        </p>

        <div class="skor-hasil">

            <span>Skor Kamu</span>

            <strong id="skorHasil">
                ${skor} / ${jumlahSoal}
            </strong>

        </div>

        <div class="hasil-statistik">

            <div class="statistik benar">

                <span>✓</span>

                <div>

                    <strong id="jumlahBenar">
                        ${skor}
                    </strong>

                    <small>Benar</small>

                </div>

            </div>

            <div class="statistik salah">

                <span>×</span>

                <div>

                    <strong id="jumlahSalah">
                        ${jumlahSoal - skor}
                    </strong>

                    <small>Salah</small>

                </div>

            </div>

        </div>

        <button
            class="tombol-detail-hasil"
            onclick="tampilkanDetailHasil()">
            Detail Jawaban
        </button>

        <div class="tombol-hasil-container">

            <button
                class="tombol-latihan-lagi"
                onclick="ulangiLatihanDariHasil()">
                Latihan Lagi
            </button>

            <button
                class="tombol-kembali-hasil"
                onclick="kembaliDariHasil()">
                Kembali
            </button>

        </div>

    `;
}

//  POPUP INFO SOAL CARD 
function infoSoal() {
    document
        .getElementById("popupInfoSoal")
        .classList.add("aktif");
}

function tutupInfoSoal() {
    document
        .getElementById("popupInfoSoal")
        .classList.remove("aktif");
}

// POPUP PERINGATAN KELUAR LATIHAN 
function konfirmasiKeluarLatihan() {

    // Belum mengerjakan soal
    if (hasilSesi.length === 0) {
        keluarLatihan();
        return;
    }

    // Sudah mengerjakan soal
    document
        .getElementById("popupKeluarLatihan")
        .classList.add("aktif");
}

function tutupPopupKeluar() {
    document
        .getElementById("popupKeluarLatihan")
        .classList.remove("aktif");
}

function keluarLatihan() {

    tutupPopupKeluar();

    // Reset latihan
    soalSekarang = 0;
    skorLatihan = 0;
    jawabanDipilih = null;
    sudahDikonfirmasi = false;

    // Kembali ke level latihan
    tampilLevelLatihan();
}


/* POPUP COMING SOON */
function popupPet() {
    const popup = document.getElementById("popup-pet");

    popup.style.display = "flex";
}

function tutupPopupPet() {
    const popup = document.getElementById("popup-pet");

    popup.style.display = "none";
}

// POPUP CEK HASIL LATIHAN KANJI
function cekHasilLatihanKanji() {

    const popup =
        document.getElementById("popupHasilLatihan");

    popup.dataset.mode = "kanji";

    const skor =
        document.getElementById("skorHasil");

    const jumlahBenar =
        document.getElementById("jumlahBenar");

    const jumlahSalah =
        document.getElementById("jumlahSalah");

    const pesanHasil =
        popup.querySelector(".popup-hasil-pesan");

    if (pesanHasil) {
        pesanHasil.innerText =
            `Kamu sudah menyelesaikan ${dataLatihanKanji.length} soal.`;
    }

    skor.innerText =
        `${jawabanBenarKanji} / ${dataLatihanKanji.length}`;

    jumlahBenar.innerText =
        jawabanBenarKanji;

    jumlahSalah.innerText =
        dataLatihanKanji.length - jawabanBenarKanji;

    popup.classList.add("aktif");
}


function ulangiLatihanDariHasil() {

    tutupPopupHasil();

    const popup =
        document.getElementById("popupHasilLatihan");

    if (popup.dataset.mode === "kanji") {

        mulaiLatihanKanji(
            babLatihanKanji,
            levelLatihanKanji
        );

    } else {

        mulaiLatihanHuruf(levelLatihanAktif);

    }

}


function kembaliDariHasil() {

    const popup =
        document.getElementById("popupHasilLatihan");

    tutupPopupHasil();

    if (popup.dataset.mode === "kanji") {

        tampilBabKanjiN5();

    } else {

        tampilLevelLatihan();

    }

}