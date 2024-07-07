'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x18f)) / (0x623 + -0x20cb + -0x41 * -0x69) + -parseInt(i(0x193)) / (-0x43 * 0x49 + -0x1c18 + 0x2f35) + parseInt(i(0x1ac)) / (-0x66 + -0x217b + 0x21e4) * (parseInt(i(0x19b)) / (0x877 + -0x285 + -0x1 * 0x5ee)) + -parseInt(j(0x1a8)) / (-0x158c + 0x31 * -0x17 + -0x33f * -0x8) + parseInt(i(0x1a5)) / (-0x4 * -0x1fc + 0x2005 + 0x27ef * -0x1) * (parseInt(j(0x19f)) / (-0x1 * -0x1520 + -0x17a2 + 0x289)) + parseInt(i(0x194)) / (0x2 * 0xd66 + -0x4b * -0x1e + -0xbda * 0x3) * (-parseInt(i(0x1a9)) / (-0x188d + 0x4 * 0x223 + 0x805 * 0x2)) + parseInt(j(0x18e)) / (0x1 * -0x331 + -0x911 * -0x3 + -0x17f8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdee37 + -0x1b080b * -0x1 + 0xa4b * 0x33));
function a() {
    const q = [
        'erty',
        '2959725iMiQuS',
        '31671wsvIyg',
        'sequelize',
        'LYpcY',
        '4047MWTaOR',
        'Users',
        '14537830jcCHVH',
        '249356qfcmQQ',
        'addColumn',
        'nkDNQ',
        'adGDR',
        '1777824dhSeVb',
        '1472zlVjav',
        'EwnFb',
        'DataTypes',
        'exports',
        'removeColu',
        'value',
        'INTEGER',
        '332mxLHog',
        'defineProp',
        'Messages',
        'SET\x20NULL',
        '133OKIRqS',
        '__esModule',
        'CASCADE',
        'enTSw',
        'VBkrq',
        'FKiiq',
        '569976ZsRWnO',
        'userId'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1297 + -0x1fa7 + 0xe9d);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x199)] = !![], Object[l(0x19c) + k(0x1a7)](exports, k(0x1a0), g);
const sequelize_1 = require(l(0x1aa));
module[k(0x197)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x195)] = n(0x19d), e[n(0x1a3)] = n(0x1a6), e[m(0x1ab)] = m(0x18d), e[m(0x1a4)] = n(0x1a1), e[m(0x191)] = n(0x19e);
        const f = e;
        return d[m(0x190)](f[n(0x195)], f[m(0x1a3)], {
            'type': sequelize_1[m(0x196)][n(0x19a)],
            'references': {
                'model': f[n(0x1ab)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1a4)],
            'onDelete': f[n(0x191)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1a2)] = p(0x19d), e[o(0x192)] = o(0x1a6);
        const f = e;
        return d[p(0x198) + 'mn'](f[p(0x1a2)], f[o(0x192)]);
    }
};