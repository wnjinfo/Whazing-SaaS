'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9b * 0x2f + -0x656 * -0x3 + -0x2e79 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x108)) / (-0x44d + 0x31 * 0x1 + -0x9 * -0x75) + parseInt(v(0x10a)) / (0xb * 0x32e + 0x10e9 + -0x33e1) + -parseInt(w(0x114)) / (-0x2d * 0xb9 + 0x1 * -0x2146 + 0x41ce) * (parseInt(w(0x119)) / (-0x1661 + 0x22c5 + -0xc60)) + parseInt(w(0x11a)) / (-0xc * 0x2a4 + 0x25d2 + -0x61d) + -parseInt(w(0x105)) / (-0x861 + 0xbd0 + -0x369) + parseInt(v(0x10e)) / (-0x1 * 0xad5 + -0x452 * -0x2 + -0x8e * -0x4) + parseInt(v(0x11e)) / (0x127 * 0x1 + -0x2075 + 0x1f56);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x3250d + 0x7 * 0x1d4ec + -0x47f74 * 0x2));
const u = {};
function a() {
    const D = [
        '1120412Ozxddf',
        '1893085vGYSoR',
        'type',
        'YjfEw',
        '__esModule',
        '2709944lBqAHB',
        'ujhEn',
        'value',
        'DataTypes',
        'Users',
        'SET\x20NULL',
        'sequelize',
        'erty',
        'wDNnh',
        'autoIncrem',
        'XseiR',
        '5649528mrECsQ',
        'createTabl',
        'INTEGER',
        '1096391HGCIMb',
        'dropTable',
        '2189622uKStGX',
        'Actions',
        'ent',
        'QcQdA',
        '8182027eamKna',
        'exports',
        'wPpkT',
        'CASCADE',
        'allowNull',
        'DATE',
        '3FEHgAd',
        'StepsReply',
        'STRING',
        'defineProp',
        'primaryKey'
    ];
    a = function () {
        return D;
    };
    return a();
}
u[x(0x120)] = !![], Object[y(0x117) + y(0x101)](exports, x(0x11d), u);
const sequelize_1 = require(y(0x100));
module[y(0x10f)] = {
    'up': e => {
        const z = x, A = x, f = {};
        f[z(0x110)] = z(0x115) + A(0x10b), f[z(0x102)] = z(0x115), f[z(0x104)] = z(0x111), f[A(0x11c)] = z(0xfe), f[A(0x10d)] = A(0xff);
        const g = f, h = {};
        return h[A(0x11b)] = sequelize_1[z(0x121)][A(0x107)], h[z(0x103) + A(0x10c)] = !![], h[A(0x118)] = !![], h[A(0x112)] = ![], e[A(0x106) + 'e'](g[z(0x110)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0x121)][A(0x107)],
                'references': {
                    'model': g[z(0x102)],
                    'key': 'id'
                },
                'onUpdate': g[z(0x104)],
                'onDelete': g[A(0x104)]
            },
            'words': {
                'type': sequelize_1[A(0x121)][z(0x116)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0x121)][A(0x107)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[A(0x121)][z(0x116)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0x121)][A(0x107)],
                'references': {
                    'model': g[A(0x11c)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x104)],
                'onDelete': g[z(0x10d)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x121)][A(0x113)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x121)][z(0x113)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = y, e = {};
        e[B(0x11f)] = C(0x115) + C(0x10b);
        const f = e;
        return d[C(0x109)](f[C(0x11f)]);
    }
};