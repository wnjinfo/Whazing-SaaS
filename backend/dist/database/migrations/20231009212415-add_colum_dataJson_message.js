'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x1d9)) / (-0x481 * -0x1 + -0x3 * -0x97 + -0x645) + parseInt(l(0x1cc)) / (-0x14c5 * -0x1 + 0x55d + 0x4 * -0x688) * (-parseInt(l(0x1d2)) / (0x2 * -0xca6 + -0x11c + 0x1a6b * 0x1)) + parseInt(l(0x1d1)) / (0x20b9 + -0x880 + -0x1835) + parseInt(l(0x1cd)) / (0x4 * 0x63c + 0x17 * 0x11f + 0x6e * -0x76) * (-parseInt(k(0x1c5)) / (-0x49 * -0x6b + -0x313 * -0x6 + 0x30ef * -0x1)) + -parseInt(k(0x1ca)) / (0x1c21 + -0x195 + -0x1a85) * (parseInt(k(0x1c7)) / (-0xf * 0x4f + -0x4cd + 0x976)) + parseInt(l(0x1bd)) / (0x1166 + -0x2e * -0x93 + -0x2bc7) * (-parseInt(l(0x1d4)) / (0xe1 * -0x22 + 0x176 * -0x11 + -0x36c2 * -0x1)) + parseInt(l(0x1bf)) / (-0x109d + 0x26ec + -0x1644) * (parseInt(l(0x1da)) / (-0x15 * 0x36 + 0xa * 0x90 + 0x126 * -0x1));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x22a7 * -0xaa + 0x1 * -0x1507ea + 0xcdb9f));
function a() {
    const s = [
        '198glWret',
        '4527870eUEvEC',
        'type',
        'erty',
        'describeTa',
        '3479456TSjBnB',
        '13857gfGoTH',
        'IaPEX',
        '90LYRGjH',
        'DiMaH',
        'ble',
        'removeColu',
        'sequelize',
        '1615871vecofc',
        '168BinHSE',
        'value',
        'allowNull',
        '1384551SsyxNL',
        'exports',
        '2314543oYfwee',
        'defineProp',
        'dataJson',
        'XGQUA',
        'TEXT',
        'Messages',
        '6sCJZUs',
        '__esModule',
        '27552BSOEWb',
        'addColumn',
        'DataTypes',
        '3479vnEiLj',
        'LfRYS'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * -0x3f1 + -0x4d + 0x1d9f);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x1bb)] = !![], Object[m(0x1c0) + m(0x1cf)](exports, m(0x1c6), c);
const sequelize_1 = require(m(0x1d8));
module[m(0x1be)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x1cb)] = o(0x1c4), g[p(0x1d3)] = p(0x1c1);
        const h = g, i = await f[p(0x1d0) + p(0x1d6)](h[p(0x1cb)]);
        if (!i || !i[h[o(0x1d3)]]) {
            const j = {};
            j[o(0x1ce)] = sequelize_1[o(0x1c9)][o(0x1c3)], j[p(0x1bc)] = !![], await f[o(0x1c8)](h[o(0x1cb)], h[o(0x1d3)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0x1d5)] = r(0x1c4), f[q(0x1c2)] = r(0x1c1);
        const g = f;
        await e[q(0x1d7) + 'mn'](g[q(0x1d5)], g[r(0x1c2)]);
    }
};