// variabel vungsi kana
let kanaSekarang = 0;
let dataKanaAktif = [];
// VARIABEL DATA KATAKANA DASAR
const dataKatakanaDasar = [
          ["ア", "a", "アイス", "aisu", "Es krim"],
        ["イ", "i", "インターネット", "intaanetto", "Internet"],
        ["ウ", "u", "ウイルス", "uirusu", "Virus"],
        ["エ", "e", "エレベーター", "erebeetaa", "Lift"],
        ["オ", "o", "オレンジ", "orenji", "Jeruk"],

        ["カ", "ka", "カメラ", "kamera", "Kamera"],
        ["キ", "ki", "ケーキ", "keeki", "Kue"],
        ["ク", "ku", "クリスマス", "kurisumasu", "Natal"],
        ["ケ", "ke", "ケーキ", "keeki", "Kue"],
        ["コ", "ko", "コーヒー", "koohii", "Kopi"],

        ["サ", "sa", "サラダ", "sarada", "Salad"],
        ["シ", "shi", "シャツ", "shatsu", "Kemeja"],
        ["ス", "su", "スポーツ", "supootsu", "Olahraga"],
        ["セ", "se", "セーター", "seetaa", "Sweater"],
        ["ソ", "so", "ソファ", "sofa", "Sofa"],

        ["タ", "ta", "タクシー", "takushii", "Taksi"],
        ["チ", "chi", "チーズ", "chiizu", "Keju"],
        ["ツ", "tsu", "ツアー", "tsuaa", "Tur / Wisata"],
        ["テ", "te", "テレビ", "terebi", "Televisi"],
        ["ト", "to", "トイレ", "toire", "Toilet"],

        ["ナ", "na", "ナイフ", "naifu", "Pisau"],
        ["ニ", "ni", "ニュース", "nyuusu", "Berita"],
        ["ヌ", "nu", "ヌードル", "nuudoru", "Mi / Noodle"],
        ["ネ", "ne", "ネクタイ", "nekutai", "Dasi"],
        ["ノ", "no", "ノート", "nooto", "Buku catatan"],

        ["ハ", "ha", "ハンバーガー", "hanbaagaa", "Hamburger"],
        ["ヒ", "hi", "ヒーター", "hiitaa", "Pemanas"],
        ["フ", "fu", "フォーク", "fooku", "Garpu"],
        ["ヘ", "he", "ヘルメット", "herumetto", "Helm"],
        ["ホ", "ho", "ホテル", "hoteru", "Hotel"],

        ["マ", "ma", "マスク", "masuku", "Masker"],
        ["ミ", "mi", "ミルク", "miruku", "Susu"],
        ["ム", "mu", "ムービー", "muubii", "Film"],
        ["メ", "me", "メニュー", "menyuu", "Menu"],
        ["モ", "mo", "モデル", "moderu", "Model"],

        ["ヤ", "ya", "ヤクルト", "yakuruto", "Yakult"],
        ["ユ", "yu", "ユニフォーム", "yunifoomu", "Seragam"],
        ["ヨ", "yo", "ヨーグルト", "yooguruto", "Yogurt"],

        ["ラ", "ra", "ラジオ", "rajio", "Radio"],
        ["リ", "ri", "リモコン", "rimokon", "Remote"],
        ["ル", "ru", "ルール", "ruuru", "Aturan"],
        ["レ", "re", "レストラン", "resutoran", "Restoran"],
        ["ロ", "ro", "ロボット", "robotto", "Robot"],

        ["ワ", "wa", "ワイン", "wain", "Anggur / Wine"],
        ["ヲ", "wo", "ヲ", "wo", "Partikel wo"],
        ["ン", "n", "オンライン", "onrain", "Online"]
];
// VARIABEL DATA KATAKANA DAKUTEN
const dataKatakanaDakuten = [

        // G
        ["ガ", "ga", "ガラス", "garasu", "Kaca"],
        ["ギ", "gi", "ギター", "gitaa", "Gitar"],
        ["グ", "gu", "グラス", "gurasu", "Gelas"],
        ["ゲ", "ge", "ゲーム", "geemu", "Permainan"],
        ["ゴ", "go", "ゴルフ", "gorufu", "Golf"],

        // Z
        ["ザ", "za", "ザリガニ", "zarigani", "Lobster air tawar"],
        ["ジ", "ji", "ジーンズ", "jiinzu", "Celana jeans"],
        ["ズ", "zu", "ズボン", "zubon", "Celana"],
        ["ゼ", "ze", "ゼリー", "zerii", "Jeli"],
        ["ゾ", "zo", "ゾウ", "zou", "Gajah"],

        // D
        ["ダ", "da", "ダンス", "dansu", "Tarian"],
        ["ヂ", "ji", "ヂ", "ji", "Jarang digunakan"],
        ["ヅ", "zu", "ヅ", "zu", "Jarang digunakan"],
        ["デ", "de", "デパート", "depaato", "Toserba"],
        ["ド", "do", "ドア", "doa", "Pintu"],

        // B
        ["バ", "ba", "バス", "basu", "Bus"],
        ["ビ", "bi", "ビール", "biiru", "Bir"],
        ["ブ", "bu", "ブラシ", "burashi", "Sikat"],
        ["ベ", "be", "ベッド", "beddo", "Tempat tidur"],
        ["ボ", "bo", "ボール", "booru", "Bola"]

    ];
