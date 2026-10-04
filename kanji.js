//fariabel home
let asalHalaman = "home";
let tabKatakanaAktif = "dasar";

//fungsi menampilkan menu kanji
function tampilKanji(asal ="home") {

    asalHalaman = asal;
    console.log("Kanji dibuka dari:", asalHalaman);

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `
    
<div class="menu-kanji-container">
    <div class="judul-header ada-kembali">
      <div class="judul-kiri">
        <span class="logo-halaman-kan">漢</span>
        <h2>Kanji</h2>
      </div>
        <button class="tombol-kembali" onclick="kembali()">                          <span class="material-symbols-rounded">
                        undo
          </span></button>

    </div>
 <div class="content-grid">

    <div class="search-kanji">
        <span class="material-symbols-rounded">search</span>
        <input type="text" id="cariKanji"
               placeholder="Cari kanji, arti, atau romaji"
               oninput="cariKanji()">

        <span class="material-symbols-rounded"
              id="clearSearch"
              onclick="hapusPencarian()">close</span>
    </div>

    <div id="hasilPencarian"></div>

    <div class="progress-kanji" id="n5Card" onclick="toggleN5()">

        <div class="header-level">
            <h3>N5 Kanji</h3>
            <span id="panahN5">▶</span>
        </div>

        <div class="progress">
            <div id="bar-progress" class="progress-bar"></div>
        </div>

        <div class="info-progress">
            <span id="angka-progress">0/0 Kanji</span>
            <span id="persen-progress">0%</span>
        </div>

    </div>

    <div id="babN5" class="bab-list">

        <button class="bab-kanji" onclick="bab1()">
            <span>Bab 1 - Angka & Waktu</span>
            <span>›</span>
        </button>

        <button class="bab-kanji" onclick="bab2()">
            <span>Bab 2 - Orang & Keluarga</span>
            <span>›</span>
        </button>

        <button class="bab-kanji" onclick="bab3()">
            <span>Bab 3 - Sekolah & Belajar</span>
            <span>›</span>
        </button>

        <button class="bab-kanji" onclick="bab4()">
            <span>Bab 4 - Tempat & Arah</span>
            <span>›</span>
        </button>

        <button class="bab-kanji" onclick="bab5()">
            <span>Bab 5 - Aktivitas Sehari-hari</span>
            <span>›</span>
        </button>

        <button class="bab-kanji" onclick="bab6()">
            <span>Bab 6 - Anggota Tubuh</span>
            <span>›</span>
        </button>

    </div>
 </div>
</div>
    `;

    scrollAtas();
    updateProgressKanji();
    sembunyiNavbar();
}
//fungsi rotasi indikator bab
function toggleN5() {
    const bab = document.getElementById("babN5");
    const panah = document.getElementById("panahN5");
    const card = document.getElementById("n5Card");

    bab.classList.toggle("buka");

    if (bab.classList.contains("buka")) {
        panah.style.transform = "rotate(90deg)";
        card.classList.add("aktif");
    } else {
        panah.style.transform = "rotate(0deg)";
        card.classList.remove("aktif");
    }
}

//fungsi menampilkan kanjiN5 bab1
function bab1() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
            <div class="judul-kiri">
                <h3>Bab 1 - Angka & Waktu</h3>
            </div>

                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 20 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan angka, uang dan waktu.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 1)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">

                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(1);
    tampilkanCentangBab();
}

function bab2() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h3>Bab 2 - Orang & Keluarga</h3>
              </div>
                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 20 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan orang, keluarga, dan kehidupan sehari-hari.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 2)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">
                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(2);
    tampilkanCentangBab();
}

function bab3() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h3>Bab 3 - Sekolah & Belajar</h3>
              </div>
                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 20 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan sekolah, belajar, membaca, menulis, dan ujian.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 3)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">
                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(3);
    tampilkanCentangBab();
}

function bab4() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h3>Bab 4 - Tempat & Arah</h3>
              </div>
                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 20 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan tempat, arah, lokasi, dan transportasi.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 4)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">
                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(4);
    tampilkanCentangBab();
}

