'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0xad)) / (0xf38 + -0x6f * -0x33 + 0x1 * -0x2554) * (parseInt(D(0xc8)) / (-0xba * 0x1 + 0x593 * -0x5 + 0x3 * 0x989)) + parseInt(D(0xca)) / (0x179e + 0x1 * -0x1273 + -0x3c * 0x16) + -parseInt(D(0xc7)) / (0x26a5 * -0x1 + -0x2109 * -0x1 + 0x5a0) + -parseInt(D(0xc4)) / (0x1012 + -0x363 + 0x1 * -0xcaa) * (parseInt(E(0xc5)) / (-0x24bd + -0x2479 + -0x4 * -0x124f)) + parseInt(E(0xbe)) / (-0xd * 0x23b + 0x1 * 0xb6f + 0x3 * 0x5dd) + -parseInt(E(0xc9)) / (0x1e19 + -0x2 * -0x851 + -0x957 * 0x5) + parseInt(D(0xa6)) / (0x1a07 + 0x1 * -0x13ed + -0x611) * (parseInt(E(0xb5)) / (-0x4f6 + 0xddd + -0x8dd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xec2c3 + 0xd4d72 + 0x9277f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f4e + -0x24bd + 0x44b0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0xa5)] = !![], Object[G(0xcf) + G(0xa8)](exports, G(0xc1), C);
const sequelize_1 = require(F(0xab));
function a() {
    const L = [
        'autoIncrem',
        'NVToe',
        '164860IDeJxH',
        'Groups',
        'STRING',
        'ouIfi',
        'Users',
        'mjrPm',
        'allowNull',
        'TEXT',
        'dropTable',
        '943663sULmbZ',
        'exports',
        'ssage',
        '__esModule',
        'primaryKey',
        'createTabl',
        '40vsZnLZ',
        '43272MUHBjc',
        'BOOLEAN',
        '2925244rBmeqW',
        '206McSCcT',
        '3245736CcGeHG',
        '41457lrXFJi',
        'cxzRI',
        'QNCzG',
        'INTEGER',
        'CASCADE',
        'defineProp',
        'SET\x20NULL',
        'type',
        'value',
        '468eIGcVW',
        'ent',
        'erty',
        'InternalMe',
        'oZAfV',
        'sequelize',
        'defaultVal',
        '6730iQAbzR',
        'Tenants',
        'DataTypes',
        'BIGINT',
        'tQEXX',
        'DATE'
    ];
    a = function () {
        return L;
    };
    return a();
}
module[F(0xbf)] = {
    'up': i => {
        const H = G, I = F, j = {};
        j[H(0xb1)] = H(0xa9) + I(0xc0), j[H(0xcb)] = H(0xb9), j[I(0xba)] = H(0xce), j[H(0xb4)] = I(0xd0), j[H(0xb8)] = H(0xb6), j[I(0xcc)] = H(0xae);
        const k = j, l = {};
        l[I(0xd1)] = sequelize_1[H(0xaf)][I(0xb0)], l[I(0xc2)] = !![], l[H(0xb3) + H(0xa7)] = !![], l[I(0xbb)] = ![];
        const m = {};
        m[I(0xd1)] = sequelize_1[H(0xaf)][H(0xbc)], m[H(0xbb)] = ![];
        const n = {};
        n[I(0xd1)] = sequelize_1[H(0xaf)][H(0xc6)], n[H(0xbb)] = ![], n[I(0xac) + 'ue'] = ![];
        const o = {};
        o[I(0xd1)] = sequelize_1[I(0xaf)][H(0xb7)];
        const p = {};
        return p[H(0xd1)] = sequelize_1[I(0xaf)][I(0xb7)], i[I(0xc3) + 'e'](k[H(0xb1)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0xaf)][I(0xcd)],
                'references': {
                    'model': k[H(0xcb)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xba)],
                'onDelete': k[H(0xb4)]
            },
            'receiverId': {
                'type': sequelize_1[H(0xaf)][I(0xcd)],
                'references': {
                    'model': k[I(0xcb)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xba)],
                'onDelete': k[I(0xb4)]
            },
            'groupId': {
                'type': sequelize_1[I(0xaf)][I(0xcd)],
                'references': {
                    'model': k[I(0xb8)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xba)],
                'onDelete': k[I(0xba)]
            },
            'tenantId': {
                'type': sequelize_1[I(0xaf)][H(0xcd)],
                'references': {
                    'model': k[I(0xcc)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xba)],
                'onDelete': k[I(0xba)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0xaf)][H(0xb0)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0xaf)][I(0xb2)](-0x31a + 0x960 + -0x640),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0xaf)][I(0xb2)](0x19b3 + 0x1e3f + -0x37ec),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0xaa)] = J(0xa9) + K(0xc0);
        const f = e;
        return d[J(0xbd)](f[K(0xaa)]);
    }
};