// VARIABEL DATA KATAKANA HANDAKUTEN
const dataKatakanaHandakuten = [

        ["パ", "pa", "パン", "pan", "Roti"],
        ["ピ", "pi", "ピアノ", "piano", "Piano"],
        ["プ", "pu", "プール", "puuru", "Kolam renang"],
        ["ペ", "pe", "ページ", "peeji", "Halaman"],
        ["ポ", "po", "ポケット", "poketto", "Saku"]

    ];
// VARIABEL DATA KATAKANA YOON
const dataKatakanaYoon = [

        ["キャ", "kya", "キャベツ", "kyabetsu", "Kubis"],
        ["キュ", "kyu", "キュウリ", "kyuuri", "Mentimun"],
        ["キョ", "kyo", "キョウト", "kyouto", "Kyoto"],

        ["シャ", "sha", "シャツ", "shatsu", "Kemeja"],
        ["シュ", "shu", "シュート", "shuuto", "Tembakan"],
        ["ショ", "sho", "ショッピング", "shoppingu", "Belanja"],

        ["チャ", "cha", "チャーハン", "chaahan", "Nasi goreng"],
        ["チュ", "chu", "チューブ", "chuubu", "Tabung"],
        ["チョ", "cho", "チョコレート", "chokoreeto", "Cokelat"],

        ["ニャ", "nya", "ニャー", "nyaa", "Suara kucing"],
        ["ニュ", "nyu", "ニュース", "nyuusu", "Berita"],
        ["ニョ", "nyo", "ニョキニョキ", "nyokinyoki", "Tumbuh cepat"],

        ["ヒャ", "hya", "ヒャク", "hyaku", "Seratus"],
        ["ヒュ", "hyu", "ヒューマン", "hyuuman", "Manusia"],
        ["ヒョ", "hyo", "ヒョウ", "hyou", "Macan tutul"],

        ["ミャ", "mya", "ミャク", "myaku", "Denyut"],
        ["ミュ", "myu", "ミュージック", "myuujikku", "Musik"],
        ["ミョ", "myo", "ミョウガ", "myouga", "Jahe Jepang"],

        ["リャ", "rya", "リャマ", "ryama", "Llama"],
        ["リュ", "ryu", "リュック", "ryukku", "Ransel"],
        ["リョ", "ryo", "リョコウ", "ryokou", "Perjalanan"],

        ["ギャ", "gya", "ギャラリー", "gyararii", "Galeri"],
        ["ギュ", "gyu", "ギュウニュウ", "gyuunyuu", "Susu"],
        ["ギョ", "gyo", "ギョーザ", "gyooza", "Gyoza"],

        ["ジャ", "ja", "ジャケット", "jaketto", "Jaket"],
        ["ジュ", "ju", "ジュース", "juusu", "Jus"],
        ["ジョ", "jo", "ジョギング", "jogingu", "Jogging"],

        ["ビャ", "bya", "ビャクヤ", "byakuya", "Malam putih"],
        ["ビュ", "byu", "レビュー", "review", "Ulasan"],
        ["ビョ", "byo", "ビョウイン", "byouin", "Rumah sakit"],

        ["ピャ", "pya", "ピャー", "pyaa", "Bunyi"],
        ["ピュ", "pyu", "ピュア", "pyua", "Murni"],
        ["ピョ", "pyo", "ピョンピョン", "pyonpyon", "Melompat-lompat"]

    ];

