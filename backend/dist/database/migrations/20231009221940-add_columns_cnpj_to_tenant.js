'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x16c)) / (0x1418 + -0x4 * -0x467 + -0x25b3) + -parseInt(l(0x172)) / (-0x1d4a * -0x1 + 0x22dd + -0x4025) + -parseInt(k(0x173)) / (0x23 * 0x97 + -0x78 + -0x142a) + parseInt(l(0x164)) / (-0x74d + 0x1 * 0x235c + -0x1c0b) * (-parseInt(k(0x160)) / (0x170e + 0x582 + 0x1 * -0x1c8b)) + parseInt(k(0x16e)) / (0x14d7 + 0x1679 + -0xe6e * 0x3) + parseInt(l(0x162)) / (-0x1 * -0x9f7 + -0x1718 + 0xd28) * (parseInt(k(0x159)) / (-0x7 * 0x3a0 + 0x1 * -0x7c3 + -0x4bd * -0x7)) + parseInt(l(0x167)) / (-0x1b9 + -0x2 * -0x10cf + -0x1fdc) * (parseInt(k(0x15f)) / (0x805 + -0xa25 * 0x1 + 0x115 * 0x2));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x184 * 0x2b0 + -0xa21c + -0x66 * -0x1d1b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x63d + 0x6aa * 0x2 + 0x37 * -0xc9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'STRING',
        '922716WreVVs',
        'erty',
        'ble',
        '7407yVSNoh',
        'DJacq',
        'addColumn',
        'XEjRH',
        'allowNull',
        '413122QGTfmZ',
        'DataTypes',
        '4423008FhffJX',
        'value',
        'describeTa',
        'Tenants',
        '494192xYJByB',
        '566244GSrWBe',
        'defineProp',
        'sequelize',
        'GFrFN',
        '8rshwdN',
        'removeColu',
        'cnpj',
        'type',
        'MaJIy',
        '__esModule',
        '3770EUgAee',
        '10gFJnNO',
        'exports',
        '5001101eXNkgc'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x16f)] = !![], Object[m(0x156) + n(0x165)](exports, n(0x15e), c);
const sequelize_1 = require(n(0x157));
module[n(0x161)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x158)] = p(0x171), g[o(0x168)] = p(0x15b);
        const h = g, i = await f[o(0x170) + p(0x166)](h[p(0x158)]);
        if (!i || !i[h[p(0x168)]]) {
            const j = {};
            j[o(0x15c)] = sequelize_1[p(0x16d)][o(0x163)], j[p(0x16b)] = ![], await f[o(0x169)](h[p(0x158)], h[o(0x168)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x16a)] = r(0x171), f[r(0x15d)] = r(0x15b);
        const g = f;
        await e[r(0x15a) + 'mn'](g[r(0x16a)], g[q(0x15d)]);
    }
};