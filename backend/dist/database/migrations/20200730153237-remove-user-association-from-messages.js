'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x113)) / (0x264e + 0x214c + 0x4799 * -0x1) * (-parseInt(j(0x119)) / (-0xd9d + -0x125 + 0xec4)) + -parseInt(j(0x122)) / (-0x984 + 0x9c7 * -0x3 + -0x2 * -0x136e) * (-parseInt(i(0x114)) / (-0x23 * -0x101 + 0x2418 * 0x1 + -0xb1 * 0x67)) + -parseInt(j(0x10c)) / (0x39 * 0x37 + 0x45 * 0x71 + 0x31 * -0xdf) + -parseInt(i(0x107)) / (0x7 * -0x34f + -0x1 * 0x2c3 + 0x19f2) * (parseInt(i(0x11b)) / (0x1d6 + -0xd8f * 0x2 + 0x194f)) + -parseInt(i(0x124)) / (-0xe4f + 0x10d + -0xbd * -0x12) * (-parseInt(i(0x111)) / (0xe62 + 0xb25 * 0x1 + -0x197e)) + -parseInt(i(0x104)) / (-0x1 * -0x14bb + 0x100b * -0x1 + -0x4a6) * (parseInt(i(0x121)) / (-0xf17 * 0x2 + -0x6 * -0x48b + -0x3 * -0xfd)) + parseInt(j(0x10b)) / (0x3a * 0x71 + -0x2 * -0xd67 + -0x345c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a * -0xfc5 + 0x3796d + 0x78373 * 0x1));
const g = {};
function a() {
    const q = [
        'CASCADE',
        'Messages',
        'DataTypes',
        '4401507nOlJYo',
        '1485MMasrQ',
        'userId',
        '2189488EwlKWl',
        'HIvbT',
        '10FadIfM',
        'defineProp',
        'exports',
        '89580ygRexZ',
        'SET\x20NULL',
        'XcIsB',
        'aDFLT',
        '10329264TDMpJi',
        '4037485zYsdvL',
        'INTEGER',
        'removeColu',
        'BuWKP',
        'value',
        '18KSuZJz',
        '__esModule',
        '12SMIGoI',
        '8328YrGkNl',
        'xIVAn',
        'sequelize',
        'erty',
        'XxVlH',
        '34348sfRVuq',
        'Users',
        '287SWqBCA',
        'addColumn',
        'fKiId'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x110)] = !![], Object[l(0x105) + l(0x117)](exports, l(0x112), g);
const sequelize_1 = require(l(0x116));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xf86 + 0x18c1 * 0x1 + 0x74f);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x106)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x10a)] = m(0x11f), e[m(0x109)] = m(0x123);
        const f = e;
        return d[n(0x10e) + 'mn'](f[n(0x10a)], f[m(0x109)]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x11d)] = p(0x11f), e[o(0x125)] = o(0x123), e[p(0x115)] = o(0x11a), e[o(0x10f)] = p(0x11e), e[o(0x118)] = o(0x108);
        const f = e;
        return d[o(0x11c)](f[p(0x11d)], f[o(0x125)], {
            'type': sequelize_1[o(0x120)][p(0x10d)],
            'references': {
                'model': f[p(0x115)],
                'key': 'id'
            },
            'onUpdate': f[p(0x10f)],
            'onDelete': f[o(0x118)]
        });
    }
};