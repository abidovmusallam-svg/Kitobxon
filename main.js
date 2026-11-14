const XOM_KITOBLAR = [
    ["O'tkan kunlar", "Abdulla Qodiriy", "O'zbek adabiyoti", 68000, "#7F4F24", "Otabek va Kumushbibining muhabbati orqali Turkiston hayotini ko'rsatadigan roman."],
    ["Mehrobdan chayon", "Abdulla Qodiriy", "O'zbek adabiyoti", 64000, "#1B4332", "Xon saroyidagi intrigalar va oddiy odamlar taqdiri haqida tarixiy roman."],
    ["Kecha va kunduz", "Cho'lpon", "O'zbek adabiyoti", 62000, "#3d2c1e", "Cho'lponning Turkiston hayoti va ozodlik orzusi haqidagi romani."],
    ["Sarob", "Abdulla Qahhor", "O'zbek adabiyoti", 58000, "#B45309", "Abdulla Qahhorning inson qalbi va ikkiyuzlamachilik haqidagi romani."],
    ["Qutlug' qon", "Oybek", "O'zbek adabiyoti", 70000, "#5b3a1e", "Oybekning xalq hayoti va kurashini tasvirlagan tarixiy romani."],
    ["Ufq", "Said Ahmad", "O'zbek adabiyoti", 66000, "#2d6a4f", "Said Ahmadning oddiy odamlar hayoti haqidagi mashhur romani."],
    ["Yulduzli tunlar", "Pirimqul Qodirov", "O'zbek adabiyoti", 74000, "#8a5a1b", "Pirimqul Qodirovning Zahiriddin Bobur hayotiga bag'ishlangan tarixiy romani."],
    ["Ikki eshik orasi", "O'tkir Hoshimov", "O'zbek adabiyoti", 72000, "#2C241E", "Insoniylik, sadoqat va ota-ona mehri haqida samimiy hikoya."],
    ["Dunyoning ishlari", "O'tkir Hoshimov", "O'zbek adabiyoti", 66000, "#7F4F24", "Hayotiy lavhalar va xotiralardan tuzilgan iliq asar."],
    ["Shum bola", "G'afur G'ulom", "O'zbek adabiyoti", 48000, "#1B4332", "Urush yillaridagi sho'x bola hayoti haqida kulgili va dardli qissa."],
    ["Sariq devni minib", "Xudoyberdi To'xtaboyev", "O'zbek adabiyoti", 54000, "#3d2c1e", "Hoshimjon va Sariq dev sarguzashtlari – kattalar ham mehr bilan o'qiydi."],
    ["Shaytanat", "Tohir Malik", "O'zbek adabiyoti", 82000, "#B45309", "Tohir Malikning keng o'qiladigan mashhur romani."],
    ["Boburnoma", "Zahiriddin Bobur", "O'zbek adabiyoti", 92000, "#5b3a1e", "Boburning hayoti, safarlari va kuzatuvlari haqidagi xotiralari."],
    ["Xamsa", "Alisher Navoiy", "O'zbek adabiyoti", 95000, "#2d6a4f", "Navoiyning beshta dostondan iborat mashhur asari."],
    ["Layli va Majnun", "Alisher Navoiy", "O'zbek adabiyoti", 56000, "#8a5a1b", "Sharq adabiyotining mashhur sevgi dostoni Navoiy talqinida."],
    ["Alkimyogar", "Paulo Coelho", "Jahon adabiyoti", 65000, "#2C241E", "Orzu ortidan ketgan cho'pon Santyago haqidagi mashhur masal."],
    ["Kichkina shahzoda", "Antuan de Sent-Ekzyuperi", "Jahon adabiyoti", 52000, "#7F4F24", "Do'stlik va mehr haqidagi falsafiy ertak."],
    ["Don Kixot", "Migel de Servantes", "Jahon adabiyoti", 98000, "#1B4332", "Ritsarlik romanlaridan ilhomlangan Don Kixotning kulgili va ibratli sarguzashtlari."],
    ["Jinoyat va jazo", "Fyodor Dostoyevskiy", "Jahon adabiyoti", 88000, "#3d2c1e", "Vijdon va jazo haqidagi psixologik roman."],
    ["Aka-uka Karamazovlar", "Fyodor Dostoyevskiy", "Jahon adabiyoti", 105000, "#B45309", "Ota va uch o'g'il taqdiri orqali imon va axloq haqida falsafiy roman."],
    ["Urush va tinchlik", "Lev Tolstoy", "Jahon adabiyoti", 120000, "#5b3a1e", "Napoleon davri Rossiyasini tasvirlagan keng qamrovli epopeya."],
    ["Anna Karenina", "Lev Tolstoy", "Jahon adabiyoti", 95000, "#2d6a4f", "Muhabbat va jamiyat qoidalari to'qnashuvi haqidagi roman."],
    ["Gamlet", "Uilyam Shekspir", "Jahon adabiyoti", 45000, "#8a5a1b", "Daniya shahzodasi Gamlet haqidagi mashhur fojia."],
    ["Usta va Margarita", "Mixail Bulgakov", "Jahon adabiyoti", 86000, "#2C241E", "Moskvaga shayton kelishi haqidagi sehrli va kulgili roman."],
    ["Buyuk Getsbi", "Frensis Skott Fitsjerald", "Jahon adabiyoti", 60000, "#7F4F24", "1920-yillar Amerikasi va orzular haqidagi roman."],
    ["Chol va dengiz", "Ernest Xeminguey", "Jahon adabiyoti", 50000, "#1B4332", "Baliqchi chol va ulkan baliq o'rtasidagi kurash haqida qissa."],
    ["1984", "Jorj Oruell", "Jahon adabiyoti", 68000, "#3d2c1e", "Totalitar jamiyatni tasvirlagan mashhur antiutopiya."],
    ["Parij Notr-Dam sobori", "Viktor Gyugo", "Jahon adabiyoti", 92000, "#B45309", "Kvazimodo va Esmeralda haqidagi tarixiy roman."],
    ["Yuz yillik yolg'izlik", "Gabriel Garsia Markes", "Jahon adabiyoti", 90000, "#5b3a1e", "Buendia oilasining bir necha avlodi hikoyasi."],
    ["Frankenshteyn", "Meri Shelli", "Jahon adabiyoti", 58000, "#2d6a4f", "Olim yaratgan maxluq va javobgarlik haqidagi roman."]
];