function bab5() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h3>Bab 5 - Aktivitas <br>Sehari-hari</h3>
              </div>
                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 23 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan aktivitas dan kegiatan sehari-hari.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 5)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">
                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(5);
    tampilkanCentangBab();
}

function bab6() {
    document.getElementById("isi").innerHTML = `
        <div class="bab-kanji-container">

            <div class="judul-header ada-kembali">
              <div class="judul-kiri">
                <h3>Bab 6 - Anggota Tubuh</h3>
              </div>
                <button class="tombol-kembali"
                    onclick="kembaliKeKanji()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>
            </div>
<div class="content-grid">

            <div class="info-bab">
                <span>📚 12 Kanji</span>
                <span>✅ <span id="jumlahDipelajari">0</span> Dipelajari</span>
            </div>

            <p class="deskripsi-bab">
                Kanji yang berkaitan dengan anggota tubuh.
            </p>

            <div class="grid-kanji" id="gridKanji"></div>
</div>
        </div>
    `;

    const grid = document.getElementById("gridKanji");

    let html = "";

    kanjiN5
        .filter(k => k.bab === 6)
        .forEach(k => {

            html += `
                <div class="card-kanji" onclick="detailKanji(${k.id})">
                    <div class="ceklis-kanji" data-id="${k.id}"></div>
                    <div class="huruf-kanji">${k.kanji}</div>
                    <div class="arti-kanji">${k.arti}</div>
                </div>
            `;
        });

    grid.innerHTML = html;

    sembunyiNavbar();
    scrollAtas();
    updateJumlahDipelajari(6);
    tampilkanCentangBab();
}

//fungsi info kanji
function detailKanji(id, arah = "kanan") {

    const data = kanjiN5.find(item => item.id === id);

    document.getElementById("isi").innerHTML = `
<div class="detail-kanji-container">
        <div class="judul-header ada-kembali">

            <h2>Detail Kanji</h2>
            <button class="tombol-kembali" onclick="kembaliKeBab(${data.bab})">
            <span class="material-symbols-rounded">
                        undo
                    </span>
            </button>

        </div>
<div class="content-grid">

<div class="detail-kanji">

    <div class="kanji-card">

        <div class="kanji-card-inner" onclick="flipCard()">

            <div class="kanji-card-front">

                <button id="cekDepan${id}"
                    class="tombol-centang"
                    onclick="event.stopPropagation(); toggleCentang(${id})">
                </button>

                <div class="kanji-besar">
                    ${data.kanji}
                </div>

                <div class="arti-kanji-besar">
                    ${data.arti}
                </div>

                <p class="flip-info">
                    Ketuk untuk membalik
                </p>

                <p class="info-level">
                    Kanji N5 • Bab ${data.bab}
                </p>

            </div>

            <div class="kanji-card-back">

               <h2>Detail Kanji</h2>

               <button id="cekBelakang${id}"
                    class="tombol-centang"
                    onclick="event.stopPropagation(); toggleCentang(${id})">
               </button>

               <div class="card-info">
           <h3>📚 Cara Baca</h3>
           <p><b>On:</b> ${data.onyomi}</p>
           <p><b>Kun:</b> ${data.kunyomi}</p>


           <h3>📝 Contoh Kata</h3>
           ${data.contohKata.map(item => `
           <p>${item.kata}(${item.baca})</p>
           <p>${item.arti}</p>
            `).join("")}


           <h3>💬 Contoh Kalimat</h3>
           <p>${data.kalimat}</p>
           <p>${data.romaji}</p>
           <p>${data.artiKalimat}</p>

                <p class="flip-info">
                    Ketuk untuk membalik
                </p>
               </div>



            </div>

        </div>

    </div>

</div>

      <div class="navigasi-kanji">

        <button
        onclick="kanjiSebelumnya(${id})"
        ${id === kanjiN5[0].id ? "disabled" : ""}>
        Sebelumnya
        </button>

        <span>${id} / ${kanjiN5.length}</span>

       <button
        onclick="kanjiBerikutnya(${id})"
        ${id === kanjiN5[kanjiN5.length - 1].id ? "disabled" : ""}>
        Berikutnya
       </button>

      </div>
</div>
</div>
    `;
const detail = document.querySelector(".detail-kanji");

detail.classList.add(
    arah === "kanan" ? "slide-kanan" : "slide-kiri"
);
    sembunyiNavbar();
    scrollAtas();
    tampilkanCentang(id);
}

