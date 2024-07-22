'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x95f + 0x2 * 0x425 + 0x17b * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x164)) / (-0x1d1e + 0xc8f + -0x1a8 * -0xa) * (parseInt(r(0x169)) / (-0x1b5 * -0xb + 0x69b * 0x1 + -0x1960)) + parseInt(s(0x17f)) / (-0xcc7 * 0x1 + -0x1e75 + 0x2b3f) * (-parseInt(r(0x167)) / (-0x3 * 0x31a + 0x2 * 0x36e + -0x5 * -0x7e)) + -parseInt(s(0x181)) / (0xe5 * -0x13 + -0x1 * 0x1d95 + 0x97 * 0x4f) + parseInt(r(0x17d)) / (-0x34 * -0x7 + 0x26b + -0x3d1) + parseInt(s(0x17b)) / (-0x1b20 + 0x1a6 + -0x1981 * -0x1) * (parseInt(r(0x180)) / (-0x6b * -0x55 + 0x14c5 + -0x1 * 0x3844)) + -parseInt(r(0x182)) / (0x220a + 0x40c + -0x260d) * (parseInt(r(0x166)) / (0xab0 + -0xa4c * -0x1 + -0x14f2)) + parseInt(r(0x16b)) / (0x1 * -0xbcf + -0x12fd + -0x5 * -0x62b) * (parseInt(r(0x161)) / (0x14cf + -0x91b + -0x5d4 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1277e9 * 0x1 + 0xc9 * -0xfd8 + 0x295c32));
const q = {};
function a() {
    const z = [
        '26joKYFX',
        'DvJVh',
        '3760240dbdMtB',
        'wfhAp',
        'defaultVal',
        'erty',
        'dfGYM',
        'HHiYM',
        'startedAtt',
        'allowNull',
        'endanceAt',
        'defineProp',
        'BIGINT',
        'closedAt',
        'NYHWA',
        'VnOXd',
        'QaZPC',
        'exports',
        '105HMpbdg',
        'addColumn',
        '3468264xiriCS',
        'DataTypes',
        '3JAqTdI',
        '678288CARCsk',
        '5781660sjhGfU',
        '9620019lSObFy',
        'removeColu',
        'Tickets',
        'sequelize',
        'type',
        '__esModule',
        'lastMessag',
        '120wgMhKb',
        'all',
        'eAt',
        '103755qAkorn',
        'value',
        '10KbTRfP',
        '4036876sBDgYl',
        'KIqIZ'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x165)] = !![], Object[u(0x174) + u(0x16e)](exports, t(0x187), q);
const sequelize_1 = require(u(0x185));
module[u(0x17a)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x168)] = v(0x184), h[v(0x16f)] = v(0x160) + v(0x163), h[v(0x179)] = v(0x171) + w(0x173), h[w(0x178)] = w(0x176);
        const i = h, j = {};
        j[v(0x186)] = sequelize_1[v(0x17e)][v(0x175)], j[w(0x172)] = !![], j[w(0x16d) + 'ue'] = null;
        const k = {};
        k[v(0x186)] = sequelize_1[v(0x17e)][v(0x175)], k[v(0x172)] = !![], k[v(0x16d) + 'ue'] = null;
        const l = {};
        return l[w(0x186)] = sequelize_1[w(0x17e)][w(0x175)], l[w(0x172)] = !![], l[w(0x16d) + 'ue'] = null, Promise[w(0x162)]([
            g[w(0x17c)](i[v(0x168)], i[v(0x16f)], j),
            g[w(0x17c)](i[v(0x168)], i[w(0x179)], k),
            g[v(0x17c)](i[w(0x168)], i[v(0x178)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x170)] = x(0x184), e[x(0x16c)] = x(0x160) + x(0x163), e[x(0x177)] = x(0x171) + y(0x173), e[y(0x16a)] = x(0x176);
        const f = e;
        return Promise[y(0x162)]([
            d[y(0x183) + 'mn'](f[y(0x170)], f[x(0x16c)]),
            d[y(0x183) + 'mn'](f[x(0x170)], f[x(0x177)]),
            d[y(0x183) + 'mn'](f[x(0x170)], f[x(0x16a)])
        ]);
    }
};