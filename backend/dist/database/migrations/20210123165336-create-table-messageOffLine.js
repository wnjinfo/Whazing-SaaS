'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x6e)) / (0x1a * -0x3b + 0x6f5 + -0xf6) * (-parseInt(I(0x88)) / (0x3d6 * 0x4 + -0x8 * -0x61 + -0x125e)) + parseInt(H(0x7b)) / (0x1 * 0x25e7 + 0x2a2 * -0x1 + -0x11a1 * 0x2) + parseInt(H(0x8d)) / (0x1 * 0x1f55 + -0x13d1 + -0xb80) + parseInt(I(0x85)) / (-0x20ae + 0x154e + 0xb65) + -parseInt(H(0x71)) / (-0xa07 * -0x3 + -0x39 * 0xa + -0x1bd5) * (-parseInt(H(0x89)) / (0x1f63 + 0xa97 + -0x29f3)) + -parseInt(H(0x92)) / (0x2049 + 0x1adf + -0x3b20) * (parseInt(H(0x6b)) / (-0x2 * -0x9d + 0x2019 + -0x2 * 0x10a5)) + parseInt(I(0x6c)) / (-0x16b6 + 0x235 * -0x5 + 0x21c9) * (-parseInt(I(0x70)) / (0x64f + -0x1 * -0xc19 + 0x1 * -0x125d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20286 + -0x1 * 0x2a126 + 0x4 * 0xedec));
const G = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x31d + -0x1fc3 + 0x1d11);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'type',
        'kBEtd',
        '1465584JljEjx',
        'erty',
        'allowNull',
        'xlfyj',
        'INTEGER',
        '2959536tzWFOm',
        'DATE',
        'HCSzb',
        'primaryKey',
        'Users',
        'Contacts',
        'ent',
        'sequelize',
        '9YLgluI',
        '30Iyqhmg',
        'BOOLEAN',
        '6ozZblv',
        'defineProp',
        '2495526jDucRV',
        '63744LTJeNM',
        'DataTypes',
        'fLine',
        'Tickets',
        'jxQjh',
        'defaultVal',
        'STRING',
        'exports',
        'createTabl',
        'qCHwe',
        '1130796qpVuBC',
        'dropTable',
        'CASCADE',
        '__esModule',
        'autoIncrem',
        'MessagesOf',
        'pRRSC',
        'SET\x20NULL',
        'WedYW',
        'TEXT',
        '412530oPhsmY',
        'Messages',
        'bjSYR',
        '103622euLMeQ',
        '77FaXZDB',
        'value'
    ];
    a = function () {
        return P;
    };
    return a();
}
G[J(0x8a)] = !![], Object[K(0x6f) + J(0x8e)](exports, J(0x7e), G);
const sequelize_1 = require(J(0x99));
module[K(0x78)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x94)] = L(0x80) + L(0x73), k[L(0x83)] = L(0x96), k[M(0x81)] = M(0x7d), k[L(0x90)] = M(0x82), k[L(0x8c)] = M(0x74), k[M(0x7a)] = M(0x97), k[L(0x87)] = M(0x86);
        const l = k, m = {};
        m[M(0x8b)] = sequelize_1[L(0x72)][L(0x91)], m[L(0x7f) + M(0x98)] = !![], m[M(0x95)] = !![], m[M(0x8f)] = ![];
        const n = {};
        n[M(0x8b)] = sequelize_1[M(0x72)][L(0x84)], n[M(0x8f)] = ![];
        const o = {};
        o[M(0x8b)] = sequelize_1[M(0x72)][M(0x91)], o[M(0x8f)] = ![], o[L(0x76) + 'ue'] = 0x0;
        const p = {};
        p[M(0x8b)] = sequelize_1[L(0x72)][M(0x6d)], p[L(0x8f)] = ![], p[M(0x76) + 'ue'] = ![];
        const q = {};
        q[L(0x8b)] = sequelize_1[L(0x72)][M(0x77)];
        const r = {};
        return r[L(0x8b)] = sequelize_1[L(0x72)][M(0x77)], j[M(0x79) + 'e'](l[L(0x94)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0x72)][M(0x91)],
                'references': {
                    'model': l[L(0x83)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x81)],
                'onDelete': l[M(0x90)]
            },
            'ticketId': {
                'type': sequelize_1[M(0x72)][L(0x91)],
                'references': {
                    'model': l[M(0x8c)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x81)],
                'onDelete': l[M(0x81)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x72)][L(0x6d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0x72)][L(0x6d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x72)][L(0x91)],
                'references': {
                    'model': l[M(0x7a)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x81)],
                'onDelete': l[M(0x81)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0x72)][L(0x77)],
                'references': {
                    'model': l[L(0x87)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x81)],
                'onDelete': l[M(0x90)]
            },
            'createdAt': {
                'type': sequelize_1[L(0x72)][M(0x93)](-0x949 + 0x199d + -0x104e),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0x72)][L(0x93)](0x230d + 0x53 + 0x11ad * -0x2),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = J, e = {};
        e[N(0x75)] = N(0x80) + N(0x73);
        const f = e;
        return d[O(0x7c)](f[N(0x75)]);
    }
};