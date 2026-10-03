//fungi tombol centang
function toggleCentang(id) {
    let progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};

    progress[id] = !progress[id];

    localStorage.setItem("kanjiProgress", JSON.stringify(progress));

    tampilkanCentang(id);

    updateProgressKanji();
   
    const data = kanjiN5.find(k => k.id === id);
    updateJumlahDipelajari(data.bab);
}

function tampilkanCentang(id) {

    const depan = document.getElementById(`cekDepan${id}`);
    const belakang = document.getElementById(`cekBelakang${id}`);

    let progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};

    [depan, belakang].forEach(tombol => {
        if (!tombol) return;

        if (progress[id]) {
            tombol.innerHTML = "✓";
            tombol.classList.add("selesai");
        } else {
            tombol.innerHTML = "";
            tombol.classList.remove("selesai");
        }
    });
}

function hitungProgressKanji() {

    let progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};

    return Object.values(progress).filter(status => status).length;

}
function updateProgressKanji() {

    const angka = document.getElementById("angka-progress");
    const persenText = document.getElementById("persen-progress");
    const bar = document.getElementById("bar-progress");

    // Kalau bukan di halaman Kanji, hentikan fungsi
    if (!angka || !persenText || !bar) return;

    const jumlahBelajar = hitungProgressKanji();
    const totalKanji = kanjiN5.length;

    const persen = Math.round((jumlahBelajar / totalKanji) * 100);

    angka.textContent = `${jumlahBelajar}/${totalKanji} Kanji`;
    persenText.textContent = `${persen}%`;
    bar.style.width = `${persen}%`;

}

function hitungKanjiBab(bab) {

    const progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};

    let jumlah = 0;

    kanjiN5.forEach(kanji => {

        if (kanji.bab === bab && progress[kanji.id]) {
            jumlah++;
        }

    });

    return jumlah;
}
function updateJumlahDipelajari(bab) {

    const jumlah = document.getElementById("jumlahDipelajari");

    if (!jumlah) return;

    jumlah.textContent = hitungKanjiBab(bab);

}
function sudahDipelajari(id) {
    let progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};
    return progress[id] === true;
}


//  TAMBAH PROGRES HURUF
function tambahProgresHuruf(huruf) {

    if (!progresLatihan[huruf]) {
        progresLatihan[huruf] = 0;
    }

    progresLatihan[huruf]++;

    localStorage.setItem(
        "progresLatihan",
        JSON.stringify(progresLatihan)
    );
}
//  GET PROGRES HURUF KANA
function getProgresHuruf(huruf) {
    return Math.min(progresLatihan[huruf] || 0, 10);
}
// HITUNG HURUF YANG SUDAH DIKUASAI
function hitungProgresHuruf(data) {

    let jumlahDikuasai = 0;

    data.forEach(item => {

        const huruf = item[0];
        const jumlahBenar = progresLatihan[huruf] || 0;

        if (jumlahBenar >= 10) {
            jumlahDikuasai++;
        }

    });

    return jumlahDikuasai;
}