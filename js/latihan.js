// VRIABEL
let progresLatihan = JSON.parse(
    localStorage.getItem("progresLatihan")
) || {};

let levelLatihanAktif = 1;
let soalLatihanAktif = [];
let soalSekarang = 0;
let skorLatihan = 0;
let jawabanDipilih = null;
let sudahDikonfirmasi = false;
let hasilSesi = [];
let jumlahSoalLatihan = 10;

// DATA LATIHAN KANJI
let dataLatihanKanji = [];
let nomorSoalKanji = 0;
let jawabanBenarKanji = 0;
let babLatihanKanji = 0;
let levelLatihanKanji = 0;
let jawabanDipilihKanji = null;
let sudahDikonfirmasiKanji = false;
let hasilSesiKanji = [];

// SISTEM PILIHAN JAWABAN TEBAK HURUF
function pilihJawaban(tombol) {

    if (sudahDikonfirmasi) return;

    document.querySelectorAll(".pilihan-card button").forEach(btn => {
        btn.classList.remove("terpilih");
    });

    tombol.classList.add("terpilih");

    jawabanDipilih = tombol.innerText.trim();

    document.getElementById("btnKonfirmasi").style.display = "block";
}
// KONFIRMASI JAWABAN
function konfirmasiJawaban() {

    if (!jawabanDipilih || sudahDikonfirmasi) return;

    const soal = soalLatihanAktif[soalSekarang];

    sudahDikonfirmasi = true;

    const semuaPilihan =
        document.querySelectorAll(".pilihan-card button");

    semuaPilihan.forEach(btn => {
        btn.disabled = true;
    });


    // =========================
    // TENTUKAN TIPE SOAL
    // =========================

    // Level 3 nomor 16-30
    // ROMAJI → KANA
    const soalRomajiKeKana =
        levelLatihanAktif === 3 && soalSekarang >= 15;


    // =========================
    // TENTUKAN SOAL & JAWABAN
    // =========================

    let soalTampil;
    let jawabanBenar;

    if (soalRomajiKeKana) {

        // Soal: romaji
        // Jawaban benar: kana

        soalTampil = soal[1];
        jawabanBenar = soal[0];

    } else {

        // Soal: kana
        // Jawaban benar: romaji

        soalTampil = soal[0];
        jawabanBenar = soal[1];
    }


    // =========================
    // CEK JAWABAN
    // =========================

    const benar =
        jawabanDipilih === jawabanBenar;


    if (benar) {

        skorLatihan++;

    }


    // =========================
    // SIMPAN HASIL SESI
    // =========================

    hasilSesi.push({

    soal: soalTampil,

    huruf: soal[0],

    jawaban: jawabanDipilih,

    jawabanBenar: jawabanBenar,

    benar: benar

});


    // =========================
    // TANDAI PILIHAN USER
    // =========================

    const pilihanTerpilih =
        document.querySelector(
            ".pilihan-card .terpilih"
        );

    if (pilihanTerpilih) {

        if (benar) {

            pilihanTerpilih.classList.add(
                "jawaban-benar"
            );

        } else {

            pilihanTerpilih.classList.add(
                "jawaban-salah"
            );

        }

    }


    // =========================
    // JIKA SALAH,
    // TAMPILKAN JAWABAN BENAR
    // =========================

    if (!benar) {

        semuaPilihan.forEach(btn => {

            if (
                btn.innerText.trim() ===
                jawabanBenar
            ) {

                btn.classList.add(
                    "jawaban-benar"
                );

            }

        });

    }


    // =========================
    // SEMBUNYIKAN KONFIRMASI
    // =========================

    document.getElementById(
        "btnKonfirmasi"
    ).style.display = "none";


    // =========================
    // TAMPILKAN BERIKUTNYA
    // =========================

    const btnBerikutnya =
        document.getElementById(
            "btnBerikutnya"
        );

    btnBerikutnya.style.display = "block";


    // =========================
    // SOAL TERAKHIR
    // =========================

    if (
        soalSekarang ===
        jumlahSoalLatihan - 1
    ) {

        btnBerikutnya.innerText =
            "Cek Hasil";

        btnBerikutnya.classList.add(
            "tombol-hasil"
        );

    } else {

        btnBerikutnya.innerText =
            "Berikutnya";

        btnBerikutnya.classList.remove(
            "tombol-hasil"
        );

    }
}



// FUNGSI PEMILIHAN SOAL LEVEL 3 DENGAN BENAR
function isHiragana(huruf) {
    return /[\u3040-\u309F]/.test(huruf);
}

function isKatakana(huruf) {
    return /[\u30A0-\u30FF]/.test(huruf);
}

