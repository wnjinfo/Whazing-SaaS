'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1c2)) / (0x1 * -0x10bf + -0x2f9 * 0xb + 0x3173) + -parseInt(r(0x1c9)) / (0x101 * -0xe + 0x14f7 + -0x6e7) * (-parseInt(s(0x1c1)) / (-0x3d * 0x43 + 0xeeb + -0x1 * -0x10f)) + parseInt(r(0x1d3)) / (-0x2df * -0x7 + -0x2 * -0x8db + -0x81 * 0x4b) * (-parseInt(r(0x1bb)) / (-0x2f0 * 0x5 + 0x1 * 0x2427 + -0x1572)) + parseInt(r(0x1b9)) / (-0x1dfa + 0xbfd + 0x1d * 0x9f) + parseInt(s(0x1b8)) / (-0x1e00 + 0x301 + 0x1b06) * (-parseInt(s(0x1c5)) / (0xff + -0x52a + -0x2b * -0x19)) + parseInt(r(0x1da)) / (0x1e75 + 0x13 * -0x184 + 0x2 * -0xd0) + -parseInt(s(0x1be)) / (0x293 * -0x8 + 0x17d6 + -0x334);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5d * 0xef + 0x14e7e + 0x1016f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd42 + 0x14c5 * -0x1 + 0x23be);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
function a() {
    const z = [
        'value',
        '__esModule',
        'KScDO',
        'all',
        '2083518BLEioP',
        'isOnline',
        '339920XnbCRJ',
        '518622scmzXe',
        'WKwQv',
        '1033165cYNiRl',
        'addColumn',
        'OEtZo',
        '2244510LzwIcC',
        'BOOLEAN',
        'exports',
        '6pgynip',
        '236947RtKYMc',
        'defineProp',
        'DataTypes',
        '32bfqEhV',
        'HWcWT',
        'type',
        'OSnHn',
        '199744LrAyjE',
        'xBZqp',
        'erty',
        'MfUhn',
        'DATE',
        'Users',
        'defaultVal',
        'lastLogin',
        'sequelize',
        'removeColu',
        '4QXGKsM',
        'lastLogout',
        'zwxjX'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x1d6)] = !![], Object[t(0x1c3) + u(0x1cb)](exports, t(0x1d7), q);
const sequelize_1 = require(u(0x1d1));
module[t(0x1c0)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1d5)] = v(0x1ce), h[w(0x1ca)] = v(0x1d0), h[w(0x1bd)] = v(0x1d4), h[v(0x1d8)] = w(0x1b7);
        const i = h, j = {};
        j[v(0x1c7)] = sequelize_1[v(0x1c4)][w(0x1cd)], j[v(0x1cf) + 'ue'] = null;
        const k = {};
        k[v(0x1c7)] = sequelize_1[v(0x1c4)][w(0x1cd)], k[v(0x1cf) + 'ue'] = null;
        const l = {};
        return l[w(0x1c7)] = sequelize_1[w(0x1c4)][w(0x1bf)], l[w(0x1cf) + 'ue'] = ![], Promise[v(0x1d9)]([
            g[w(0x1bc)](i[v(0x1d5)], i[w(0x1ca)], j),
            g[w(0x1bc)](i[w(0x1d5)], i[w(0x1bd)], k),
            g[w(0x1bc)](i[v(0x1d5)], i[v(0x1d8)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x1ba)] = x(0x1ce), e[x(0x1c6)] = y(0x1d0), e[y(0x1c8)] = y(0x1d4), e[y(0x1cc)] = y(0x1b7);
        const f = e;
        return Promise[x(0x1d9)]([
            d[x(0x1d2) + 'mn'](f[y(0x1ba)], f[y(0x1c6)]),
            d[y(0x1d2) + 'mn'](f[y(0x1ba)], f[x(0x1c8)]),
            d[x(0x1d2) + 'mn'](f[x(0x1ba)], f[y(0x1cc)])
        ]);
    }
};