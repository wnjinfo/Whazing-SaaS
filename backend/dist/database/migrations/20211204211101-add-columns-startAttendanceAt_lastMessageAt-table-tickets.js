'use strict';
function a() {
    const z = [
        'BIGINT',
        '184718rPDVGV',
        'all',
        'DataTypes',
        '657utuUdj',
        'uJrhe',
        'value',
        'addColumn',
        'hONXU',
        'PZAJt',
        'type',
        '4444936iaTISD',
        '375545MggcOZ',
        'Tickets',
        'zJEtU',
        '176WkiFUM',
        'defaultVal',
        '__esModule',
        'lastMessag',
        'closedAt',
        'teSjB',
        'sellC',
        '3796308WLBsXE',
        'JjDJY',
        'sequelize',
        'erty',
        '95541pEdSxP',
        'startedAtt',
        'endanceAt',
        '8YHhScK',
        '13555452BRoLqo',
        'removeColu',
        'Yoyir',
        '14GRDHvR',
        'exports',
        'defineProp',
        'eAt',
        '34460iYhWTM',
        '33ZpTMuV',
        'allowNull'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd6)) / (-0x11d6 * 0x1 + -0xb54 + 0x1d2b) * (parseInt(r(0xe2)) / (-0x13f0 + 0x1 * -0x24bb + 0x38ad)) + -parseInt(s(0xd3)) / (0x765 * 0x1 + 0x1c64 + -0x1e2 * 0x13) * (parseInt(s(0xc8)) / (-0x17 * 0xc7 + 0x407 * -0x9 + 0x3624)) + -parseInt(s(0xed)) / (0x18a0 + 0x9fc + 0x4d * -0x73) + parseInt(s(0xcf)) / (0x2e7 * -0x3 + 0x380 + 0x53b * 0x1) + parseInt(r(0xda)) / (0x1 * -0x18c7 + 0x171c + 0x1b2) * (-parseInt(r(0xec)) / (-0xe48 + 0x18f9 + -0xaa9)) + parseInt(r(0xe5)) / (0x29c * 0x1 + -0x16b0 + -0x10f * -0x13) * (parseInt(r(0xde)) / (-0x264f + -0x35 * 0x5e + -0x39cf * -0x1)) + -parseInt(r(0xdf)) / (-0x15e + 0x714 + 0x1 * -0x5ab) * (-parseInt(r(0xd7)) / (-0x7bd * -0x4 + -0x416 + -0x1ad2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * -0xc6 + 0x2 * -0xb93ab + 0x259dda));
const q = {};
q[t(0xe7)] = !![], Object[u(0xdc) + u(0xd2)](exports, u(0xca), q);
const sequelize_1 = require(u(0xd1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x851 + -0x574 + 0xe8c);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0xdb)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0xd9)] = w(0xee), h[v(0xce)] = w(0xcb) + v(0xdd), h[w(0xc7)] = w(0xd4) + w(0xd5), h[w(0xe9)] = v(0xcc);
        const i = h, j = {};
        j[w(0xeb)] = sequelize_1[v(0xe4)][w(0xe1)], j[v(0xe0)] = !![], j[w(0xc9) + 'ue'] = null;
        const k = {};
        k[w(0xeb)] = sequelize_1[w(0xe4)][w(0xe1)], k[v(0xe0)] = !![], k[w(0xc9) + 'ue'] = null;
        const l = {};
        return l[v(0xeb)] = sequelize_1[v(0xe4)][w(0xe1)], l[w(0xe0)] = !![], l[v(0xc9) + 'ue'] = null, Promise[v(0xe3)]([
            g[v(0xe8)](i[w(0xd9)], i[v(0xce)], j),
            g[v(0xe8)](i[v(0xd9)], i[v(0xc7)], k),
            g[v(0xe8)](i[v(0xd9)], i[v(0xe9)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0xea)] = y(0xee), e[x(0xe6)] = y(0xcb) + y(0xdd), e[x(0xd0)] = y(0xd4) + x(0xd5), e[y(0xcd)] = y(0xcc);
        const f = e;
        return Promise[y(0xe3)]([
            d[x(0xd8) + 'mn'](f[x(0xea)], f[x(0xe6)]),
            d[y(0xd8) + 'mn'](f[y(0xea)], f[x(0xd0)]),
            d[x(0xd8) + 'mn'](f[x(0xea)], f[y(0xcd)])
        ]);
    }
};