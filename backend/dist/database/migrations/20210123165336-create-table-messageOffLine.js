'use strict';
function a() {
    const P = [
        'allowNull',
        '169455nfjJXc',
        '249220WhoijO',
        '261172jrCAZt',
        'INTEGER',
        '3578290TPujGG',
        'SZAWT',
        'YvWmn',
        '1405618xSzWkD',
        'STRING',
        'fLine',
        'defineProp',
        'Users',
        'erty',
        'DataTypes',
        'DATE',
        'primaryKey',
        '6538QzXtNc',
        'dropTable',
        '2634HoeqsQ',
        '1989vDIUVW',
        '__esModule',
        'BOOLEAN',
        'type',
        'value',
        'gcZYq',
        'createTabl',
        'ythVQ',
        'CASCADE',
        'MessagesOf',
        '33gdufkx',
        'ent',
        'defaultVal',
        'Tickets',
        'WGtzG',
        '16712lUSxvN',
        'SET\x20NULL',
        'TEXT',
        'nSSHD',
        'sequelize',
        'GGbIS',
        'Contacts',
        'exports',
        'DIEsM',
        'autoIncrem',
        'Messages'
    ];
    a = function () {
        return P;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x128)) / (-0x545 * 0x3 + -0x15af + -0x1d * -0x14b) + parseInt(H(0x12f)) / (0x521 + -0x11 * 0xf1 + -0xe * -0xc7) + parseInt(I(0x117)) / (-0xbf + -0x1 * 0x1c3f + 0x1d01) * (-parseInt(H(0x12a)) / (-0x1f84 * -0x1 + 0x328 * 0x1 + 0x4 * -0x8aa)) + parseInt(H(0x12c)) / (0x1 * -0x403 + -0x25eb + 0x29f3) + parseInt(H(0x13a)) / (-0x689 * 0x5 + 0x1ee9 + -0x1ca * -0x1) * (parseInt(H(0x138)) / (-0x199 * 0xb + -0x1d91 + 0x2f2b)) + -parseInt(I(0x11c)) / (-0x2ac + 0xb45 + -0x891) * (parseInt(I(0x13b)) / (0x1715 * 0x1 + -0x2398 + 0x49 * 0x2c)) + -parseInt(I(0x129)) / (-0xf4 * 0xb + -0x130d + 0x1d93);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8e * 0x4e9 + 0x681bf * -0x2 + 0x16ab0c));
const G = {};
G[J(0x13f)] = !![], Object[K(0x132) + K(0x134)](exports, K(0x13c), G);
const sequelize_1 = require(K(0x120));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x368 + -0x141d + -0x2a * -0x96);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[J(0x123)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x140)] = M(0x144) + M(0x131), k[M(0x142)] = L(0x133), k[L(0x124)] = L(0x143), k[L(0x12e)] = L(0x11d), k[L(0x12d)] = M(0x11a), k[M(0x121)] = M(0x122), k[L(0x11b)] = M(0x126);
        const l = k, m = {};
        m[M(0x13e)] = sequelize_1[L(0x135)][L(0x12b)], m[M(0x125) + M(0x118)] = !![], m[L(0x137)] = !![], m[M(0x127)] = ![];
        const n = {};
        n[L(0x13e)] = sequelize_1[L(0x135)][L(0x11e)], n[L(0x127)] = ![];
        const o = {};
        o[L(0x13e)] = sequelize_1[L(0x135)][L(0x12b)], o[L(0x127)] = ![], o[L(0x119) + 'ue'] = 0x0;
        const p = {};
        p[M(0x13e)] = sequelize_1[M(0x135)][L(0x13d)], p[L(0x127)] = ![], p[L(0x119) + 'ue'] = ![];
        const q = {};
        q[M(0x13e)] = sequelize_1[M(0x135)][L(0x130)];
        const r = {};
        return r[L(0x13e)] = sequelize_1[M(0x135)][M(0x130)], j[L(0x141) + 'e'](l[M(0x140)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[M(0x135)][M(0x12b)],
                'references': {
                    'model': l[L(0x142)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x124)],
                'onDelete': l[L(0x12e)]
            },
            'ticketId': {
                'type': sequelize_1[M(0x135)][M(0x12b)],
                'references': {
                    'model': l[L(0x12d)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x124)],
                'onDelete': l[L(0x124)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x135)][L(0x13d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[L(0x135)][L(0x13d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[M(0x135)][L(0x12b)],
                'references': {
                    'model': l[L(0x121)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x124)],
                'onDelete': l[M(0x124)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0x135)][M(0x130)],
                'references': {
                    'model': l[L(0x11b)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x124)],
                'onDelete': l[M(0x12e)]
            },
            'createdAt': {
                'type': sequelize_1[M(0x135)][M(0x136)](-0x15eb + 0xd * 0x154 + 0x13 * 0x3f),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[L(0x135)][L(0x136)](0xbc1 + -0x13 * -0x89 + -0x15e6),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = J, e = {};
        e[N(0x11f)] = N(0x144) + N(0x131);
        const f = e;
        return d[N(0x139)](f[N(0x11f)]);
    }
};