'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25a3 + -0x1256 + 0x971 * 0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const z = [
        '70RgqiVf',
        '148729sqQyOy',
        'Queues',
        '245133uzQDOb',
        'ination',
        'INTEGER',
        'CASCADE',
        'erty',
        '156sXeLjd',
        '55644XfaNjX',
        'exports',
        '180221ZcbsGx',
        'removeColu',
        'defineProp',
        'Actions',
        'type',
        'YHAHl',
        'fRsuf',
        'value',
        'tgbjo',
        'Users',
        'queue',
        'queueId',
        '1580274IimONK',
        'ZusYT',
        'defaultVal',
        'oEsbB',
        'sequelize',
        'DataTypes',
        'HHDqg',
        '5648230XdvBVr',
        'allowNull',
        '27663999ZEznlK',
        'all',
        'addColumn',
        'StepsReply',
        'MutnE',
        '__esModule',
        'pasrw',
        'restrict',
        'OYDee',
        'userIdDest',
        'nZCOf',
        '8GhAnQt',
        'VYHCR',
        'jWNMy',
        '4Sllmsv'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xcc)) / (0x1 * -0x199f + 0x2 * 0x117 + -0x2 * -0xbb9) * (parseInt(s(0xc0)) / (0x22b5 + 0x213f + -0x43f2)) + -parseInt(r(0xd8)) / (0xcaf + -0x13 * -0x86 + -0x169e) + -parseInt(r(0xca)) / (-0x2669 + 0x225d + -0x41 * -0x10) * (parseInt(r(0xc1)) / (-0xc92 + -0x60 * -0x64 + -0x18e9)) + -parseInt(s(0xc9)) / (0x2 * -0xd84 + -0x41c + 0x1f2a * 0x1) * (parseInt(s(0xc2)) / (0x474 + 0x28 * 0xca + -0x1 * 0x23fd)) + parseInt(s(0xbd)) / (-0x1 * -0x1505 + -0x4a4 + -0x1059) * (parseInt(s(0xc4)) / (0xd * 0xac + 0x1a7a + -0x5 * 0x709)) + -parseInt(r(0xb0)) / (0x27 * -0x8f + 0x1d * 0x1d + 0x128a) + parseInt(r(0xb2)) / (-0x1b99 + -0x765 * 0x3 + -0x9f7 * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa633e + -0xc6d * -0x1a + 0x1b * -0x3cd7));
const q = {};
q[t(0xd3)] = !![], Object[u(0xce) + t(0xc8)](exports, u(0xb7), q);
const sequelize_1 = require(t(0xad));
module[u(0xcb)] = {
    'up': d => {
        const v = t, w = t, e = {};
        e[v(0xaf)] = v(0xb5) + w(0xcf), e[w(0xbf)] = v(0xd6), e[w(0xba)] = v(0xd7), e[w(0xd1)] = v(0xc3), e[v(0xbc)] = v(0xc7), e[w(0xdb)] = w(0xb9), e[w(0xb6)] = v(0xbb) + v(0xc5), e[w(0xd2)] = w(0xd5);
        const f = e;
        return Promise[v(0xb3)]([
            d[w(0xcd) + 'mn'](f[v(0xaf)], f[v(0xbf)]),
            d[w(0xb4)](f[w(0xaf)], f[v(0xba)], {
                'type': sequelize_1[w(0xae)][v(0xc6)],
                'references': {
                    'model': f[w(0xd1)],
                    'key': 'id'
                },
                'onUpdate': f[v(0xbc)],
                'onDelete': f[w(0xdb)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0xcd) + 'mn'](f[v(0xaf)], f[w(0xb6)]),
            d[w(0xb4)](f[v(0xaf)], f[v(0xb6)], {
                'type': sequelize_1[w(0xae)][w(0xc6)],
                'references': {
                    'model': f[w(0xd2)],
                    'key': 'id'
                },
                'onUpdate': f[w(0xbc)],
                'onDelete': f[w(0xdb)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = u, y = u, g = {};
        g[x(0xb8)] = x(0xb5) + x(0xcf), g[y(0xd9)] = y(0xd7), g[y(0xbe)] = x(0xd6), g[x(0xd4)] = x(0xbb) + x(0xc5);
        const h = g, i = {};
        i[x(0xd0)] = sequelize_1[y(0xae)][y(0xc6)], i[x(0xda) + 'ue'] = null, i[y(0xb1)] = !![];
        const j = {};
        return j[x(0xd0)] = sequelize_1[x(0xae)][x(0xc6)], j[x(0xda) + 'ue'] = null, j[x(0xb1)] = !![], Promise[y(0xb3)]([
            f[x(0xcd) + 'mn'](h[y(0xb8)], h[x(0xd9)]),
            f[y(0xb4)](h[y(0xb8)], h[y(0xbe)], i),
            f[y(0xcd) + 'mn'](h[y(0xb8)], h[y(0xd4)]),
            f[y(0xb4)](h[x(0xb8)], h[x(0xd4)], j)
        ]);
    }
};