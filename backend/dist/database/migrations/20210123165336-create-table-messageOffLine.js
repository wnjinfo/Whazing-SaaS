'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x12e)) / (0x22c + -0x4 * 0x5dc + 0x1545) + parseInt(I(0x125)) / (0xada + 0x221 * 0x6 + -0x179e) + parseInt(I(0x13d)) / (-0x1033 + 0x176c + -0x2 * 0x39b) * (-parseInt(H(0x136)) / (0x2167 + -0x1ada + 0xef * -0x7)) + parseInt(I(0x119)) / (0x1 * 0xe6e + 0xdfe + -0x1c67) + parseInt(H(0x13a)) / (0x22 * -0xec + -0xc1 * 0x19 + -0x3237 * -0x1) + -parseInt(I(0x112)) / (0xd35 + 0x612 + -0x1340) * (-parseInt(H(0x12d)) / (0x8a7 * -0x2 + -0x1 * -0x794 + -0x2 * -0x4e1)) + -parseInt(I(0x135)) / (-0x1 * -0x943 + -0x1013 + 0x6d9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x20d1 * 0xb + -0x7d445 + -0x1 * -0xea562));
function a() {
    const P = [
        'nGkbD',
        'Contacts',
        'CASCADE',
        'allowNull',
        'TEXT',
        'fOLdJ',
        'createTabl',
        'INTEGER',
        'DATE',
        'type',
        'xzNgn',
        '764858rlZSHz',
        'qCsSu',
        'DataTypes',
        'zHahG',
        'Tickets',
        'defineProp',
        'value',
        'fLine',
        '1248FtpEii',
        '616592WraXAS',
        'dropTable',
        'primaryKey',
        'XGduN',
        'Messages',
        'erty',
        'sequelize',
        '5720544wJKKYh',
        '4WTmdCp',
        'ent',
        '__esModule',
        'exports',
        '971436ssmGAy',
        'autoIncrem',
        'SET\x20NULL',
        '1659651YozRuj',
        'nQmwu',
        '5201bFgsZw',
        'defaultVal',
        'Users',
        'BOOLEAN',
        'STRING',
        'MessagesOf',
        'QcCTj',
        '1331680PHTKng'
    ];
    a = function () {
        return P;
    };
    return a();
}
const G = {};
G[J(0x12b)] = !![], Object[K(0x12a) + J(0x133)](exports, K(0x138), G);
const sequelize_1 = require(J(0x134));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x793 + 0x87f + 0x13 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[K(0x139)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x131)] = M(0x117) + M(0x12c), k[M(0x11f)] = L(0x114), k[L(0x13e)] = L(0x11c), k[L(0x128)] = M(0x13c), k[L(0x124)] = L(0x129), k[M(0x126)] = M(0x11b), k[M(0x11a)] = M(0x132);
        const l = k, m = {};
        m[L(0x123)] = sequelize_1[M(0x127)][M(0x121)], m[L(0x13b) + M(0x137)] = !![], m[M(0x130)] = !![], m[L(0x11d)] = ![];
        const n = {};
        n[M(0x123)] = sequelize_1[L(0x127)][M(0x11e)], n[L(0x11d)] = ![];
        const o = {};
        o[L(0x123)] = sequelize_1[L(0x127)][L(0x121)], o[M(0x11d)] = ![], o[L(0x113) + 'ue'] = 0x0;
        const p = {};
        p[L(0x123)] = sequelize_1[L(0x127)][L(0x115)], p[L(0x11d)] = ![], p[L(0x113) + 'ue'] = ![];
        const q = {};
        q[M(0x123)] = sequelize_1[M(0x127)][L(0x116)];
        const r = {};
        return r[M(0x123)] = sequelize_1[L(0x127)][L(0x116)], j[L(0x120) + 'e'](l[L(0x131)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0x127)][L(0x121)],
                'references': {
                    'model': l[M(0x11f)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13e)],
                'onDelete': l[L(0x128)]
            },
            'ticketId': {
                'type': sequelize_1[M(0x127)][L(0x121)],
                'references': {
                    'model': l[M(0x124)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x13e)],
                'onDelete': l[L(0x13e)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[L(0x127)][L(0x115)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0x127)][L(0x115)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[M(0x127)][L(0x121)],
                'references': {
                    'model': l[M(0x126)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x13e)],
                'onDelete': l[M(0x13e)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0x127)][L(0x116)],
                'references': {
                    'model': l[M(0x11a)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13e)],
                'onDelete': l[L(0x128)]
            },
            'createdAt': {
                'type': sequelize_1[L(0x127)][L(0x122)](0x19bd + 0xd13 + -0x26ca),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[L(0x127)][L(0x122)](0x1 * -0x24c5 + -0x9 * 0x1c9 + 0x31c * 0x11),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = J, e = {};
        e[N(0x118)] = O(0x117) + O(0x12c);
        const f = e;
        return d[O(0x12f)](f[O(0x118)]);
    }
};