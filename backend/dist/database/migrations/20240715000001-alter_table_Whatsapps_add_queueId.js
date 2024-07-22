'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0x8e + -0x1 * -0xb0e + -0x767);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xe5)) / (-0x1546 * -0x1 + -0x10aa + -0x49b) + -parseInt(i(0xf5)) / (-0x2 * -0x166 + -0x177e + 0x14b4) * (-parseInt(i(0xe4)) / (-0x3b6 + -0x3 * -0x22a + 0x1 * -0x2c5)) + parseInt(j(0xeb)) / (0x7 * -0x58f + 0x1 * -0x3f4 + -0x3 * -0xe4b) * (parseInt(j(0xe9)) / (-0x223e + -0x3f7 * -0x3 + -0xb2f * -0x2)) + parseInt(j(0xfc)) / (0x3f7 + -0x180 * 0x16 + 0x1d0f) + parseInt(i(0xfd)) / (-0x1207 + 0x1fa9 + -0xd9b) + -parseInt(j(0xf1)) / (-0x1251 * 0x1 + 0x126d + 0x5 * -0x4) + -parseInt(i(0xe3)) / (0x868 + 0x1607 + -0x1e66);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x99884 + -0x106bdd + 0x10a4d3));
function a() {
    const q = [
        '19688TUzxbb',
        '__esModule',
        'EIfPI',
        'Whatsapps',
        'tFjSf',
        'BUHzW',
        '9602872hNwJQB',
        'addColumn',
        'sequelize',
        'value',
        '2826yjKJGh',
        'CASCADE',
        'exports',
        'DataTypes',
        'qqTlN',
        'INTEGER',
        'EjRuR',
        '7675650itqnTJ',
        '8841364GrVqvA',
        'queueId',
        'SET\x20NULL',
        'Queues',
        'vkzjF',
        '19584720Qcapoo',
        '1971uQUVLM',
        '6965cscCzC',
        'removeColu',
        'UxWOb',
        'erty',
        '565obfMJB',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xf4)] = !![], Object[l(0xea) + k(0xe8)](exports, k(0xec), g);
const sequelize_1 = require(k(0xf3));
module[l(0xf7)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xed)] = n(0xee), e[m(0xfb)] = m(0xfe), e[n(0xe2)] = n(0xe1), e[n(0xf0)] = n(0xf6), e[n(0xf9)] = n(0xff);
        const f = e;
        return d[m(0xf2)](f[n(0xed)], f[n(0xfb)], {
            'type': sequelize_1[n(0xf8)][m(0xfa)],
            'references': {
                'model': f[n(0xe2)],
                'key': 'id'
            },
            'onUpdate': f[n(0xf0)],
            'onDelete': f[n(0xf9)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xe7)] = p(0xee), e[p(0xef)] = p(0xfe);
        const f = e;
        return d[o(0xe6) + 'mn'](f[o(0xe7)], f[o(0xef)]);
    }
};