//fungsi kanjiBerikutnya
function kanjiBerikutnya(id) {
    const index = kanjiN5.findIndex(item => item.id === id);

    if (index < kanjiN5.length - 1) {
        detailKanji(kanjiN5[index + 1].id, "kanan");
    }
}

function kanjiSebelumnya(id) {
    const index = kanjiN5.findIndex(item => item.id === id);

    if (index > 0) {
        detailKanji(kanjiN5[index - 1].id, "kiri");
    }
}
function cariKanji(){

    const keyword = document
        .getElementById("cariKanji")
        .value
        .toLowerCase();

    const clear = document.getElementById("clearSearch");
    if (keyword === "") {
    clear.style.display = "none";
    } else {
    clear.style.display = "block";
    }
    const hasil = document.getElementById("hasilPencarian");
    
    const n5Card = document.getElementById("n5Card");
    const bab = document.getElementById("babN5");
    const panah = document.getElementById("panahN5");
   if (keyword === "") {
      hasil.innerHTML = "";
      n5Card.style.display = "block";
      return;
  }

   n5Card.style.display = "none";

// Tutup daftar bab jika sedang terbuka
   bab.classList.remove("buka");
   panah.style.transform = "rotate(0deg)";
   n5Card.classList.remove("aktif");

   n5Card.style.display = "none";

    let html = "";

    let progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};

    kanjiN5.forEach(k=>{

        if(
            k.kanji.includes(keyword) ||
            k.arti.toLowerCase().includes(keyword) ||
            k.onyomi.toLowerCase().includes(keyword) ||
            k.kunyomi.toLowerCase().includes(keyword)
        ){

            html += `
      <div class="hasil-kanji"
      onclick="detailKanji(${k.id})">

      ${progress[k.id] ? `<div class="ceklis-hasil">✓</div>` : ""}

      <h3>${k.kanji}</h3>

      <p>${k.arti}</p>

      <p>${k.onyomi}</p>

      <p>Bab ${k.bab}</p>

      </div>
`;

        }

    });

    if(html===""){
        html="<p class='kosong'>Tidak ada kanji yang ditemukan.</p>";
    }

    hasil.innerHTML=html;

}
function hapusPencarian() {

    const input = document.getElementById("cariKanji");
    input.value = "";
    cariKanji();
    input.focus();

}
// FUNGSI KANJI FLIP
function flipCard() {
    const kartu = document.querySelector(".kanji-card-inner");

    kartu.classList.toggle("flip");
}

function tampilkanCentangBab() {

    const progress = JSON.parse(localStorage.getItem("kanjiProgress")) || {};
    const ceklis = document.querySelectorAll(".ceklis-kanji");

    ceklis.forEach(item => {

        const id = item.dataset.id;

        if (progress[id]) {
            item.innerHTML = "✓";
            item.classList.add("selesai");
        } else {
            item.innerHTML = "";
            item.classList.remove("selesai");
        }

    });

}

// Kembali Per Bab
function kembaliKeBab(bab) {

    switch (bab) {
        case 1: bab1(); break;
        case 2: bab2(); break;
        case 3: bab3(); break;
        case 4: bab4(); break;
        case 5: bab5(); break;
        case 6: bab6(); break;
    }

}

// SCROLL ATAS
function scrollAtas() {
    window.scrollTo({
        top: 0,

    });
}

// Tampilkan Navbar
function tampilNavbar() {
    document.getElementById("bottomNav").style.display = "flex";
}

function sembunyiNavbar() {
    document.getElementById("bottomNav").style.display = "none";
}