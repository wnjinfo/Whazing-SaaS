'use strict';
function a() {
    const q = [
        'value',
        '613900nRSsQe',
        '2217scWnAk',
        'DataTypes',
        'ryaZO',
        'Tenants',
        'erty',
        '__esModule',
        'Plans',
        'CASCADE',
        '3281980dJsXTh',
        'sequelize',
        'exports',
        '45744GKYjbv',
        '2400025scrzkY',
        'AkRgg',
        '8eUixAw',
        '3668NLzWsi',
        'SET\x20NULL',
        'INTEGER',
        'SeQcm',
        'MOEss',
        'defineProp',
        '2794MiiPvs',
        'planId',
        '30LjpLIp',
        '6244281TMVtWY',
        '236789jQgqAd',
        'addColumn',
        'aIRoD',
        'ySlEc',
        'urxCW',
        '2VyokSR',
        'removeColu'
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
            const f = -parseInt(i(0x202)) / (-0x1f0f + 0xfdb + 0xf35) * (parseInt(i(0x205)) / (-0xe3a + 0x82e + 0x60e)) + parseInt(j(0x206)) / (-0x18fb + -0x14fd + 0x2dfb) * (parseInt(i(0x1f3)) / (-0x11 * 0xbc + -0x1d12 + 0x272 * 0x11)) + parseInt(j(0x212)) / (-0x2 * -0x10a8 + -0x141d + -0x2 * 0x697) + parseInt(i(0x1fb)) / (-0x531 + -0x15f4 + 0x1b2b) * (-parseInt(j(0x1fd)) / (0x5c3 * 0x4 + 0x880 * 0x2 + -0x2805)) + -parseInt(i(0x214)) / (0x25a1 + 0x2 * -0x65a + -0x18e5) * (-parseInt(i(0x1fc)) / (0x2 * 0x433 + 0x7c2 + 0x1 * -0x101f)) + parseInt(j(0x20e)) / (-0xc * -0x22b + 0x32 * -0x47 + 0x64 * -0x1f) + parseInt(j(0x1f9)) / (-0x165e + 0x20c + 0x145d) * (-parseInt(i(0x211)) / (0x26 * 0x87 + -0x61f * 0x2 + -0x3e * 0x20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc6372 + 0x1 * -0x3d5a + 0x132a34));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0x10d3 + 0x1974 + -0x3927 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x204)] = !![], Object[k(0x1f8) + l(0x20a)](exports, k(0x20b), g);
const sequelize_1 = require(l(0x20f));
module[l(0x210)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x213)] = n(0x209), e[n(0x200)] = n(0x1fa), e[m(0x1f7)] = m(0x20c), e[m(0x1f6)] = n(0x20d), e[n(0x1ff)] = n(0x1f4);
        const f = e;
        return d[m(0x1fe)](f[n(0x213)], f[m(0x200)], {
            'type': sequelize_1[n(0x207)][m(0x1f5)],
            'references': {
                'model': f[n(0x1f7)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1f6)],
            'onDelete': f[m(0x1ff)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x208)] = p(0x209), e[p(0x201)] = o(0x1fa);
        const f = e;
        return d[o(0x203) + 'mn'](f[p(0x208)], f[o(0x201)]);
    }
};