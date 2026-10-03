// variabel
let tabHiraganaAktif = "dasar";
let dataHiraganaAktif = [];
// VARIABEL DATA HIRAGANA DASAR
const dataHiraganaDasar = [

        ["あ", "a", "あさ", "asa", "Pagi"],
        ["い", "i", "いぬ", "inu", "Anjing"],
        ["う", "u", "うみ", "umi", "Laut"],
        ["え", "e", "えき", "eki", "Stasiun"],
        ["お", "o", "おちゃ", "ocha", "Teh"],

        ["か", "ka", "かさ", "kasa", "Payung"],
        ["き", "ki", "き", "ki", "Pohon"],
        ["く", "ku", "くるま", "kuruma", "Mobil"],
        ["け", "ke", "けさ", "kesa", "Pagi ini"],
        ["こ", "ko", "ここ", "koko", "Di sini"],

        ["さ", "sa", "さかな", "sakana", "Ikan"],
        ["し", "shi", "しお", "shio", "Garam"],
        ["す", "su", "すし", "sushi", "Sushi"],
        ["せ", "se", "せんせい", "sensei", "Guru"],
        ["そ", "so", "そら", "sora", "Langit"],

        ["た", "ta", "たまご", "tamago", "Telur"],
        ["ち", "chi", "ちず", "chizu", "Peta"],
        ["つ", "tsu", "つき", "tsuki", "Bulan"],
        ["て", "te", "て", "te", "Tangan"],
        ["と", "to", "とけい", "tokei", "Jam"],

        ["な", "na", "なまえ", "namae", "Nama"],
        ["に", "ni", "にく", "niku", "Daging"],
        ["ぬ", "nu", "ぬの", "nuno", "Kain"],
        ["ね", "ne", "ねこ", "neko", "Kucing"],
        ["の", "no", "のみもの", "nomimono", "Minuman"],

        ["は", "ha", "はな", "hana", "Bunga"],
        ["ひ", "hi", "ひこうき", "hikouki", "Pesawat"],
        ["ふ", "fu", "ふね", "fune", "Kapal"],
        ["へ", "he", "へや", "heya", "Kamar"],
        ["ほ", "ho", "ほし", "hoshi", "Bintang"],

        ["ま", "ma", "まど", "mado", "Jendela"],
        ["み", "mi", "みず", "mizu", "Air"],
        ["む", "mu", "むし", "mushi", "Serangga"],
        ["め", "me", "め", "me", "Mata"],
        ["も", "mo", "もり", "mori", "Hutan"],

        ["や", "ya", "やま", "yama", "Gunung"],
        ["ゆ", "yu", "ゆき", "yuki", "Salju"],
        ["よ", "yo", "よる", "yoru", "Malam"],

        ["ら", "ra", "らいげつ", "raigetsu", "Bulan depan"],
        ["り", "ri", "りんご", "ringo", "Apel"],
        ["る", "ru", "るす", "rusu", "Tidak di rumah"],
        ["れ", "re", "れいぞうこ", "reizouko", "Kulkas"],
        ["ろ", "ro", "ろうか", "rouka", "Lorong"],

        ["わ", "wa", "わたし", "watashi", "Saya"],
        ["を", "wo", "を", "wo", "Partikel objek"],
        ["ん", "n", "ほん", "hon", "Buku"]

];
// FARIABEL DATA HIRAGANA DAKUTEN
const dataHiraganaDakuten = [

        ["が", "ga", "がっこう", "gakkou", "Sekolah"],
        ["ぎ", "gi", "ぎんこう", "ginkou", "Bank"],
        ["ぐ", "gu", "ぐんたい", "guntai", "Militer"],
        ["げ", "ge", "げんき", "genki", "Sehat"],
        ["ご", "go", "ごはん", "gohan", "Nasi / Makanan"],

        ["ざ", "za", "ざっし", "zasshi", "Majalah"],
        ["じ", "ji", "じかん", "jikan", "Waktu"],
        ["ず", "zu", "ずっと", "zutto", "Terus"],
        ["ぜ", "ze", "ぜんぶ", "zenbu", "Semua"],
        ["ぞ", "zo", "ぞう", "zou", "Gajah"],

        ["だ", "da", "だいがく", "daigaku", "Universitas"],
        ["ぢ", "ji", "はなぢ", "hanaji", "Mimisan"],
        ["づ", "zu", "つづく", "tsuzuku", "Berlanjut"],
        ["で", "de", "でんしゃ", "densha", "Kereta"],
        ["ど", "do", "どうぶつ", "doubutsu", "Hewan"],

        ["ば", "ba", "ばんごはん", "bangohan", "Makan malam"],
        ["び", "bi", "びょういん", "byouin", "Rumah sakit"],
        ["ぶ", "bu", "ぶた", "buta", "Babi"],
        ["べ", "be", "べんきょう", "benkyou", "Belajar"],
        ["ぼ", "bo", "ぼうし", "boushi", "Topi"]

];
// VARIABEL DATA HIRAGANA HANDAKUTEN 
const dataHiraganaHandakuten = [

        ["ぱ", "pa", "パン", "pan", "Roti"],
        ["ぴ", "pi", "ピアノ", "piano", "Piano"],
        ["ぷ", "pu", "プール", "puuru", "Kolam renang"],
        ["ぺ", "pe", "ペン", "pen", "Pulpen"],
        ["ぽ", "po", "ポケット", "poketto", "Saku"]

];
// VARIABEL DATA HIRAGANA YOON
const dataHiraganaYoon = [

        ["きゃ", "kya", "きゃく", "kyaku", "Tamu"],
        ["きゅ", "kyu", "きゅうり", "kyuuri", "Mentimun"],
        ["きょ", "kyo", "きょう", "kyou", "Hari ini"],

        ["しゃ", "sha", "しゃしん", "shashin", "Foto"],
        ["しゅ", "shu", "しゅくだい", "shukudai", "PR"],
        ["しょ", "sho", "しょうゆ", "shouyu", "Kecap asin"],

        ["ちゃ", "cha", "ちゃわん", "chawan", "Mangkuk"],
        ["ちゅ", "chu", "ちゅうごく", "chuugoku", "Tiongkok"],
        ["ちょ", "cho", "ちょうど", "choudo", "Tepat"],

        ["にゃ", "nya", "にゃんこ", "nyanko", "Kucing"],
        ["にゅ", "nyu", "にゅうがく", "nyuugaku", "Masuk sekolah"],
        ["にょ", "nyo", "にょきにょき", "nyokinyoki", "Tumbuh cepat"],

        ["ひゃ", "hya", "ひゃく", "hyaku", "Seratus"],
        ["ひゅ", "hyu", "ひゅうひゅう", "hyuuhyuu", "Suara angin"],
        ["ひょ", "hyo", "ひょう", "hyou", "Macan tutul"],

        ["みゃ", "mya", "みゃく", "myaku", "Denyut"],
        ["みゅ", "myu", "みゅーじっく", "myuujikku", "Musik"],
        ["みょ", "myo", "みょうじ", "myouji", "Nama keluarga"],

        ["りゃ", "rya", "りゃく", "ryaku", "Singkatan"],
        ["りゅ", "ryu", "りゅう", "ryuu", "Naga"],
        ["りょ", "ryo", "りょこう", "ryokou", "Perjalanan"],

        ["ぎゃ", "gya", "ぎゃく", "gyaku", "Kebalikan"],
        ["ぎゅ", "gyu", "ぎゅうにゅう", "gyuunyuu", "Susu"],
        ["ぎょ", "gyo", "ぎょらい", "gyorai", "Torpedo"],

        ["じゃ", "ja", "じゃがいも", "jagaimo", "Kentang"],
        ["じゅ", "ju", "ジュース", "juusu", "Jus"],
        ["じょ", "jo", "じょうず", "jouzu", "Mahir"],

        ["びゃ", "bya", "びょういん", "byouin", "Rumah sakit"],
        ["びゅ", "byu", "びゅーびゅー", "byuubyuu", "Suara angin"],
        ["びょ", "byo", "びょうき", "byouki", "Sakit"],

        ["ぴゃ", "pya", "ぴゃー", "pyaa", "Bunyi"],
        ["ぴゅ", "pyu", "ぴゅあ", "pyua", "Murni"],
        ["ぴょ", "pyo", "ぴょんぴょん", "pyonpyon", "Melompat-lompat"]

];

