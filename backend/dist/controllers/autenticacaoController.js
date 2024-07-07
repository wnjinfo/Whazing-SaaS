const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0xe6)) / (0x6aa + 0x5f * 0x4 + -0x825) * (parseInt(q(0xda)) / (0x1d06 + 0x17ad + -0x11f * 0x2f)) + -parseInt(q(0xe1)) / (0xceb * 0x3 + -0xdc5 + -0x18f9) * (-parseInt(q(0xe7)) / (-0xdf4 + 0xb0 * -0x2d + -0xb3a * -0x4)) + parseInt(r(0xd6)) / (-0x3 * 0x4a + 0x4cf + 0x4 * -0xfb) + parseInt(r(0xdf)) / (0x7 * 0x4e1 + 0xad * -0x1 + 0x2 * -0x10ba) * (-parseInt(r(0xd3)) / (-0x955 + -0x4 * -0x14f + 0x420)) + -parseInt(q(0xd2)) / (0xf5f * 0x2 + 0x6 * -0x577 + 0x214) * (-parseInt(q(0xd4)) / (0x120a + 0x57 * -0x23 + -0x61c)) + -parseInt(q(0xd8)) / (-0x1fc0 + 0x1d7 * 0x10 + -0x2 * -0x12d) + parseInt(r(0xd0)) / (-0x28e + -0xe8c + 0x1125) * (parseInt(r(0xd9)) / (0x1 * 0x125f + -0xb * 0x12d + -0x564));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10b22 + -0x3 * -0x6d1b + -0x4dbc));
function a() {
    const w = [
        'Erro\x20na\x20au',
        '6FroJxi',
        'env',
        '59106YslwBV',
        'body',
        'password',
        'post',
        'exports',
        '7awvKiX',
        '44oqbBmn',
        'tenticação',
        'axios',
        'error',
        'autenticar',
        'status',
        '1815XTUYhO',
        'SENHA_API',
        '12944WPMpAc',
        '1213513DpPHRq',
        '522gSmNef',
        'json',
        '803715iiwWeJ',
        'data',
        '1882850pWRgcV',
        '12612IlYhca',
        '43086JodLOS',
        'YRngg',
        'USUARIO_AP',
        'username'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios = require(s(0xe9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x138 * -0x1f + 0x23fe + -0x11 * -0x27);
        let h = e[f];
        return h;
    }, b(c, d);
}
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0xdb)] = u(0xde) + u(0xe8);
    const j = i, {
            username: k,
            password: l
        } = g[t(0xe2)];
    try {
        const m = {};
        m[u(0xdd)] = process[t(0xe0)][u(0xdc) + 'I'], m[u(0xe3)] = process[u(0xe0)][t(0xd1)];
        const n = await axios[t(0xe4)](m);
        h[u(0xd5)](n[u(0xd7)]);
    } catch (o) {
        const p = {};
        p[t(0xcd)] = j[u(0xdb)], h[t(0xcf)](0x31 * -0x15 + -0x1d03 + 0x22fc)[t(0xd5)](p);
    }
}
const f = {};
f[v(0xce)] = autenticar, module[s(0xe5)] = f;