const KITOBLAR = XOM_KITOBLAR.map((q, i) => ({
    raqam: i + 1, nom: q[0], muallif: q[1], turkum: q[2], narx: q[3], rang: q[4], tavsif: q[5]
}));

const SAHIFADA = 6;
const tanla = s => document.querySelector(s);
const formatla = n => n.toLocaleString("ru-RU").replace(/\u00a0/g, " ") + " so'm";

let savat = {};
let sevimlilar = new Set();
let sahifaRaqami = 1;

function eventniYoz(nom) { tanla("#jurnal").textContent = nom }

function xabarKorsat(matn) {
    const oyna = tanla("#xabar");
    oyna.textContent = matn;
    oyna.classList.add("faol");
    clearTimeout(xabarKorsat.taymer);
    xabarKorsat.taymer = setTimeout(() => oyna.classList.remove("faol"), 1800);
}

function muqovaYasa(kitob) {
    return `<div class="muqova ${sevimlilar.has(kitob.raqam) ? "sevimli" : ""}" style="background:${kitob.rang}" title="Ikki marta bosing – sevimli">
    <span>${kitob.turkum}</span><strong>${kitob.nom}</strong><span>${kitob.muallif}</span>
    <div class="yurak">♥</div><div class="tavsif">${kitob.tavsif}</div></div>`;
}

const sotibOl = kitob => `<div class="xarid"><span class="narx">${formatla(kitob.narx)}</span><button class="qoshish">Savatga qo'shish</button></div>`;

// Tikka karta (yangi kelganlar tasmasi uchun)
function tikkaKarta(kitob) {
    return `<article class="kitob" data-raqam="${kitob.raqam}">${muqovaYasa(kitob)}
    <h3>${kitob.nom}</h3><div class="malumot">${kitob.muallif}</div>${sotibOl(kitob)}</article>`;
}

// Qatorli karta (katalog uchun)
function qatorKarta(kitob) {
    return `<article class="kitob" data-raqam="${kitob.raqam}">${muqovaYasa(kitob)}
    <div class="matn-qism"><span class="turkum">${kitob.turkum}</span><h3>${kitob.nom}</h3><div class="malumot">${kitob.muallif}</div></div>${sotibOl(kitob)}</article>`;
}

// mouseenter / mouseleave bubbling qilmaydi, shuning uchun har kartaga alohida qo'yiladi
function sichqonchaEventlari() {
    document.querySelectorAll(".kitob").forEach(element => {
        element.onmouseenter = () => { element.classList.add("faol"); eventniYoz("mouseenter") };
        element.onmouseleave = () => { element.classList.remove("faol"); eventniYoz("mouseleave") };
    });
}

