'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xf7)) / (-0x9fe + 0x24cb + -0x1acc) * (-parseInt(r(0x102)) / (-0x2 * -0x134b + 0x122d + -0x38c1)) + parseInt(r(0xf0)) / (0x35d + 0x2187 * 0x1 + -0x24e1) * (-parseInt(r(0xe9)) / (-0x11f6 + -0x1da9 + 0x2fa3)) + parseInt(r(0x108)) / (-0x76f * -0x3 + 0xc25 * 0x3 + -0x3ab7) * (parseInt(r(0xe6)) / (0x1 * 0x1a51 + -0x1941 + 0x1 * -0x10a)) + parseInt(r(0x106)) / (-0x73c * 0x2 + 0x1c10 + -0xd91) * (parseInt(r(0xf3)) / (0x34e + 0x2549 + 0x288f * -0x1)) + parseInt(s(0xff)) / (-0x1754 + -0x35 * -0x4f + 0x702) * (-parseInt(s(0xf4)) / (0x737 + 0x32 * 0xd + -0x9b7)) + -parseInt(r(0xfc)) / (0x15b8 + -0x1 * -0xa6f + -0x66c * 0x5) * (-parseInt(r(0xf8)) / (0x41f + 0x1097 + -0x17 * 0xe6)) + parseInt(r(0xeb)) / (0x137 * 0x1d + 0x14e5 + -0x9 * 0x63b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x989f + -0x1b3 * -0x605 + 0x772f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * 0x4b4 + 0xc03 + 0x745 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'DataTypes',
        '323774qezsPV',
        'ElxOW',
        'addColumn',
        '154584QDAJCF',
        'tArod',
        'Tickets',
        '2BffIKl',
        'gzVad',
        'type',
        'value',
        '2632pbaDVi',
        'STRING',
        '1905UQteGd',
        'defaultVal',
        'EKeuD',
        'exports',
        'erty',
        'allowNull',
        '__esModule',
        '2424XNyyYI',
        'closedAt',
        'sequelize',
        '56652ufNOGn',
        'DATE',
        '4842461BEUazF',
        'chatFlowId',
        'defineProp',
        'all',
        'ukUBP',
        '159wFuZed',
        'stepChatFl',
        'MLiaX',
        '20568GcdYBp',
        '170yITTJV',
        'removeColu',
        'ZOCIT',
        '181855tMvyUk',
        '12hUQKeq',
        'wQyMx',
        'INTEGER'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x105)] = !![], Object[t(0xed) + u(0x10c)](exports, t(0x10e), q);
const sequelize_1 = require(u(0xe8));
module[t(0x10b)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0x100)] = w(0x101), h[v(0x103)] = w(0xec), h[v(0x10a)] = w(0xf1) + 'ow', h[v(0xf2)] = v(0xe7);
        const i = h, j = {};
        j[w(0x104)] = sequelize_1[v(0xfb)][v(0xfa)], j[w(0x109) + 'ue'] = null, j[v(0x10d)] = !![];
        const k = {};
        k[v(0x104)] = sequelize_1[w(0xfb)][w(0x107)], k[w(0x109) + 'ue'] = null, k[w(0x10d)] = !![];
        const l = {};
        return l[w(0x104)] = sequelize_1[w(0xfb)][v(0xea)], l[v(0x109) + 'ue'] = null, l[v(0x10d)] = !![], Promise[v(0xee)]([
            g[v(0xfe)](i[v(0x100)], i[v(0x103)], j),
            g[w(0xfe)](i[w(0x100)], i[v(0x10a)], k),
            g[v(0xfe)](i[v(0x100)], i[w(0xf2)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xfd)] = x(0x101), e[y(0xf6)] = x(0xec), e[x(0xf9)] = x(0xf1) + 'ow', e[x(0xef)] = y(0xe7);
        const f = e;
        return Promise[y(0xee)]([
            d[y(0xf5) + 'mn'](f[x(0xfd)], f[y(0xf6)]),
            d[y(0xf5) + 'mn'](f[y(0xfd)], f[y(0xf9)]),
            d[y(0xf5) + 'mn'](f[y(0xfd)], f[x(0xef)])
        ]);
    }
};