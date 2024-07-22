'use strict';
function a() {
    const z = [
        '3215475yvzFvO',
        'type',
        'exports',
        '__esModule',
        'lastLogout',
        'erty',
        '31378XVgRrk',
        'UvGoh',
        'QFKmT',
        'addColumn',
        'PqWsn',
        'removeColu',
        'isOnline',
        '18191484IJNcnL',
        'defineProp',
        'RuaXH',
        'value',
        'fjKfA',
        '312109LEKDNZ',
        'defaultVal',
        '7404906PDGUUq',
        'kSPIT',
        'QJfjT',
        '7434415AfEfVb',
        'DataTypes',
        'all',
        '47LyBTTj',
        'Users',
        '1434964upIkPS',
        '176GRlxCz',
        'DATE',
        'lastLogin',
        'sequelize',
        'SlooV',
        'BOOLEAN'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc * 0x112 + -0x179e + -0x147 * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd7)) / (0x1 * 0xbf1 + -0x2 * -0x11b0 + -0x2f50) * (parseInt(s(0xc3)) / (0xb5a + -0xa * -0x293 + 0x1 * -0x2516)) + parseInt(s(0xbd)) / (0x2195 + -0x3 * 0x21d + -0x1b3b) + -parseInt(r(0xd9)) / (0x22b6 + -0x30f * -0x9 + -0x3e39) + -parseInt(s(0xd4)) / (-0x5 * -0x365 + -0x5 * -0x25b + -0x1cbb) + parseInt(r(0xd1)) / (0xf0 + -0x3 * -0x919 + -0x1c35) + parseInt(r(0xcf)) / (-0xa * -0x11d + -0x37 + -0xae4) * (-parseInt(s(0xda)) / (-0x2347 + 0x5f9 + -0xeab * -0x2)) + parseInt(r(0xca)) / (0x1d39 + -0xb * 0x164 + -0x6f2 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc88ff + 0x1341ae + 0x352a * -0x61));
const q = {};
q[t(0xcd)] = !![], Object[u(0xcb) + u(0xc2)](exports, u(0xc0), q);
const sequelize_1 = require(u(0xba));
module[t(0xbf)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0xc5)] = w(0xd8), h[v(0xd2)] = w(0xb9), h[v(0xcc)] = w(0xc1), h[v(0xce)] = w(0xc9);
        const i = h, j = {};
        j[w(0xbe)] = sequelize_1[v(0xd5)][w(0xdb)], j[v(0xd0) + 'ue'] = null;
        const k = {};
        k[w(0xbe)] = sequelize_1[v(0xd5)][w(0xdb)], k[v(0xd0) + 'ue'] = null;
        const l = {};
        return l[v(0xbe)] = sequelize_1[v(0xd5)][v(0xbc)], l[v(0xd0) + 'ue'] = ![], Promise[w(0xd6)]([
            g[v(0xc6)](i[w(0xc5)], i[w(0xd2)], j),
            g[v(0xc6)](i[w(0xc5)], i[v(0xcc)], k),
            g[v(0xc6)](i[v(0xc5)], i[v(0xce)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0xd3)] = y(0xd8), e[y(0xbb)] = x(0xb9), e[x(0xc7)] = y(0xc1), e[y(0xc4)] = y(0xc9);
        const f = e;
        return Promise[x(0xd6)]([
            d[x(0xc8) + 'mn'](f[x(0xd3)], f[x(0xbb)]),
            d[y(0xc8) + 'mn'](f[x(0xd3)], f[y(0xc7)]),
            d[y(0xc8) + 'mn'](f[x(0xd3)], f[x(0xc4)])
        ]);
    }
};