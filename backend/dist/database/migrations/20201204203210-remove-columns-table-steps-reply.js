'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x20a)) / (-0x166a + -0xfef * -0x1 + -0x5 * -0x14c) + -parseInt(o(0x1f8)) / (0x10f7 * -0x1 + -0x2 * -0x11f9 + 0x1 * -0x12f9) + -parseInt(n(0x20b)) / (-0x53d * -0x3 + -0x26c3 + -0x1 * -0x170f) * (parseInt(o(0x213)) / (0x20a7 * 0x1 + -0x218a + 0xe7)) + parseInt(n(0x1fa)) / (0x23b * -0x2 + 0x2232 + -0x1db7) + -parseInt(n(0x1fc)) / (-0x21ee + 0x120e * -0x2 + 0x4610) + parseInt(n(0x209)) / (-0x1241 + 0x2 * 0xd45 + -0x421 * 0x2) * (-parseInt(n(0x202)) / (0x3 * 0x737 + 0x1eb6 + 0xf * -0x37d)) + -parseInt(n(0x214)) / (-0x5 * -0x2ba + -0x1fad + 0x1214) * (-parseInt(n(0x1f9)) / (0x25b7 + -0x414 + -0x8d * 0x3d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34366 + -0x52591 * -0x3 + 0x2be22));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a27 + 0xab * -0x1d + -0x3b * -0xce);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
function a() {
    const v = [
        'DataTypes',
        'StepsReply',
        'sequelize',
        '__esModule',
        'value',
        '4PPkOMC',
        '99omuPTC',
        'INTEGER',
        'ZKqtO',
        'exports',
        'TBbzN',
        '1370098Oyevcz',
        '5467800HmblvP',
        '3368785OMvldA',
        'wkppM',
        '1554288sgOyNM',
        'removeColu',
        'all',
        'stepOrder',
        'erty',
        'action',
        '8YXVbMO',
        'defineProp',
        'addColumn',
        'defaultVal',
        'type',
        'zMPlz',
        'rwZAL',
        '12912263xdTaBk',
        '1350421kuBrdx',
        '4714305SmpGdh',
        'allowNull',
        'nrhVa'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x212)] = !![], Object[p(0x203) + q(0x200)](exports, q(0x211), m);
const sequelize_1 = require(q(0x210));
module[p(0x1f6)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0x1f5)] = s(0x20f), e[s(0x1f7)] = r(0x201), e[s(0x20d)] = s(0x1ff);
        const f = e;
        return Promise[r(0x1fe)]([
            d[r(0x1fd) + 'mn'](f[s(0x1f5)], f[r(0x1f7)]),
            d[s(0x1fd) + 'mn'](f[s(0x1f5)], f[s(0x20d)])
        ]);
    },
    'down': f => {
        const t = p, u = p, g = {};
        g[t(0x208)] = u(0x20f), g[t(0x207)] = t(0x201), g[u(0x1fb)] = u(0x1ff);
        const h = g, i = {};
        i[t(0x206)] = sequelize_1[t(0x20e)][t(0x1f4)], i[t(0x20c)] = ![], i[u(0x205) + 'ue'] = 0x0;
        const j = {};
        return j[t(0x206)] = sequelize_1[u(0x20e)][t(0x1f4)], j[t(0x20c)] = ![], Promise[t(0x1fe)]([
            f[u(0x204)](h[u(0x208)], h[u(0x207)], i),
            f[u(0x204)](h[u(0x208)], h[t(0x1fb)], j)
        ]);
    }
};