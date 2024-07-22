'use strict';
const k = b, l = b;
function a() {
    const q = [
        'StepsReply',
        'Tickets',
        'peiTA',
        'DataTypes',
        '173820JqjOTp',
        '__esModule',
        'KimvB',
        '1113DkwQZW',
        'INTEGER',
        'PbpXy',
        '1521456JDrAiI',
        'defineProp',
        'all',
        'CASCADE',
        'addColumn',
        'value',
        'erty',
        'exports',
        '32808oqHCwo',
        'fxQDs',
        '1633128IFLYBj',
        'oldStepAut',
        'sequelize',
        '3374648LLOujX',
        '859469tqDqSM',
        'removeColu',
        'oReplyId',
        'mKKfr',
        '5467555LgICjU',
        'wFUxH',
        'SET\x20NULL',
        'sgprv'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x135 * 0x8 + -0x5c2 * 0x6 + -0x8 * -0x59f);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xcb)) / (0x6d * 0x1f + -0x931 * -0x1 + 0x1663 * -0x1) + parseInt(j(0xdd)) / (0x2619 + 0x1 * -0x5df + -0x8 * 0x407) + parseInt(i(0xc7)) / (-0x21ca + 0x1579 * 0x1 + -0x1 * -0xc54) + -parseInt(i(0xd7)) / (-0x1527 + 0x229d + -0xd72) + -parseInt(j(0xcf)) / (0x1 * 0xa7d + 0x10 + 0x151 * -0x8) + parseInt(i(0xc5)) / (0x3 * 0x31c + 0x1 * 0x1995 + -0x22e3) * (parseInt(i(0xda)) / (-0x2c5 * -0x4 + 0xe21 + -0x192e)) + parseInt(i(0xca)) / (0xa4b * 0x1 + 0x10d8 + -0x1b1b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11 * -0x3f44 + 0x4c * 0xa06 + -0x4 * -0x7e87));
const g = {};
g[k(0xe2)] = !![], Object[l(0xde) + l(0xe3)](exports, l(0xd8), g);
const sequelize_1 = require(k(0xc9));
module[k(0xc4)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xc6)] = m(0xd4), e[m(0xd0)] = n(0xc8) + n(0xcd);
        const f = e;
        return Promise[m(0xdf)]([d[n(0xcc) + 'mn'](f[n(0xc6)], f[m(0xd0)])]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xd9)] = o(0xd4), e[p(0xd5)] = p(0xc8) + p(0xcd), e[p(0xd2)] = p(0xd3), e[p(0xdc)] = o(0xe0), e[o(0xce)] = o(0xd1);
        const f = e;
        return d[o(0xe1)](f[o(0xd9)], f[o(0xd5)], {
            'type': sequelize_1[p(0xd6)][p(0xdb)],
            'references': {
                'model': f[p(0xd2)],
                'key': 'id'
            },
            'onUpdate': f[o(0xdc)],
            'onDelete': f[o(0xce)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};