//  PENGACAK
function acakArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}
// TAMPILKAN SOAL 
function tampilkanSoal() {

    const soal = soalLatihanAktif[soalSekarang];

    // Reset
    jawabanDipilih = null;
    sudahDikonfirmasi = false;

    // Nomor soal
    document.querySelector(".nomor-soal").innerText =
        `${soalSekarang + 1} / ${jumlahSoalLatihan}`;

    // =========================
    // TENTUKAN ARAH SOAL
    // =========================

    // Level 3:
    // Soal 1-15  = Kana → Romaji
    // Soal 16-30 = Romaji → Kana

    const romajiKeKana =
        levelLatihanAktif === 3 &&
        soalSekarang >= 15;

    // =========================
    // TAMPILKAN SOAL
    // =========================

    if (romajiKeKana) {

        // Tampilkan ROMAJI
        document.querySelector(".huruf-soal").innerText =
            soal[1];

        document.querySelector(".instruksi-soal").innerText =
            "Pilih huruf yang benar";

    } else {

        // Tampilkan KANA
        document.querySelector(".huruf-soal").innerText =
            soal[0];

        document.querySelector(".instruksi-soal").innerText =
            "Pilih romaji yang benar";
    }

    // =========================
    // PILIHAN JAWABAN
    // =========================

    let pilihan;

    if (romajiKeKana) {

        // =========================
        // ROMAJI → KANA
        // =========================

        pilihan = [soal[0]];

        const soalHiragana =
            isHiragana(soal[0]);

        const soalKatakana =
            isKatakana(soal[0]);

        const jawabanLain = [
            ...new Set(
                soalLatihanAktif
                    .filter(item => {

                        // Jangan ambil soal yang sama
                        if (item[0] === soal[0]) {
                            return false;
                        }

                        // Kalau Hiragana,
                        // ambil Hiragana saja
                        if (soalHiragana) {
                            return isHiragana(item[0]);
                        }

                        // Kalau Katakana,
                        // ambil Katakana saja
                        if (soalKatakana) {
                            return isKatakana(item[0]);
                        }

                        return false;
                    })
                    .map(item => item[0])
            )
        ];

        pilihan.push(
            ...acakArray(jawabanLain).slice(0, 3)
        );

    } else {

        // =========================
        // KANA → ROMAJI
        // =========================

        pilihan = [soal[1]];

        const jawabanLain = [
            ...new Set(
                soalLatihanAktif
                    .filter(item => item[1] !== soal[1])
                    .map(item => item[1])
            )
        ];

        pilihan.push(
            ...acakArray(jawabanLain).slice(0, 3)
        );
    }

    // Acak semua pilihan
    pilihan = acakArray(pilihan);

    // =========================
    // TAMPILKAN PILIHAN
    // =========================

    const container =
        document.querySelector(".pilihan-card");

    container.innerHTML = pilihan.map(jawaban => `
        <button onclick="pilihJawaban(this)">
            ${jawaban}
        </button>
    `).join("");

    // =========================
    // RESET TOMBOL
    // =========================

    document.getElementById("btnKonfirmasi").style.display =
        "none";

    document.getElementById("btnBerikutnya").style.display =
        "none";

    scrollAtas();
}

//   Soal Berikutnya
function soalBerikutnya() {

    soalSekarang++;

    if (soalSekarang >= jumlahSoalLatihan) {
        cekHasilLatihan();
        return;
    }

    tampilkanSoal();
}

// BANK SOAL LEBEL 1 - 3 ///////////////
const dataSoalLevel1 = [
    ...dataHiraganaDasar,
    ...dataKatakanaDasar
];
const dataSoalLevel2 = [
    ...dataHiraganaDasar,
    ...dataKatakanaDasar,

    ...dataHiraganaDakuten,
    ...dataHiraganaHandakuten,
    ...dataHiraganaYoon,

    ...dataKatakanaDakuten,
    ...dataKatakanaHandakuten,
    ...dataKatakanaYoon
];

//  FUNGSI PENGAMBIL SOAL DARI DATA BASE
function ambilSoalAcak(data, jumlah = 10) {

    const dataDenganPrioritas = data.map(soal => {

        const huruf = soal[0];
        const progres = progresLatihan[huruf] || 0;

        let prioritas;

        if (progres < 5) {
            prioritas = 3;
        } else if (progres < 10) {
            prioritas = 2;
        } else {
            prioritas = 1;
        }

        return {
            soal: soal,
            prioritas: prioritas
        };
    });

    // Kelompokkan berdasarkan prioritas
    const prioritasTinggi =
        dataDenganPrioritas.filter(
            item => item.prioritas === 3
        );

    const prioritasSedang =
        dataDenganPrioritas.filter(
            item => item.prioritas === 2
        );

    const prioritasRendah =
        dataDenganPrioritas.filter(
            item => item.prioritas === 1
        );

    // Acak tiap kelompok
    const semua = [
        ...acakArray(prioritasTinggi),
        ...acakArray(prioritasSedang),
        ...acakArray(prioritasRendah)
    ];

    // HILANGKAN SOAL DUPLIKAT
    const soalUnik = [];
    const hurufSudahDipakai = new Set();

    for (const item of semua) {

        const huruf = item.soal[0];

        if (!hurufSudahDipakai.has(huruf)) {

            hurufSudahDipakai.add(huruf);
            soalUnik.push(item.soal);

        }

        // Sudah cukup
        if (soalUnik.length >= jumlah) {
            break;
        }
    }

console.log("=== AMBIL SOAL ACAK ===");
console.log("Jumlah data:", data.length);
console.log("Target:", jumlah);
console.log("Jumlah soal unik:", soalUnik.length);
    return soalUnik;
}