// Menu Hiragana
// =========================
function tampilHiragana(asal = "home", dariDetail = false) {

    asalHalaman = asal;

    // Kalau masuk dari luar halaman Hiragana,
    // selalu mulai dari Dasar
    if (!dariDetail) {
        tabHiraganaAktif = "dasar";
    }

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="hiragana-container">

            <div class="judul-header ada-kembali">

                <div class="judul-kiri">

                    <h2>Hiragana</h2>

                    <button
                        class="btn-info"
                        onclick="popupInfoHiragana()">
                        i
                    </button>

                </div>

                <button
                    class="tombol-kembali"
                    onclick="kembali()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>

            </div>
<div class="bungkus-tab-kana">
            <div class="menu-tab">

                <button id="dasar"
                    onclick="hiraganaDasar()">
                    Dasar
                </button>

                <button id="dakuten"
                    onclick="hiraganaDakuten()">
                    Dakuten
                </button>

                <button id="handakuten"
                    onclick="hiraganaHandakuten()">
                    Handakuten
                </button>

                <button id="yoon"
                    onclick="hiraganaYoon()">
                    Yōon
                </button>
            </div>

    <div class="progress-hiragana">
       <div class="progress-info">
        <span id="namaProgress">Hiragana Dasar</span>
        <span id="jumlahProgress">0 / 46</span>
       </div>

       <div class="progress-kana-track">
         <div id="barProgress" class="progress-fill"></div>
       </div>
    </div>
</div>
            <div id="isiHiragana"></div>
        </div>
    `;

    sembunyiNavbar();

    // Tampilkan tab aktif
    if (tabHiraganaAktif === "dakuten") {

        hiraganaDakuten();

    } else if (tabHiraganaAktif === "handakuten") {

        hiraganaHandakuten();

    } else if (tabHiraganaAktif === "yoon") {

        hiraganaYoon();

    } else {

        hiraganaDasar();

    }

    scrollAtas();
}

// Hiragana Dasar
function hiraganaDasar() {

    tabHiraganaAktif = "dasar";
    aktifkanTab("dasar");

    dataHiraganaAktif = dataHiraganaDasar;

    document.getElementById("isiHiragana").innerHTML = `



        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataHiraganaAktif.map((item, index) => `

<button
    class="kana-card"
    onclick="detailHiragana(
        '${item[0]}',
        '${item[1]}',
        '${item[2]}',
        '${item[3]}',
        '${item[4]}',
        ${index}
    )">

    <span class="kana-huruf">
        ${item[0]}
    </span>

    <span class="kana-romaji">
        ${item[1]}
    </span>

     <span class="mastery-indikator
    ${getProgresHuruf(item[0]) >= 10 ? "sudah-kuasai" : ""}"
    style="--mastery: ${getProgresHuruf(item[0]) * 10}%;">

    <span class="mastery-angka">
        ${getProgresHuruf(item[0]) >= 10
            ? "✓"
            : getProgresHuruf(item[0])}
    </span>

    </span>

</button>

                `).join("")}

            </div>

        </div>
    `;
    updateProgressKana(
        dataHiraganaAktif,
        "Hiragana Dasar"
    );
}
//  Hiragana Dakuten 
function hiraganaDakuten() {

    tabHiraganaAktif = "dakuten";
    aktifkanTab("dakuten");

    dataHiraganaAktif = dataHiraganaDakuten;

    document.getElementById("isiHiragana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataHiraganaAktif.map((item, index) => `

                <button
                        class="kana-card"
                        onclick="detailHiragana(
                            '${item[0]}',
                            '${item[1]}',
                            '${item[2]}',
                            '${item[3]}',
                            '${item[4]}',
                            ${index}
                        )">

                        <span class="kana-huruf">
                            ${item[0]}
                        </span>

                        <span class="kana-romaji">
                            ${item[1]}
                        </span>

