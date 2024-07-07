'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x18d9 * 0x1 + 0x1eba + -0x4 * 0x156);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xa1)) / (-0xcfb * -0x3 + 0xdd3 + 0x40f * -0xd) * (parseInt(j(0xa9)) / (0xaba * 0x1 + -0x2684 + 0x251 * 0xc)) + -parseInt(i(0x8d)) / (0xb * -0x1a5 + -0x17d5 + 0x29ef) + -parseInt(i(0xa0)) / (-0x1e7b + 0x59 * -0x4e + -0x12d * -0x31) + parseInt(j(0x8b)) / (-0x77 * -0x9 + -0x3 * 0x76d + 0x1 * 0x121d) * (-parseInt(j(0xa7)) / (0x973 + 0x20ee + 0x60d * -0x7)) + parseInt(j(0x96)) / (-0x10a9 + -0x57 * 0x11 + 0x1677) + parseInt(i(0xa4)) / (0x63 * -0x39 + 0x4bf + -0x2 * -0x8aa) + parseInt(j(0x8c)) / (-0x1 * -0x833 + -0x1 * -0xd55 + 0x1 * -0x157f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x47284 + 0xd8b9b * -0x1 + 0x11a274));
function a() {
    const q = [
        '3046948KScOFJ',
        '42600pdHidw',
        'exports',
        'INTEGER',
        '4286328wfCLjI',
        'oldStepAut',
        'oReplyId',
        '606kMieWV',
        'mkEbG',
        '4GNaANL',
        'removeColu',
        'SET\x20NULL',
        '46065GfbKNf',
        '16938360eSyVpP',
        '2921862eNqRYQ',
        'CASCADE',
        'Tickets',
        'nUMGY',
        'GznTr',
        'StepsReply',
        'DataTypes',
        'value',
        'defineProp',
        '5058382cLkKsj',
        'kLdAL',
        'addColumn',
        'kUtmr',
        'IXPYS',
        '__esModule',
        'sequelize',
        'erty',
        'rIann',
        'all'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x94)] = !![], Object[l(0x95) + k(0x9d)](exports, k(0x9b), g);
const sequelize_1 = require(k(0x9c));
module[k(0xa2)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x9e)] = m(0x8f), e[m(0x99)] = n(0xa5) + n(0xa6);
        const f = e;
        return Promise[n(0x9f)]([d[m(0x89) + 'mn'](f[n(0x9e)], f[m(0x99)])]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x91)] = o(0x8f), e[p(0x90)] = o(0xa5) + p(0xa6), e[p(0x97)] = p(0x92), e[p(0x9a)] = p(0x8e), e[p(0xa8)] = o(0x8a);
        const f = e;
        return d[p(0x98)](f[p(0x91)], f[p(0x90)], {
            'type': sequelize_1[p(0x93)][o(0xa3)],
            'references': {
                'model': f[o(0x97)],
                'key': 'id'
            },
            'onUpdate': f[p(0x9a)],
            'onDelete': f[p(0xa8)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};