function katalogniChiz() {
    const jamiSahifa = Math.ceil(KITOBLAR.length / SAHIFADA);
    sahifaRaqami = Math.min(sahifaRaqami, jamiSahifa);
    const boshi = (sahifaRaqami - 1) * SAHIFADA;
    tanla("#kitoblar").innerHTML = KITOBLAR.slice(boshi, boshi + SAHIFADA).map(qatorKarta).join("");

    let html = `<button data-otish="${sahifaRaqami - 1}" ${sahifaRaqami === 1 ? "disabled" : ""} aria-label="Oldingi">‹</button>`;
    for (let i = 1; i <= jamiSahifa; i++) {
        html += `<button data-otish="${i}" class="${i === sahifaRaqami ? "joriy" : ""}">${i}</button>`;
    }
    html += `<button data-otish="${sahifaRaqami + 1}" ${sahifaRaqami === jamiSahifa ? "disabled" : ""} aria-label="Keyingi">›</button>`;
    tanla("#sahifalash").innerHTML = html;
}

function boshSahifaniChiz() {
    const kun = KITOBLAR[2]; // "Kunning kitobi"
    tanla("#kunKitobi").innerHTML = `<article class="kitob kunkitobi" data-raqam="${kun.raqam}">${muqovaYasa(kun)}
    <div><p class="belgi">Kunning kitobi</p><h3>${kun.nom}</h3><div class="malumot">${kun.muallif}</div>
    <span class="narx">${formatla(kun.narx)}</span><button class="qoshish">Savatga qo'shish</button></div></article>`;
    // Ikki nusxa: animatsiya uzilmay aylanishi uchun
    const kartalar = KITOBLAR.slice(-6).map(tikkaKarta).join("");
    tanla("#yangilar").innerHTML = `<div class="yurish">${kartalar}${kartalar}</div>`;
}

function yangila() { katalogniChiz(); boshSahifaniChiz(); sichqonchaEventlari() }

function savatniChiz() {
    const raqamlar = Object.keys(savat);
    let soni = 0, summa = 0;
    tanla("#royxat").innerHTML = raqamlar.length ? raqamlar.map(raqam => {
        const kitob = KITOBLAR.find(k => k.raqam == raqam);
        const miqdor = savat[raqam];
        soni += miqdor;
        summa += miqdor * kitob.narx;
        return `<div class="qator"><div>${kitob.nom}<small>${formatla(kitob.narx)}</small></div>
    <div class="miqdor"><button data-qadam="-1" data-raqam="${raqam}" aria-label="Kamaytirish">−</button>${miqdor}<button data-qadam="1" data-raqam="${raqam}" aria-label="Ko'paytirish">+</button></div></div>`;
    }).join("") : `<p class="malumot">Savat bo'sh. Katalogdan kitob tanlang.</p>`;

    if (soni) summa += +tanla("#yetkazish").value; // yetkazish narxi
    tanla("#savatSoni").textContent = soni;
    tanla("#summa").textContent = formatla(summa);
    tanla("#maslahat").textContent = soni ? `${soni} ta kitob · ${formatla(summa)}` : "Savat bo'sh";
}

function savatniOch(ochiqmi) {
    tanla("#savat").classList.toggle("ochiq", ochiqmi);
    tanla("#parda").classList.toggle("faol", ochiqmi);
}

/* Sahifalar (hash router) */
const SAHIFALAR = ["bosh", "katalog", "biz", "aloqa"];
function sahifaniAlmashtir() {
    const hozirgi = SAHIFALAR.includes(location.hash.slice(1)) ? location.hash.slice(1) : "bosh";
    document.querySelectorAll(".sahifa").forEach(b => b.classList.toggle("faol", b.id === hozirgi));
    document.querySelectorAll("nav a").forEach(h => h.classList.toggle("joriy", h.dataset.sahifa === hozirgi));
    window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => { eventniYoz("hashchange"); sahifaniAlmashtir() });

/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded", () => {
    eventniYoz("DOMContentLoaded");
    tanla("#kitobSoni").textContent = KITOBLAR.length;
    tanla("#turkumSoni").textContent = new Set(KITOBLAR.map(k => k.turkum)).size;
    yangila(); savatniChiz(); sahifaniAlmashtir();
});

/* click */
document.addEventListener("click", hodisa => {
    eventniYoz("click");

    const qosh = hodisa.target.closest(".qoshish");
    if (qosh) {
        const raqam = qosh.closest(".kitob").dataset.raqam;
        savat[raqam] = (savat[raqam] || 0) + 1;
        savatniChiz();
        xabarKorsat("Savatga qo'shildi");
        return;
    }

    const otish = hodisa.target.closest("[data-otish]");
    if (otish && !otish.disabled) {
        sahifaRaqami = +otish.dataset.otish;
        katalogniChiz();
        window.scrollTo(0, 0);
        return;
    }

    const tugma = hodisa.target.closest("#royxat button");
    if (tugma) {
        const raqam = tugma.dataset.raqam;
        savat[raqam] += +tugma.dataset.qadam;
        if (savat[raqam] <= 0) delete savat[raqam];
        savatniChiz();
    }
});
tanla("#savatTugma").addEventListener("click", () => savatniOch(true));
tanla("#yopish").addEventListener("click", () => savatniOch(false));
tanla("#parda").addEventListener("click", () => savatniOch(false));