// tampilan katakana
function tampilKatakana(asal = "home", dariDetail = false) {

    asalHalaman = asal;

    // Kalau masuk dari luar halaman Katakana,
    // selalu mulai dari Dasar
    if (!dariDetail) {
        tabKatakanaAktif = "dasar";
    }

    document.getElementById("app").style.display = "none";

    document.getElementById("isi").innerHTML = `

        <div class="hiragana-container">

            <div class="judul-header ada-kembali">

                <div class="judul-kiri">

                    <h2>Katakana</h2>

                    <button
                        class="btn-info"
                        onclick="popupInfoKatakana()">
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

                <button
                    id="dasar"
                    onclick="katakanaDasar()">
                    Dasar
                </button>

                <button
                    id="dakuten"
                    onclick="katakanaDakuten()">
                    Dakuten
                </button>

                <button
                    id="handakuten"
                    onclick="katakanaHandakuten()">
                    Handakuten
                </button>

                <button
                    id="yoon"
                    onclick="katakanaYoon()">
                    Yōon
                </button>

            </div>

        <div class="progress-hiragana">
             <div class="progress-info">
               <span id="namaProgress">Katakana Dasar</span>
               <span id="jumlahProgress">0 / 46</span>
             </div>

           <div class="progress-kana-track">
           <div id="barProgress" class="progress-fill"></div>
           </div>
        </div>
</div>
            <div id="isiKatakana"></div>

        </div>
    `;

    sembunyiNavbar();

    // Tampilkan tab aktif
    if (tabKatakanaAktif === "dakuten") {

        katakanaDakuten();

    } else if (tabKatakanaAktif === "handakuten") {

        katakanaHandakuten();

    } else if (tabKatakanaAktif === "yoon") {

        katakanaYoon();

    } else {

        katakanaDasar();

    }

    scrollAtas();
}
// katakana dasar
function katakanaDasar() {

    tabKatakanaAktif = "dasar";
    aktifkanTab("dasar");

    dataKanaAktif = dataKatakanaDasar;

    document.getElementById("isiKatakana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataKanaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailKatakana(
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
    dataKanaAktif,
    "Katakana Dasar"
);
}
//  katakana dakuten
function katakanaDakuten() {

    tabKatakanaAktif = "dakuten";
    aktifkanTab("dakuten");

    dataKanaAktif = [

        // G
        ["ガ", "ga", "ガラス", "garasu", "Kaca"],
        ["ギ", "gi", "ギター", "gitaa", "Gitar"],
        ["グ", "gu", "グラス", "gurasu", "Gelas"],
        ["ゲ", "ge", "ゲーム", "geemu", "Permainan"],
        ["ゴ", "go", "ゴルフ", "gorufu", "Golf"],

        // Z
        ["ザ", "za", "ザリガニ", "zarigani", "Lobster air tawar"],
        ["ジ", "ji", "ジーンズ", "jiinzu", "Celana jeans"],
        ["ズ", "zu", "ズボン", "zubon", "Celana"],
        ["ゼ", "ze", "ゼリー", "zerii", "Jeli"],
        ["ゾ", "zo", "ゾウ", "zou", "Gajah"],

        // D
        ["ダ", "da", "ダンス", "dansu", "Tarian"],
        ["ヂ", "ji", "ヂ", "ji", "Jarang digunakan"],
        ["ヅ", "zu", "ヅ", "zu", "Jarang digunakan"],
        ["デ", "de", "デパート", "depaato", "Toserba"],
        ["ド", "do", "ドア", "doa", "Pintu"],

        // B
        ["バ", "ba", "バス", "basu", "Bus"],
        ["ビ", "bi", "ビール", "biiru", "Bir"],
        ["ブ", "bu", "ブラシ", "burashi", "Sikat"],
        ["ベ", "be", "ベッド", "beddo", "Tempat tidur"],
        ["ボ", "bo", "ボール", "booru", "Bola"]

    ];

    document.getElementById("isiKatakana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataKanaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailKatakana(
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
            💡 Dakuten (゛) mengubah bunyi K, S, T, dan H menjadi
            G, Z/J, D, dan B.
        </p>
    `;
    updateProgressKana(
    dataKanaAktif,
    "Katakana Dakuten"
);
}
// katakana handakuten
function katakanaHandakuten() {

    tabKatakanaAktif = "handakuten";
    aktifkanTab("handakuten");

    dataKanaAktif = [

        ["パ", "pa", "パン", "pan", "Roti"],
        ["ピ", "pi", "ピアノ", "piano", "Piano"],
        ["プ", "pu", "プール", "puuru", "Kolam renang"],
        ["ペ", "pe", "ページ", "peeji", "Halaman"],
        ["ポ", "po", "ポケット", "poketto", "Saku"]

    ];

    document.getElementById("isiKatakana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataKanaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailKatakana(
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
            💡 Handakuten (゜) digunakan pada baris H
            sehingga berubah menjadi bunyi P.
        </p>
    `;
    updateProgressKana(
    dataKanaAktif,
    "Katakana Handakuten"
);
}
// katakana yoon
function katakanaYoon() {

    tabKatakanaAktif = "yoon";
    aktifkanTab("yoon");

    dataKanaAktif = [

        ["キャ", "kya", "キャベツ", "kyabetsu", "Kubis"],
        ["キュ", "kyu", "キュウリ", "kyuuri", "Mentimun"],
        ["キョ", "kyo", "キョウト", "kyouto", "Kyoto"],

        ["シャ", "sha", "シャツ", "shatsu", "Kemeja"],
        ["シュ", "shu", "シュート", "shuuto", "Tembakan"],
        ["ショ", "sho", "ショッピング", "shoppingu", "Belanja"],

        ["チャ", "cha", "チャーハン", "chaahan", "Nasi goreng"],
        ["チュ", "chu", "チューブ", "chuubu", "Tabung"],
        ["チョ", "cho", "チョコレート", "chokoreeto", "Cokelat"],

        ["ニャ", "nya", "ニャー", "nyaa", "Suara kucing"],
        ["ニュ", "nyu", "ニュース", "nyuusu", "Berita"],
        ["ニョ", "nyo", "ニョキニョキ", "nyokinyoki", "Tumbuh cepat"],

        ["ヒャ", "hya", "ヒャク", "hyaku", "Seratus"],
        ["ヒュ", "hyu", "ヒューマン", "hyuuman", "Manusia"],
        ["ヒョ", "hyo", "ヒョウ", "hyou", "Macan tutul"],

        ["ミャ", "mya", "ミャク", "myaku", "Denyut"],
        ["ミュ", "myu", "ミュージック", "myuujikku", "Musik"],
        ["ミョ", "myo", "ミョウガ", "myouga", "Jahe Jepang"],

        ["リャ", "rya", "リャマ", "ryama", "Llama"],
        ["リュ", "ryu", "リュック", "ryukku", "Ransel"],
        ["リョ", "ryo", "リョコウ", "ryokou", "Perjalanan"],

        ["ギャ", "gya", "ギャラリー", "gyararii", "Galeri"],
        ["ギュ", "gyu", "ギュウニュウ", "gyuunyuu", "Susu"],
        ["ギョ", "gyo", "ギョーザ", "gyooza", "Gyoza"],

        ["ジャ", "ja", "ジャケット", "jaketto", "Jaket"],
        ["ジュ", "ju", "ジュース", "juusu", "Jus"],
        ["ジョ", "jo", "ジョギング", "jogingu", "Jogging"],

        ["ビャ", "bya", "ビャクヤ", "byakuya", "Malam putih"],
        ["ビュ", "byu", "レビュー", "review", "Ulasan"],
        ["ビョ", "byo", "ビョウイン", "byouin", "Rumah sakit"],

        ["ピャ", "pya", "ピャー", "pyaa", "Bunyi"],
        ["ピュ", "pyu", "ピュア", "pyua", "Murni"],
        ["ピョ", "pyo", "ピョンピョン", "pyonpyon", "Melompat-lompat"]

    ];

    document.getElementById("isiKatakana").innerHTML = `

        <div class="kana-wrapper">

            <div class="kana-grid">

                ${dataKanaAktif.map((item, index) => `

                    <button
                        class="kana-card"
                        onclick="detailKatakana(
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
            <b>ャ・ュ・ョ</b>.
        </p>
    `;
    updateProgressKana(
    dataKanaAktif,
    "Katakana Yōon"
);
}
// detail katakana
function detailKatakana(
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

                <h2>Detail Katakana</h2>

                <button
                    class="tombol-kembali"
                    onclick="kembaliKeKatakana()">
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

                        <strong>${kata}</strong>

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
                    onclick="kanaSebelumnya()"
                    ${kanaSekarang === 0 ? "disabled" : ""}>
                    Sebelumnya
                </button>

                <button
                    class="btn-kana-nav"
                    onclick="kanaBerikutnya()"
                    ${kanaSekarang === dataKanaAktif.length - 1 ? "disabled" : ""}>
                    Berikutnya
                </button>

            </div>
</div>
        </div>
    `;

sembunyiNavbar();
scrollAtas();
}
// Fungsi Sebelumnya Kana
function kanaSebelumnya() {

    if (kanaSekarang <= 0) return;

    kanaSekarang--;

    const data = dataKanaAktif[kanaSekarang];

    detailKatakana(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        kanaSekarang
    );
}


// Fungsi Berikutnya Kana
function kanaBerikutnya() {

    if (kanaSekarang >= dataKanaAktif.length - 1) return;

    kanaSekarang++;

    const data = dataKanaAktif[kanaSekarang];

    detailKatakana(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        kanaSekarang
    );
}

// kembali dari detail kana
function kembaliKeKatakana() {

    tampilKatakana(asalHalaman, true);

}
