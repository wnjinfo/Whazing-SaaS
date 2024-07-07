'use strict';
const t = b, u = b;
function a() {
    const z = [
        'queueId',
        'restrict',
        'StepsReply',
        '994722mEvKER',
        'queue',
        '3919887zxnkoo',
        'all',
        '5umtTvT',
        'addColumn',
        'CASCADE',
        'rFyQO',
        'ination',
        '52932rRDobE',
        '__esModule',
        'defineProp',
        'userIdDest',
        '657992zFKARQ',
        'JfLDg',
        'erty',
        'UFhOx',
        'XjOZW',
        '2534024JCzOmg',
        'DataTypes',
        '70UEMejj',
        'fsxau',
        '10TMNgzT',
        'wWTgi',
        'WcnQj',
        'Actions',
        'exports',
        '9809118uhSdgH',
        'Queues',
        'defaultVal',
        '40WpqqTB',
        'INTEGER',
        'xeLtO',
        'allowNull',
        'DWSkx',
        'value',
        'CMBVI',
        '2KbOcoW',
        'fxqaS',
        'removeColu',
        'XAqzW',
        'type',
        'sequelize',
        'Users'
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
            const f = parseInt(r(0xd3)) / (0xc59 + -0x2447 * 0x1 + -0x1 * -0x17ef) * (-parseInt(s(0xda)) / (-0x328 + -0x6b * 0x4f + 0x242f)) + parseInt(r(0xe4)) / (0x14dc + 0x19d6 + -0x2eaf) + -parseInt(s(0xf1)) / (-0x2341 + -0x1 * 0x868 + -0x3 * -0xe8f) * (-parseInt(r(0xe8)) / (0x168c + -0x18e3 + 0x25c)) + -parseInt(r(0xed)) / (0x22a5 + -0x1d * 0x107 + -0xce * 0x6) * (parseInt(s(0xc9)) / (-0x498 + 0x96d * -0x1 + 0xe0c)) + parseInt(r(0xf6)) / (-0x1b3 * -0x11 + -0x23 * -0x2a + 0x209 * -0x11) + -parseInt(r(0xe6)) / (0x189a + -0x176c + 0x125 * -0x1) * (-parseInt(r(0xcb)) / (0x1 * 0x117 + 0x1 * 0x1db7 + -0xb3 * 0x2c)) + -parseInt(r(0xd0)) / (-0x21eb + 0x3 * -0x21a + -0x2844 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2e930 + -0x46241 + 0xb63c3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13a3 * 0x1 + 0x14e * 0xa + 0x760);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xd8)] = !![], Object[t(0xef) + t(0xf3)](exports, u(0xee), q);
const sequelize_1 = require(u(0xdf));
module[t(0xcf)] = {
    'up': d => {
        const v = u, w = t, e = {};
        e[v(0xf4)] = w(0xe3) + w(0xce), e[v(0xd9)] = v(0xe5), e[v(0xd5)] = v(0xe1), e[v(0xcc)] = w(0xd1), e[w(0xca)] = w(0xea), e[w(0xf5)] = w(0xe2), e[w(0xcd)] = v(0xf0) + w(0xec), e[w(0xf2)] = w(0xe0);
        const f = e;
        return Promise[w(0xe7)]([
            d[v(0xdc) + 'mn'](f[v(0xf4)], f[w(0xd9)]),
            d[w(0xe9)](f[v(0xf4)], f[v(0xd5)], {
                'type': sequelize_1[v(0xf7)][w(0xd4)],
                'references': {
                    'model': f[w(0xcc)],
                    'key': 'id'
                },
                'onUpdate': f[w(0xca)],
                'onDelete': f[v(0xf5)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0xdc) + 'mn'](f[v(0xf4)], f[w(0xcd)]),
            d[w(0xe9)](f[v(0xf4)], f[v(0xcd)], {
                'type': sequelize_1[v(0xf7)][w(0xd4)],
                'references': {
                    'model': f[w(0xf2)],
                    'key': 'id'
                },
                'onUpdate': f[v(0xca)],
                'onDelete': f[w(0xf5)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = t, g = {};
        g[x(0xeb)] = y(0xe3) + x(0xce), g[y(0xdb)] = y(0xe1), g[y(0xd7)] = y(0xe5), g[x(0xdd)] = y(0xf0) + x(0xec);
        const h = g, i = {};
        i[x(0xde)] = sequelize_1[y(0xf7)][x(0xd4)], i[y(0xd2) + 'ue'] = null, i[y(0xd6)] = !![];
        const j = {};
        return j[y(0xde)] = sequelize_1[y(0xf7)][x(0xd4)], j[x(0xd2) + 'ue'] = null, j[y(0xd6)] = !![], Promise[y(0xe7)]([
            f[y(0xdc) + 'mn'](h[x(0xeb)], h[y(0xdb)]),
            f[x(0xe9)](h[x(0xeb)], h[y(0xd7)], i),
            f[x(0xdc) + 'mn'](h[x(0xeb)], h[y(0xdd)]),
            f[x(0xe9)](h[y(0xeb)], h[y(0xdd)], j)
        ]);
    }
};