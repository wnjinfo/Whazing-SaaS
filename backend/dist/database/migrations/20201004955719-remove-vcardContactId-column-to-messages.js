'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xc4)) / (-0x25 * -0x45 + 0x1 * 0x1f61 + 0x845 * -0x5) * (parseInt(i(0xc3)) / (0x11a7 + 0x11 * -0xc5 + -0x49 * 0x10)) + -parseInt(i(0xc7)) / (-0x1852 + -0x131 * -0x1f + 0x1 * -0xc9a) + parseInt(i(0xcb)) / (0x1 * 0xf7e + -0x2256 + 0x4b7 * 0x4) * (parseInt(i(0xcc)) / (0x637 * -0x2 + 0xd * 0x125 + -0x26e)) + -parseInt(j(0xc2)) / (-0x2 * -0x175 + -0x72a + -0x223 * -0x2) + -parseInt(i(0xc8)) / (-0x8e * 0x8 + -0xb94 + 0x100b) * (parseInt(j(0xd4)) / (0x14f1 + 0x8 * 0x4b1 + 0x1 * -0x3a71)) + parseInt(i(0xd7)) / (0x1 * 0x469 + -0xf1 * -0xb + 0x1 * -0xebb) + -parseInt(i(0xd9)) / (0x257b + 0x275 + -0x27e6) * (-parseInt(j(0xc5)) / (-0x1ce + -0x1 * -0x979 + 0x3d * -0x20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xff0da + 0x18f * -0x49 + 0x1939a0));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x2432 + 0x20d7 * 0x1 + 0x444a * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'erty',
        'sequelize',
        'exports',
        'INTEGER',
        'CASCADE',
        '4689300MzSXIy',
        '6382uaEXNZ',
        '53TsCSWU',
        '22ABZTXJ',
        'Nlnix',
        '3128442eDSolj',
        '6191423FUmcgf',
        'Knojf',
        'lRKKj',
        '3631632uDKepu',
        '5hwIgTg',
        'value',
        'Contacts',
        'obdPy',
        'gJwjT',
        'XnLsv',
        'defineProp',
        'ctId',
        '8alZSwy',
        '__esModule',
        'Messages',
        '7599141zMDpxB',
        'removeColu',
        '6834000idgocL',
        'addColumn',
        'vcardConta',
        'DataTypes'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xcd)] = !![], Object[l(0xd2) + l(0xdd)](exports, k(0xd5), g);
const sequelize_1 = require(l(0xde));
module[l(0xbf)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xcf)] = n(0xd6), e[m(0xd1)] = m(0xdb) + m(0xd3);
        const f = e;
        return d[n(0xd8) + 'mn'](f[n(0xcf)], f[n(0xd1)]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xc9)] = o(0xd6), e[p(0xc6)] = o(0xdb) + p(0xd3), e[o(0xca)] = p(0xce), e[o(0xd0)] = p(0xc1);
        const f = e;
        return d[p(0xda)](f[o(0xc9)], f[p(0xc6)], {
            'type': sequelize_1[o(0xdc)][p(0xc0)],
            'references': {
                'model': f[o(0xca)],
                'key': 'id'
            },
            'onUpdate': f[o(0xd0)],
            'onDelete': f[p(0xd0)]
        });
    }
};