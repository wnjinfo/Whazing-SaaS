'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x109)) / (-0x4 * 0x98e + 0x88b + -0x83 * -0x3a) * (parseInt(i(0x117)) / (0x1b96 + -0x1433 + 0x1 * -0x761)) + -parseInt(i(0x119)) / (-0x10e7 * 0x1 + -0xa1 * 0x2e + 0x2dd8) * (-parseInt(j(0x11a)) / (0x1c9d + -0x29a + -0x19ff)) + parseInt(j(0x107)) / (-0x737 * -0x4 + -0x5af + 0x2 * -0xb94) + parseInt(i(0x10a)) / (0x2043 + 0x14c9 + -0x269 * 0x16) + parseInt(j(0x114)) / (-0xd99 + -0x24ac + -0x4 * -0xc93) + parseInt(i(0x113)) / (0x1 * -0x1565 + 0x172a + 0x59 * -0x5) * (parseInt(i(0x105)) / (-0x223 * 0x10 + -0x16aa + 0x38e3)) + -parseInt(i(0x11c)) / (-0x3c3 * 0xa + 0x1186 + 0x1422);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5b03 * 0x35 + 0x3 * 0x4ca5 + -0x3 * -0x9b93f));
function a() {
    const q = [
        'JoGAu',
        'erty',
        'hziVe',
        '3240ASaANM',
        'XGaKE',
        '1093205dbCodx',
        'StepsReply',
        '986989VQuWwY',
        '6847752pibHGS',
        'removeColu',
        'Actions',
        'exports',
        'addColumn',
        'CTAYU',
        'DataTypes',
        'sequelize',
        'CASCADE',
        '1544quZPPy',
        '7301742WlRrLE',
        'value',
        'defineProp',
        '2mUHxTJ',
        'iYXVU',
        '2241KOcDCA',
        '3452rsdiNU',
        'INTEGER',
        '13944340KsdDkc',
        '__esModule',
        'nextStep',
        'PlwgR'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x39 * 0x2b + 0x2 * 0x74b + -0x403);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x115)] = !![], Object[k(0x116) + l(0x103)](exports, l(0x11d), g);
const sequelize_1 = require(k(0x111));
module[k(0x10d)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x101)] = m(0x108) + m(0x10c), e[n(0x118)] = m(0x100), e[m(0x104)] = m(0x108), e[n(0x106)] = m(0x112);
        const f = e;
        return d[n(0x10e)](f[n(0x101)], f[m(0x118)], {
            'type': sequelize_1[m(0x110)][n(0x11b)],
            'references': {
                'model': f[n(0x104)],
                'key': 'id'
            },
            'onUpdate': f[n(0x106)],
            'onDelete': f[n(0x106)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x10f)] = p(0x108) + p(0x10c), e[o(0x102)] = o(0x100);
        const f = e;
        return d[o(0x10b) + 'mn'](f[p(0x10f)], f[p(0x102)]);
    }
};