/* dblclick – sevimli */
document.addEventListener("dblclick", hodisa => {
    eventniYoz("dblclick");
    const muqova = hodisa.target.closest(".muqova");
    if (!muqova) return;
    const raqam = +muqova.closest(".kitob").dataset.raqam;
    sevimlilar.has(raqam) ? sevimlilar.delete(raqam) : sevimlilar.add(raqam);
    yangila();
    xabarKorsat(sevimlilar.has(raqam) ? "Sevimlilarga qo'shildi" : "Sevimlilardan olindi");
});

/* mouseover / mouseout – tavsif */
document.addEventListener("mouseover", hodisa => {
    const muqova = hodisa.target.closest(".muqova");
    if (muqova) { muqova.classList.add("ochiq"); eventniYoz("mouseover") }
});
document.addEventListener("mouseout", hodisa => {
    const muqova = hodisa.target.closest(".muqova");
    if (muqova && !muqova.contains(hodisa.relatedTarget)) { muqova.classList.remove("ochiq"); eventniYoz("mouseout") }
});

/* mouseenter / mouseleave – savat maʼlumoti */
tanla("#savatTugma").addEventListener("mouseenter", () => { tanla("#maslahat").classList.add("faol"); eventniYoz("mouseenter") });
tanla("#savatTugma").addEventListener("mouseleave", () => { tanla("#maslahat").classList.remove("faol"); eventniYoz("mouseleave") });

/* keydown – Esc savatni yopadi, ← → katalog sahifalari */
document.addEventListener("keydown", hodisa => {
    eventniYoz("keydown");
    if (hodisa.key === "Escape") savatniOch(false);
    if (!tanla("#katalog").classList.contains("faol") || /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
    const qadam = hodisa.key === "ArrowRight" ? 1 : hodisa.key === "ArrowLeft" ? -1 : 0;
    if (!qadam) return;
    const tugma = document.querySelector(`#sahifalash [data-otish="${sahifaRaqami + qadam}"]`);
    if (tugma && !tugma.disabled) tugma.click();
});

/* keyup – xabar belgilari sanog'i */
tanla("#xabarMatni").addEventListener("keyup", hodisa => {
    eventniYoz("keyup");
    tanla("#belgiSoni").textContent = hodisa.target.value.length;
});

/* input – maydon to'g'rilanganda qizil ramka ketadi */
document.addEventListener("input", hodisa => {
    eventniYoz("input");
    if (hodisa.target.matches("form .xato")) hodisa.target.classList.remove("xato");
});

/* change – yetkazish usuli o'zgarsa jami narx yangilanadi */
tanla("#yetkazish").addEventListener("change", () => { eventniYoz("change"); savatniChiz() });

/* submit */
function formaniTekshir(forma) {
    let togri = true;
    forma.querySelectorAll("input,textarea").forEach(maydon => {
        let xato = !maydon.value.trim();
        if (maydon.name === "telefon") xato = maydon.value.replace(/\D/g, "").length < 9;
        if (maydon.name === "pochta") xato = !/^\S+@\S+\.\S+$/.test(maydon.value);
        maydon.classList.toggle("xato", xato);
        if (xato) togri = false;
    });
    return togri;
}

tanla("#buyurtmaForma").addEventListener("submit", hodisa => {
    hodisa.preventDefault();
    eventniYoz("submit");
    const forma = hodisa.target;
    const formaTogri = formaniTekshir(forma);
    if (!Object.keys(savat).length) { xabarKorsat("Avval savatga kitob qo'shing"); return }
    if (!formaTogri) { xabarKorsat("Barcha maydonlarni to'g'ri to'ldiring"); return }
    const ism = forma.ism.value.trim();
    savat = {};
    forma.reset();
    savatniChiz();
    savatniOch(false);
    xabarKorsat(`Rahmat, ${ism}! Buyurtma qabul qilindi`);
});

tanla("#xabarForma").addEventListener("submit", hodisa => {
    hodisa.preventDefault();
    eventniYoz("submit");
    const forma = hodisa.target;
    if (!formaniTekshir(forma)) { xabarKorsat("Barcha maydonlarni to'g'ri to'ldiring"); return }
    forma.reset();
    tanla("#belgiSoni").textContent = 0;
    xabarKorsat("Xabaringiz yuborildi. Rahmat!");
});