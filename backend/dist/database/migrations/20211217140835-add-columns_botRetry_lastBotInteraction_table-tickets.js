'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * -0x211 + 0x9d * 0x6 + 0xa * 0xec);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x83)) / (-0x189 * 0x18 + 0x10 * 0x1ff + -0x1a3 * -0x3) * (-parseInt(o(0x90)) / (-0x12fc + -0x25a8 + -0x12e2 * -0x3)) + parseInt(o(0x98)) / (-0x1d * 0x113 + 0x254a + -0x620) + parseInt(o(0x9c)) / (-0x7e * -0x16 + -0x55d * 0x5 + 0x1001) + parseInt(o(0x9f)) / (0xe46 + 0x2dd + -0x111e) + parseInt(n(0x95)) / (-0x3 * -0xba5 + -0x2ed + -0xffe * 0x2) + -parseInt(n(0x85)) / (0x23d1 + 0x1ce7 + -0x40b1) + -parseInt(o(0x9e)) / (0x175e + 0x1 * 0x1bcf + -0x3325);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xff424 + -0x11184d + -0x25257 * -0x12));
const m = {};
function a() {
    const v = [
        'addColumn',
        'exports',
        '17522NtaNui',
        'esFJi',
        'allowNull',
        'erty',
        'lastIntera',
        '5032842kjFGgR',
        'INTEGER',
        'DATE',
        '3264465wDNAqk',
        'sequelize',
        '__esModule',
        'defineProp',
        '573852yqCbqT',
        'NFCGu',
        '14948856iHfThC',
        '3224835eQkLlz',
        'Tickets',
        'type',
        'all',
        'defaultVal',
        '9dHGkkb',
        'removeColu',
        '2469523VJGZZq',
        'gjBRm',
        'WFVur',
        'EqOVz',
        'botRetries',
        'DataTypes',
        'ctionBot',
        'SHybo',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x8d)] = !![], Object[q(0x9b) + p(0x93)](exports, p(0x9a), m);
const sequelize_1 = require(p(0x99));
module[p(0x8f)] = {
    'up': f => {
        const r = q, s = q, g = {};
        g[r(0x87)] = r(0xa0), g[s(0x88)] = s(0x89), g[s(0x9d)] = r(0x94) + s(0x8b);
        const h = g, i = {};
        i[s(0x80)] = sequelize_1[s(0x8a)][s(0x96)], i[s(0x92)] = ![], i[r(0x82) + 'ue'] = 0x0;
        const j = {};
        return j[r(0x80)] = sequelize_1[r(0x8a)][s(0x97)], j[s(0x92)] = !![], j[s(0x82) + 'ue'] = null, Promise[s(0x81)]([
            f[s(0x8e)](h[s(0x87)], h[r(0x88)], i),
            f[s(0x8e)](h[r(0x87)], h[s(0x9d)], j)
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x8c)] = u(0xa0), e[u(0x86)] = t(0x89), e[u(0x91)] = u(0x94) + t(0x8b);
        const f = e;
        return Promise[u(0x81)]([
            d[u(0x84) + 'mn'](f[u(0x8c)], f[u(0x86)]),
            d[t(0x84) + 'mn'](f[u(0x8c)], f[u(0x91)])
        ]);
    }
};