'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xea9 * 0x2 + -0x11 * -0x212 + -0x1 * 0x3fad);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
function a() {
    const r = [
        'all',
        '1286388WqBNqL',
        '403130ZfMRFq',
        'value',
        'ZejAe',
        'YKlxl',
        'defineProp',
        '448548bqZVxm',
        '5UublWt',
        'HcjoZ',
        '__esModule',
        'status',
        'sequelize',
        'STRING',
        'KMyew',
        'exports',
        'offline',
        '126932xKdpwo',
        '3626832yUnrCk',
        '382024SGvxQd',
        'gSsPj',
        'removeColu',
        'Users',
        '485312WYnvdO',
        'DataTypes',
        'erty',
        'addColumn'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xe5)) / (-0x358 + 0xc97 + -0x1a * 0x5b) + parseInt(j(0xeb)) / (-0x535 * 0x7 + 0x23ea + 0x8b) + parseInt(j(0xdb)) / (-0x22ae + 0x1533 + -0xb * -0x13a) + -parseInt(j(0xe7)) / (0x202a + 0x1942 * 0x1 + -0x3968) + -parseInt(k(0xdc)) / (-0x12b1 + 0xb32 + -0x1 * -0x784) * (-parseInt(j(0xf0)) / (0xc7 * -0x2f + -0x2 * 0x6e2 + -0x3df * -0xd)) + -parseInt(k(0xf1)) / (0x1260 + 0x200b + -0x3264) + -parseInt(k(0xe6)) / (-0x8d1 + -0xa2 * 0x11 + 0xef * 0x15);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2cb7d + -0xcca * 0x16 + 0x3e2b));
const i = {};
i[l(0xd7)] = !![], Object[m(0xda) + m(0xed)](exports, l(0xde), i);
const sequelize_1 = require(l(0xe0));
module[m(0xe3)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0xe2)] = n(0xea), e[o(0xdd)] = o(0xdf), e[o(0xd9)] = o(0xe4);
        const f = e;
        return Promise[o(0xef)]([d[o(0xee)](f[n(0xe2)], f[o(0xdd)], {
                'type': sequelize_1[o(0xec)][o(0xe1)],
                'allowNull': ![],
                'defaultValue': f[o(0xd9)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xd8)] = q(0xea), e[p(0xe8)] = q(0xdf);
        const f = e;
        return Promise[q(0xef)]([d[p(0xe9) + 'mn'](f[q(0xd8)], f[p(0xe8)])]);
    }
};