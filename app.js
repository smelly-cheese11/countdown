const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const mili = document.getElementById('mili');
const micro = document.getElementById('micro');
const nano = document.getElementById('nano');
const pico = document.getElementById('pico');
const femto = document.getElementById('femto');
const atto = document.getElementById('atto');
const zepto = document.getElementById('zepto');
const yocto = document.getElementById('yocto');
const ronto = document.getElementById('ronto');
const quecto = document.getElementById('quecto');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    const n = Math.floor(diff % s * 111);
    const na = Math.floor(diff % s * 111 * 1000 * 1000);
    const mi = Math.floor(diff % s * 111 * 1000);
    const pi = Math.floor(diff % s * 111 * 1000 * 1000 * 1000);
    const fe = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000);
    const a = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000 * 1000);
    const z = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000);
    const y = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000);
    const r = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000);
    const q = Math.floor(diff % s * 111 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    mili.innerHTML = n < 10 ? '000' + n : n;
    micro.innerHTML = mi < 10 ? '0000' + mi : mi;
    nano.innerHTML = na < 10 ? '00000' + na : na;
    pico.innerHTML = pi < 10 ? '000000' + pi : pi;
    femto.innerHTML = fe < 10 ? '000000' + fe : fe;
    atto.innerHTML = a < 10 ? '0000000' + a : a;
    zepto.innerHTML = z < 10 ? '00000000' + z : z;
    yocto.innerHTML = y < 10 ? '000000000' + y : y;
    ronto.innerHTML = r < 10 ? '0000000000' + r : r;
    quecto.innerHTML = q < 10 ? '00000000000' + q : q;
}

setInterval(updateCountdown, 10)