'use strict';
function a() {
    const q = [
        '90sOXEFQ',
        'userId',
        'jfKOa',
        '219444AptXJG',
        'JbUjO',
        '86608BrLshC',
        '765kyruxs',
        'erty',
        'CASCADE',
        'LvYhG',
        'sequelize',
        'DataTypes',
        'addColumn',
        '__esModule',
        'VFGSK',
        'removeColu',
        '16HemcPg',
        '138zCTdVW',
        '26084ILZEXH',
        '1056MwhDmA',
        'defineProp',
        '143590HpitPL',
        'Users',
        '119622cfmcjg',
        'INTEGER',
        'rJTEc',
        'exports',
        '139109ZylBfG',
        'value',
        '11167741IUqZEZ',
        'tfLlU',
        '301AgPkSb',
        'Messages',
        'MSjpL',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1c2)) / (-0x996 + 0x463 * -0x3 + 0xe0 * 0x1a) * (parseInt(i(0x1b7)) / (-0xc53 + 0x7 * 0x4b1 + -0x1482)) + -parseInt(j(0x1b8)) / (-0x1 * -0xb53 + 0x8f9 + -0x1449) * (-parseInt(j(0x1b9)) / (-0x1994 + 0x331 * 0x1 + 0x47b * 0x5)) + -parseInt(j(0x1ca)) / (0x125f + 0x1 * -0xa9f + -0x7bb) * (-parseInt(j(0x1be)) / (-0x18d * 0x1 + -0x3 * -0x6f8 + -0x1355)) + -parseInt(i(0x1c6)) / (-0x2 * -0x720 + 0x167 * -0x12 + 0x7 * 0x193) * (parseInt(i(0x1cf)) / (0x24 * -0x84 + 0x191a + -0x682)) + -parseInt(i(0x1d0)) / (-0x1dae + -0x70a + 0x24c1) * (parseInt(j(0x1bc)) / (0xf1a + -0x1b4b + 0x65 * 0x1f)) + parseInt(j(0x1ba)) / (0x2447 * 0x1 + 0x925 * 0x4 + -0x48d0) * (parseInt(i(0x1cd)) / (0x2385 + -0xca2 + 0x1 * -0x16d7)) + -parseInt(j(0x1c4)) / (-0x395 + -0x3fe + 0x7a0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a807c + 0x5299 * 0x14 + 0x1 * 0x23091e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x573 * -0x1 + -0x18b3 + 0x14f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1c3)] = !![], Object[l(0x1bb) + k(0x1d1)](exports, l(0x1b4), g);
const sequelize_1 = require(l(0x1b1));
module[l(0x1c1)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1ce)] = n(0x1c7), e[n(0x1d3)] = m(0x1cb), e[m(0x1cc)] = m(0x1bd), e[n(0x1c8)] = n(0x1d2), e[m(0x1b5)] = m(0x1c9);
        const f = e;
        return d[m(0x1b3)](f[m(0x1ce)], f[n(0x1d3)], {
            'type': sequelize_1[m(0x1b2)][m(0x1bf)],
            'references': {
                'model': f[m(0x1cc)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1c8)],
            'onDelete': f[m(0x1b5)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1c0)] = o(0x1c7), e[o(0x1c5)] = o(0x1cb);
        const f = e;
        return d[p(0x1b6) + 'mn'](f[p(0x1c0)], f[o(0x1c5)]);
    }
};