'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x17d)) / (-0x2 * 0x6f4 + 0x6 * 0x355 + 0x207 * -0x3) + -parseInt(E(0x164)) / (0x1d18 + 0x1 * 0x2647 + -0x5 * 0xd79) + parseInt(D(0x172)) / (-0x1b7c + 0x1e6 * 0x13 + -0x893) + parseInt(D(0x184)) / (0x895 + 0x23a2 + -0x8d7 * 0x5) * (-parseInt(D(0x17b)) / (0x4 * -0x577 + 0x242 + 0x139f)) + -parseInt(D(0x176)) / (-0x309 * 0x1 + 0x243a + -0x1 * 0x212b) + -parseInt(D(0x162)) / (0x1b1 * 0x1 + -0x1ac8 + -0x506 * -0x5) * (-parseInt(D(0x16e)) / (-0xfd5 * 0x2 + -0x3bd * 0x3 + 0x2ae9)) + parseInt(E(0x17e)) / (-0x1 * 0x1ced + -0xe * -0x29c + -0x792);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x728a7 + 0x583f2 + 0x59dfd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f3 * 0x9 + -0x1317 * -0x1 + -0x30 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
function a() {
    const L = [
        'primaryKey',
        'STRING',
        'BIGINT',
        '1456293bqbUKO',
        'defaultVal',
        'DATE',
        'InternalMe',
        '2261034akOWWu',
        'TEXT',
        'sequelize',
        'Users',
        'allowNull',
        '10VSPHpJ',
        'UPbuv',
        '459279jOmRtJ',
        '1097028uGhpMs',
        'Groups',
        'erty',
        'COtTE',
        'autoIncrem',
        'CASCADE',
        '570296NyWszl',
        'YfehL',
        'ent',
        'INTEGER',
        'exports',
        'Krqlv',
        'defineProp',
        'value',
        'dropTable',
        'ssage',
        '116564AXJyPd',
        'DataTypes',
        '954462DgKMsQ',
        'createTabl',
        'LFBRa',
        'BOOLEAN',
        'pwMnc',
        'type',
        '__esModule',
        'Tenants',
        'gPImT',
        'SET\x20NULL',
        '160tdkqEI'
    ];
    a = function () {
        return L;
    };
    return a();
}
C[F(0x15f)] = !![], Object[G(0x15e) + G(0x180)](exports, G(0x16a), C);
const sequelize_1 = require(G(0x178));
module[F(0x15c)] = {
    'up': i => {
        const H = F, I = G, j = {};
        j[H(0x16c)] = I(0x175) + H(0x161), j[H(0x168)] = I(0x179), j[H(0x185)] = I(0x183), j[H(0x166)] = I(0x16d), j[H(0x17c)] = H(0x17f), j[H(0x181)] = H(0x16b);
        const k = j, l = {};
        l[I(0x169)] = sequelize_1[H(0x163)][I(0x171)], l[H(0x16f)] = !![], l[I(0x182) + I(0x186)] = !![], l[I(0x17a)] = ![];
        const m = {};
        m[H(0x169)] = sequelize_1[H(0x163)][I(0x177)], m[I(0x17a)] = ![];
        const n = {};
        n[H(0x169)] = sequelize_1[I(0x163)][I(0x167)], n[I(0x17a)] = ![], n[H(0x173) + 'ue'] = ![];
        const o = {};
        o[H(0x169)] = sequelize_1[H(0x163)][H(0x170)];
        const p = {};
        return p[I(0x169)] = sequelize_1[H(0x163)][H(0x170)], i[I(0x165) + 'e'](k[H(0x16c)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[I(0x163)][I(0x187)],
                'references': {
                    'model': k[I(0x168)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x185)],
                'onDelete': k[I(0x166)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x163)][I(0x187)],
                'references': {
                    'model': k[I(0x168)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x185)],
                'onDelete': k[H(0x166)]
            },
            'groupId': {
                'type': sequelize_1[I(0x163)][I(0x187)],
                'references': {
                    'model': k[I(0x17c)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x185)],
                'onDelete': k[H(0x185)]
            },
            'tenantId': {
                'type': sequelize_1[I(0x163)][I(0x187)],
                'references': {
                    'model': k[I(0x181)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x185)],
                'onDelete': k[I(0x185)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0x163)][H(0x171)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x163)][H(0x174)](-0x6d5 + -0x2c * 0x59 + 0x35 * 0x6b),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0x163)][H(0x174)](0x2a5 * -0x1 + 0x112f + -0xe84),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = G, e = {};
        e[J(0x15d)] = J(0x175) + J(0x161);
        const f = e;
        return d[K(0x160)](f[K(0x15d)]);
    }
};