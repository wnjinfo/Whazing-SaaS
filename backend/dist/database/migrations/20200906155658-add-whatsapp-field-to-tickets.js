'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1c6)) / (-0x12d + -0x73 * 0x13 + 0x9b7) + -parseInt(i(0x1bc)) / (-0x11da * 0x1 + -0x1a47 * 0x1 + 0x1 * 0x2c23) + -parseInt(j(0x1c5)) / (0x1656 + -0x367 * -0x5 + -0x2756) + -parseInt(i(0x1cd)) / (0xb9 * 0x25 + -0x7d * -0x35 + -0x1a4d * 0x2) * (-parseInt(j(0x1c1)) / (0x879 * -0x1 + -0x1b * -0xc7 + -0xc7f)) + -parseInt(j(0x1d4)) / (0x236f + -0x1bb3 * 0x1 + -0x7b6) + -parseInt(i(0x1d3)) / (0x17d7 + 0x1520 + 0x10 * -0x2cf) + parseInt(i(0x1cb)) / (0x1a0 + 0x77 * -0x54 + 0x66 * 0x5e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x3ddf3 + 0x359f5 + -0x594b1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3ce + 0x9c0 + 0x3 * -0x3f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'CASCADE',
        'fPyLi',
        'exports',
        'erty',
        'rDyyp',
        '355834pfBajd',
        '__esModule',
        'addColumn',
        'removeColu',
        'Duunv',
        '95oZRcAl',
        'wKJtN',
        'qNqUf',
        'vDpnA',
        '828537DrElQQ',
        '539090eUufwf',
        'SET\x20NULL',
        'Tickets',
        'value',
        'defineProp',
        '14308272PhQVYH',
        'DataTypes',
        '40744zuEXXS',
        'whatsappId',
        'sequelize',
        'Whatsapps',
        'jWhbo',
        'INTEGER',
        '913402feIIbh',
        '2985900UeYWAS'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x1c9)] = !![], Object[k(0x1ca) + k(0x1d8)](exports, l(0x1bd), g);
const sequelize_1 = require(l(0x1cf));
module[k(0x1d7)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1c3)] = m(0x1c8), e[m(0x1c4)] = n(0x1ce), e[m(0x1d1)] = n(0x1d0), e[n(0x1bb)] = n(0x1d5), e[n(0x1c0)] = m(0x1c7);
        const f = e;
        return d[m(0x1be)](f[n(0x1c3)], f[m(0x1c4)], {
            'type': sequelize_1[m(0x1cc)][n(0x1d2)],
            'references': {
                'model': f[m(0x1d1)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1bb)],
            'onDelete': f[n(0x1c0)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1d6)] = o(0x1c8), e[o(0x1c2)] = o(0x1ce);
        const f = e;
        return d[o(0x1bf) + 'mn'](f[o(0x1d6)], f[p(0x1c2)]);
    }
};