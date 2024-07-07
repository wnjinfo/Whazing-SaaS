'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x168)) / (0x1952 + 0x1 * -0x1768 + -0x1e9) + -parseInt(i(0x16e)) / (-0x7 * 0x411 + 0x158 * 0x14 + -0x1 * -0x199) + -parseInt(i(0x178)) / (0x16ba + 0x4 * -0xa6 + -0x141f) * (-parseInt(i(0x16b)) / (-0x7f * -0x31 + 0xad3 + -0x231e)) + -parseInt(j(0x16f)) / (-0xd7e + -0xa * 0x5c + 0x111b) * (-parseInt(i(0x160)) / (-0x75a * 0x5 + 0x9 * 0x2e3 + 0xacd)) + -parseInt(j(0x179)) / (0x2d * 0xa2 + -0x5 * 0x653 + 0x7 * 0x74) + parseInt(i(0x16d)) / (0x14 * -0x150 + 0xe4b + -0x1f * -0x63) + -parseInt(i(0x162)) / (0x195f + -0x1e1b + 0x4c5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x72d77 * 0x1 + 0xd6d14 + 0x92 * -0x162f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x22b9 + -0x1ba2 + -0x5b8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x176)] = !![], Object[l(0x167) + l(0x15f)](exports, l(0x16c), g);
function a() {
    const q = [
        '6598130QymdWp',
        'DataTypes',
        'INTEGER',
        'erty',
        '6732ICGKWR',
        'BBzst',
        '3760002FgkteN',
        'ACmwP',
        'RHAlf',
        'ijUNw',
        'CASCADE',
        'defineProp',
        '783674yWUcJa',
        'Actions',
        'exBNB',
        '4CagEao',
        '__esModule',
        '4797328YlqXZb',
        '587528QpMjkz',
        '1745rbSyqI',
        'addColumn',
        'exports',
        'nextStep',
        'removeColu',
        'StepsReply',
        'sequelize',
        'value',
        'wewLK',
        '1201089tlNyBq'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0x175));
module[l(0x171)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x161)] = n(0x174) + m(0x169), e[m(0x164)] = n(0x172), e[n(0x177)] = n(0x174), e[m(0x16a)] = m(0x166);
        const f = e;
        return d[m(0x170)](f[n(0x161)], f[n(0x164)], {
            'type': sequelize_1[m(0x17a)][n(0x17b)],
            'references': {
                'model': f[n(0x177)],
                'key': 'id'
            },
            'onUpdate': f[n(0x16a)],
            'onDelete': f[m(0x16a)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x165)] = o(0x174) + o(0x169), e[p(0x163)] = p(0x172);
        const f = e;
        return d[o(0x173) + 'mn'](f[p(0x165)], f[o(0x163)]);
    }
};