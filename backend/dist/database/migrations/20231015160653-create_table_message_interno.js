'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0xed)) / (-0x5 * 0x59f + 0x1e81 + -0x265) * (-parseInt(D(0xe6)) / (0x2301 + 0x217e + -0x447d)) + -parseInt(D(0x102)) / (0x4 * 0x4aa + -0x36b + -0xf3a) + parseInt(D(0xe3)) / (0x21 * -0xcb + -0xb47 * 0x2 + 0x30bd * 0x1) * (-parseInt(E(0xe4)) / (0x275 * -0xf + -0xd7 * 0x1d + -0xd1 * -0x4b)) + parseInt(E(0xf5)) / (0x858 + -0x6b3 * -0x5 + 0x85d * -0x5) * (parseInt(D(0x105)) / (0x19 * -0x11b + -0x1742 + 0x32ec)) + -parseInt(D(0xfa)) / (0x1 * 0xcbc + -0xfa2 + 0x2ee) * (parseInt(E(0xe9)) / (0xdf * 0x11 + -0x1 * 0x1c9 + 0x1 * -0xcfd)) + parseInt(E(0xf6)) / (-0x1879 + 0x2ad * 0x3 + -0x41f * -0x4) * (-parseInt(D(0xf4)) / (-0x1c3e + 0xf4b * -0x1 + -0x15ca * -0x2)) + -parseInt(E(0xf9)) / (0x1053 + 0x196a + -0x29b1) * (-parseInt(E(0x111)) / (0x1 * 0x1777 + 0xd32 + 0x6 * -0x61a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x82a9b + -0x17c806 + 0x1eb0e6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x263f + 0x10f3 * -0x2 + -0x4907 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
function a() {
    const L = [
        'DfKtM',
        '__esModule',
        '26qirLTn',
        'erty',
        '321188HaIrQy',
        '15sXRSJH',
        'Users',
        '2qSDwHl',
        'type',
        'AIDjO',
        '72BVPuXI',
        'dlylY',
        'SET\x20NULL',
        'allowNull',
        '1180768ckUAgq',
        'ent',
        'primaryKey',
        'autoIncrem',
        'INTEGER',
        'BIGINT',
        'CASCADE',
        '933823lkMNmq',
        '4738332UKpmQO',
        '10lEMhTC',
        'sequelize',
        'InternalMe',
        '20964168LXTXIZ',
        '1511080sitatn',
        'STRING',
        'Tenants',
        'dFjFB',
        'DataTypes',
        'dCXZE',
        'dropTable',
        'createTabl',
        '3203439Buhqup',
        'DATE',
        'ssage',
        '14ngLQgo',
        'defaultVal',
        'TEXT',
        'Wwhae',
        'exports',
        'value',
        'BOOLEAN',
        'ORVSA',
        'Groups',
        'defineProp'
    ];
    a = function () {
        return L;
    };
    return a();
}
C[F(0x10a)] = !![], Object[F(0x10e) + F(0xe2)](exports, F(0x110), C);
const sequelize_1 = require(G(0xf7));
module[F(0x109)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0x108)] = H(0xf8) + H(0x104), j[I(0x10f)] = H(0xe5), j[I(0x10c)] = H(0xf3), j[I(0xea)] = H(0xeb), j[H(0xe8)] = H(0x10d), j[H(0xfd)] = I(0xfc);
        const k = j, l = {};
        l[I(0xe7)] = sequelize_1[I(0xfe)][I(0xf2)], l[H(0xef)] = !![], l[I(0xf0) + I(0xee)] = !![], l[I(0xec)] = ![];
        const m = {};
        m[H(0xe7)] = sequelize_1[H(0xfe)][H(0x107)], m[I(0xec)] = ![];
        const n = {};
        n[H(0xe7)] = sequelize_1[H(0xfe)][I(0x10b)], n[I(0xec)] = ![], n[H(0x106) + 'ue'] = ![];
        const o = {};
        o[I(0xe7)] = sequelize_1[H(0xfe)][H(0xfb)];
        const p = {};
        return p[H(0xe7)] = sequelize_1[H(0xfe)][H(0xfb)], i[H(0x101) + 'e'](k[I(0x108)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0xfe)][I(0xf1)],
                'references': {
                    'model': k[I(0x10f)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x10c)],
                'onDelete': k[H(0xea)]
            },
            'receiverId': {
                'type': sequelize_1[H(0xfe)][I(0xf1)],
                'references': {
                    'model': k[H(0x10f)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x10c)],
                'onDelete': k[H(0xea)]
            },
            'groupId': {
                'type': sequelize_1[H(0xfe)][H(0xf1)],
                'references': {
                    'model': k[I(0xe8)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x10c)],
                'onDelete': k[I(0x10c)]
            },
            'tenantId': {
                'type': sequelize_1[H(0xfe)][I(0xf1)],
                'references': {
                    'model': k[H(0xfd)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x10c)],
                'onDelete': k[H(0x10c)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0xfe)][I(0xf2)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0xfe)][H(0x103)](-0xd3 * 0x17 + 0xd88 + 0x573),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0xfe)][H(0x103)](-0x446 + 0x1690 + -0x1244),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0xff)] = J(0xf8) + J(0x104);
        const f = e;
        return d[K(0x100)](f[K(0xff)]);
    }
};