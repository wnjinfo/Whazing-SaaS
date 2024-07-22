const s = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16da + 0x190a + -0x2eb8);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x13d)) / (-0x15 * -0x178 + -0x1c * 0x52 + 0x1fd * -0xb) + parseInt(r(0x147)) / (0xbf4 + -0x1 * -0x8b5 + 0x1 * -0x14a7) * (parseInt(r(0x13b)) / (-0x12f + -0x1 * -0x266d + -0x253b)) + -parseInt(r(0x137)) / (-0x8 * 0x47a + -0x1a * -0x119 + 0x74a) * (parseInt(q(0x136)) / (0x51 * 0x72 + -0x2 * 0x7ab + 0x14b7 * -0x1)) + -parseInt(q(0x131)) / (-0x1e56 + -0x2506 + -0xe6 * -0x4b) * (-parseInt(q(0x12f)) / (0x1031 * 0x1 + 0x1963 + -0xb * 0x3c7)) + parseInt(r(0x144)) / (0x2069 + 0x3 * 0xd3 + 0x116d * -0x2) + -parseInt(q(0x148)) / (-0x1 * 0x225b + 0x1ca1 + 0x19 * 0x3b) * (parseInt(r(0x130)) / (0x2010 + -0x9d7 + -0x162f)) + -parseInt(q(0x134)) / (0xf02 * 0x1 + 0x43 * 0x53 + 0x10 * -0x24b) * (parseInt(r(0x13e)) / (-0x1a87 * -0x1 + -0x9d5 + 0x853 * -0x2));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x63119 + 0xea4d + 0x2ad7 * 0x3d));
function a() {
    const w = [
        'data',
        'SENHA_API',
        '11wAHojf',
        'tenticação',
        '2064295OKcTGl',
        '4xNiwAo',
        'username',
        'Erro\x20na\x20au',
        'env',
        '138747ZYgnPO',
        'status',
        '125490FfLkUm',
        '1246044pTJXmV',
        'post',
        'RwJRv',
        'json',
        'exports',
        'password',
        '699984oYqdYv',
        'body',
        'USUARIO_AP',
        '16NdFaNC',
        '3681iixgCq',
        'axios',
        'autenticar',
        'error',
        '448zcRBBx',
        '2570UQkSkt',
        '57468UbDhTg'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios = require(s(0x12c));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0x140)] = u(0x139) + t(0x135);
    const j = i, {
            username: k,
            password: l
        } = g[t(0x145)];
    try {
        const m = {};
        m[t(0x138)] = process[t(0x13a)][t(0x146) + 'I'], m[t(0x143)] = process[u(0x13a)][t(0x133)];
        const n = await axios[u(0x13f)](m);
        h[u(0x141)](n[t(0x132)]);
    } catch (o) {
        const p = {};
        p[u(0x12e)] = j[u(0x140)], h[u(0x13c)](0x26c * 0x6 + -0xba + -0x29 * 0x4a)[u(0x141)](p);
    }
}
const f = {};
f[s(0x12d)] = autenticar, module[v(0x142)] = f;