///////////////////////////
function ambilSoalCampuran(dataHiragana, dataKatakana, jumlah) {

    console.log("AMBIL SOAL CAMPURAN MASUK");
    console.log("Data Hiragana:", dataHiragana.length);
    console.log("Data Katakana:", dataKatakana.length);
    console.log("Jumlah:", jumlah);

    const jumlahHiragana = jumlah / 2;
    const jumlahKatakana = jumlah / 2;

    console.log("Target H:", jumlahHiragana);
    console.log("Target K:", jumlahKatakana);

    const hasilHiragana =
        ambilSoalAcak(dataHiragana, jumlahHiragana);

    console.log("Hasil H:", hasilHiragana);

    const hasilKatakana =
        ambilSoalAcak(dataKatakana, jumlahKatakana);

    console.log("Hasil K:", hasilKatakana);

    const hasilAkhir = acakArray([
        ...hasilHiragana,
        ...hasilKatakana
    ]);

    console.log("HASIL AKHIR:", hasilAkhir);

    return hasilAkhir;
}

// LATIHAN KANJI
function tampilkanSoalKanji() {

    const soal = dataLatihanKanji[nomorSoalKanji];

    const dataBab = kanjiN5.filter(
        item => item.bab === babLatihanKanji
    );

    // Ambil 3 jawaban salah
    const pilihanSalah = dataBab
        .filter(item => item.id !== soal.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // Gabungkan jawaban benar + salah
    let pilihan = [
        soal,
        ...pilihanSalah
    ];

    // Acak pilihan
    pilihan.sort(() => Math.random() - 0.5);

    const container =
        document.getElementById("pilihanKanji");

    container.innerHTML = "";

    pilihan.forEach(item => {

        const tombol = document.createElement("button");

        tombol.textContent = item.arti;

        tombol.dataset.id = item.id;

        tombol.onclick = function () {
            pilihJawabanKanji(this);
        };

        container.appendChild(tombol);

    });

    // Tampilkan Kanji
    document.getElementById("soalKanji").textContent =
        soal.kanji;

    // Update nomor soal
    document.querySelector(".nomor-soal").textContent =
        `${nomorSoalKanji + 1} / ${dataLatihanKanji.length}`;

    // Reset pilihan
    jawabanDipilihKanji = null;
    sudahDikonfirmasiKanji = false;

    document.getElementById("btnKonfirmasiKanji").style.display =
        "none";

    document.getElementById("btnBerikutnyaKanji").style.display =
        "none";
}

function pilihJawabanKanji(tombol) {

    if (sudahDikonfirmasiKanji) return;

    const semuaPilihan =
        document.querySelectorAll("#pilihanKanji button");

    semuaPilihan.forEach(btn => {
        btn.classList.remove("terpilih");
    });

    tombol.classList.add("terpilih");

    jawabanDipilihKanji =
        Number(tombol.dataset.id);

    document.getElementById("btnKonfirmasiKanji").style.display =
        "block";
}

function konfirmasiJawabanKanji() {

    if (jawabanDipilihKanji === null) return;

    if (sudahDikonfirmasiKanji) return;

    sudahDikonfirmasiKanji = true;

    const soal = dataLatihanKanji[nomorSoalKanji];

    const semuaPilihan =
        document.querySelectorAll("#pilihanKanji button");

    semuaPilihan.forEach(tombol => {

        const id =
            Number(tombol.dataset.id);

        tombol.disabled = true;

        // Jawaban benar
        if (id === soal.id) {

            tombol.classList.add("jawaban-benar");

        }

        // Jawaban yang dipilih tapi salah
        if (
            id === jawabanDipilihKanji &&
            id !== soal.id
        ) {

            tombol.classList.add("jawaban-salah");

        }

    });

    // Tambahkan skor jika benar
    if (jawabanDipilihKanji === soal.id) {

        jawabanBenarKanji++;

    }

    // Simpan hasil soal
    const tombolDipilih =
        document.querySelector(
            `#pilihanKanji button[data-id="${jawabanDipilihKanji}"]`
        );

    hasilSesiKanji.push({

        soal: soal.kanji,

        jawaban: tombolDipilih
            ? tombolDipilih.textContent
            : "-",

        jawabanBenar: soal.arti,

        benar: jawabanDipilihKanji === soal.id

    });

    document.getElementById("btnKonfirmasiKanji").style.display =
        "none";

    document.getElementById("btnBerikutnyaKanji").style.display =
        "block";
}

function soalBerikutnyaKanji() {

    nomorSoalKanji++;

    if (nomorSoalKanji < dataLatihanKanji.length) {

        tampilkanSoalKanji();

    } else {

        cekHasilLatihanKanji();

    }
}