<span
    class="mastery-indikator
    ${getProgresHuruf(item[0]) >= 10 ? "sudah-kuasai" : ""}"
    style="--mastery: ${getProgresHuruf(item[0]) * 10}%">

    <span class="mastery-angka">
        ${getProgresHuruf(item[0]) >= 10
            ? "✓"
            : getProgresHuruf(item[0])}
    </span>

</span>
                </button>

                `).join("")}

            </div>

        </div>

        <p class="info-kana">
            💡 Dakuten (゛) mengubah bunyi K, S, T, dan H
            menjadi G, Z/J, D, dan B.
        </p>
    `;
    updateProgressKana(
    dataHiraganaAktif,
    "Dakuten"
);
}
//  Hiragana Handakuten 
function hiraganaHandakuten() {

    tabHiraganaAktif = "handakuten";
    aktifkanTab("handakuten");

    dataHiraganaAktif = dataHiraganaHandakuten;

    document.getElementById("isiHiragana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataHiraganaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailHiragana(
                            '${item[0]}',
                            '${item[1]}',
                            '${item[2]}',
                            '${item[3]}',
                            '${item[4]}',
                            ${index}
                        )">

                        <span class="kana-huruf">
                            ${item[0]}
                        </span>

                        <span class="kana-romaji">
                            ${item[1]}
                        </span>

<span
    class="mastery-indikator
    ${getProgresHuruf(item[0]) >= 10 ? "sudah-kuasai" : ""}"
    style="--mastery: ${getProgresHuruf(item[0]) * 10}%">

    <span class="mastery-angka">
        ${getProgresHuruf(item[0]) >= 10
            ? "✓"
            : getProgresHuruf(item[0])}
    </span>

</span>
                    </button>

                `).join("")}

            </div>

        </div>

        <p class="info-kana">
            💡 Handakuten (゜) hanya digunakan pada baris H
            sehingga berubah menjadi bunyi P.
        </p>
    `;
    updateProgressKana(
    dataHiraganaAktif,
    "Handakuten"
);
}
//  Hiragana Yoon 
function hiraganaYoon() {

    tabHiraganaAktif = "yoon";
    aktifkanTab("yoon");

    dataHiraganaAktif = dataHiraganaYoon;

    document.getElementById("isiHiragana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataHiraganaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailHiragana(
                            '${item[0]}',
                            '${item[1]}',
                            '${item[2]}',
                            '${item[3]}',
                            '${item[4]}',
                            ${index}
                        )">

                        <span class="kana-huruf">
                            ${item[0]}
                        </span>

                        <span class="kana-romaji">
                            ${item[1]}
                        </span>

<span
    class="mastery-indikator
    ${getProgresHuruf(item[0]) >= 10 ? "sudah-kuasai" : ""}"
    style="--mastery: ${getProgresHuruf(item[0]) * 10}%">

    <span class="mastery-angka">
        ${getProgresHuruf(item[0]) >= 10
            ? "✓"
            : getProgresHuruf(item[0])}
    </span>

</span>
                    </button>

                `).join("")}

            </div>

        </div>

        <p class="info-kana">
            💡 Yōon dibentuk dari huruf berakhiran
            <b>i</b> yang digabung dengan huruf kecil
            <b>ゃ・ゅ・ょ</b>.
        </p>
    `;
    updateProgressKana(
    dataHiraganaAktif,
    "Yōon"
);
}
// Detai Hiragana 
function detailHiragana(
    huruf,
    romaji,
    kata,
    romajiKata,
    arti,
    index
) {

    kanaSekarang = index;
    const jumlahMastery = Math.min(
    progresLatihan[huruf] || 0,
    10
);

const persenMastery = jumlahMastery * 10;


    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="detail-kana-container">

            <div class="judul-header ada-kembali">

                <h2>Detail Hiragana</h2>

                <button
                    class="tombol-kembali"
                    onclick="kembaliKeHiragana()">
                    <span class="material-symbols-rounded">
                        undo
                    </span>
                </button>

            </div>
<div class="content-grid">
            <div class="detail-kana-card">

    <div
    class="mastery-indikator-detail
    ${getProgresHuruf(huruf) >= 10 ? "sudah-kuasai" : ""}"
    style="--mastery: ${getProgresHuruf(huruf) * 10}%">
    <span class="mastery-angka-detail">
        ${getProgresHuruf(huruf) >= 10
            ? "✓"
            : getProgresHuruf(huruf)}
    </span>
    </div>

                <div class="detail-kana-huruf">
                    ${huruf}
                </div>

                <div class="detail-kana-romaji">
                    ${romaji}
                </div>

                <div class="detail-kana-pemisah"></div>

                <div class="detail-kana-info">

                    <span class="label-kana">
                        Contoh kata
                    </span>

                    <div class="contoh-kana">

                        <strong>
                            ${kata}
                        </strong>

                        <span class="romaji-kata">
                            ${romajiKata}
                        </span>

                        <span>
                            ${arti}
                        </span>

                    </div>

                </div>

            </div>

            <div class="navigasi-kana">

                <button
                    class="btn-kana-nav"
                    onclick="hiraganaSebelumnya()"
                    ${kanaSekarang === 0 ? "disabled" : ""}>

                    Sebelumnya

                </button>

                <button
                    class="btn-kana-nav"
                    onclick="hiraganaBerikutnya()"
                    ${kanaSekarang === dataHiraganaAktif.length - 1 ? "disabled" : ""}>

                    Berikutnya

                </button>

            </div>
</div>
        </div>
    `;

sembunyiNavbar();
scrollAtas();
}
//  Sebelumnya
function hiraganaSebelumnya() {

    if (kanaSekarang <= 0) return;

    kanaSekarang--;

    const data = dataHiraganaAktif[kanaSekarang];

    detailHiragana(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        kanaSekarang
    );
}
// Berikutnya
function hiraganaBerikutnya() {

    if (kanaSekarang >= dataHiraganaAktif.length - 1) return;

    kanaSekarang++;

    const data = dataHiraganaAktif[kanaSekarang];

    detailHiragana(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        kanaSekarang
    );
}
//  Fungsi Navigasi Kana
function bukaHiragana(asal = "home") {

    tabHiraganaAktif = "dasar";

    tampilHiragana(asal);
}
// Fungsi Kembali reset
function kembaliKeHiragana() {

    tampilHiragana(asalHalaman, true);

}
//  PROGRES HIRAGANA
function updateProgressKana(data, nama) {

    const jumlahDikuasai = hitungProgresHuruf(data);
    const jumlahTotal = data.length;

    const persen = (jumlahDikuasai / jumlahTotal) * 100;

    document.getElementById("namaProgress").innerText = nama;

    document.getElementById("jumlahProgress").innerText =
        `${jumlahDikuasai} / ${jumlahTotal}`;

    document.getElementById("barProgress").style.width =
        `${persen}%`;
}