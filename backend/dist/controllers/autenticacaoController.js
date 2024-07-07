const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = parseInt(q(0xe8)) / (-0x1b * -0x45 + 0x9e * 0x17 + -0x1578) + -parseInt(r(0xe4)) / (-0x2416 + 0x2b0 * 0xd + 0x128) * (-parseInt(r(0xe7)) / (0x254b + 0x4c7 + -0x6f * 0x61)) + -parseInt(r(0xfc)) / (-0x1f5 * 0xb + -0x1409 + 0x2994) + parseInt(r(0xe6)) / (0x31 * 0x12 + 0x22ae + -0x261b) * (-parseInt(q(0xf6)) / (-0x303 * 0xa + 0x2702 + 0x1c6 * -0x5)) + parseInt(q(0xf8)) / (0x1 * 0x2225 + -0x4 * -0x473 + -0x33ea) * (parseInt(r(0xfe)) / (0x238f + -0x231d + -0x6a)) + -parseInt(r(0xfb)) / (0x63d * -0x4 + -0x8f * -0x35 + -0x24f * 0x2) * (parseInt(r(0xe5)) / (-0x1eaa + 0x1 * -0x8ef + 0x1 * 0x27a3)) + -parseInt(r(0xe9)) / (0x1 * -0x2182 + 0x14b * 0x6 + 0x19cb) * (parseInt(q(0xf2)) / (-0x1ab9 + -0x1 * 0x1ce1 + -0x11 * -0x346));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * 0x5ccd + -0x1 * 0x546a6 + 0x6bf93));
const axios = require(s(0xef));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0xf7)] = t(0xf3) + t(0xfa);
    const j = i, {
            username: k,
            password: l
        } = g[t(0xe3)];
    try {
        const m = {};
        m[u(0xea)] = process[u(0xf4)][t(0xf5) + 'I'], m[t(0xe2)] = process[u(0xf4)][u(0xeb)];
        const n = await axios[u(0xec)](m);
        h[u(0xf0)](n[u(0xed)]);
    } catch (o) {
        const p = {};
        p[t(0xfd)] = j[t(0xf7)], h[t(0xf1)](0x5 * 0x482 + -0x947 * -0x1 + -0x1ddd)[t(0xf0)](p);
    }
}
const f = {};
function a() {
    const w = [
        'axios',
        'json',
        'status',
        '12VgvcTO',
        'Erro\x20na\x20au',
        'env',
        'USUARIO_AP',
        '5370Akgzlp',
        'ljCAO',
        '2888116CJpMCf',
        'exports',
        'tenticação',
        '18ztLxIr',
        '1074996hntrus',
        'error',
        '8TKKkwS',
        'password',
        'body',
        '534096vJUlvz',
        '3157030rCZuMN',
        '1475IxwFpV',
        '6KWMGZC',
        '595274dmNFNI',
        '219538haHHRW',
        'username',
        'SENHA_API',
        'post',
        'data',
        'autenticar'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1416 + -0x1b88 * 0x1 + 0x854);
        let h = e[f];
        return h;
    }, b(c, d);
}
f[v(0xee)] = autenticar, module[v(0xf9)] = f;