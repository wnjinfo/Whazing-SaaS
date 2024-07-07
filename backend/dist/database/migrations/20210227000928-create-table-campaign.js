'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x1a4)) / (-0x2543 * -0x1 + 0xcb3 * -0x1 + -0x188f) * (parseInt(J(0x1a7)) / (-0x433 * -0x1 + -0x4 * -0x351 + -0x1175)) + parseInt(K(0x1b8)) / (0x1a6d + -0x513 + -0x25f * 0x9) + parseInt(J(0x1b6)) / (0x22c5 + 0x1fa2 + 0xb * -0x609) * (-parseInt(K(0x1ab)) / (0xd * -0x24e + -0x12e4 * 0x2 + 0x43c3)) + -parseInt(K(0x1c6)) / (-0x7 * -0x52 + -0x15a3 + -0x3 * -0x679) * (-parseInt(K(0x1b7)) / (-0x1ada + -0xe6b + 0x294c)) + -parseInt(K(0x1a6)) / (-0x1e93 * 0x1 + 0x932 + 0x1569) + parseInt(J(0x1ae)) / (-0x829 + 0x101 * -0xe + -0x40 * -0x59) * (-parseInt(J(0x1ca)) / (0x5b8 + 0xbc * -0xb + 0x1 * 0x266)) + -parseInt(K(0x1bf)) / (0x4e7 * 0x1 + 0x53b + 0x7 * -0x171) * (-parseInt(K(0x1b2)) / (-0x1e55 + -0x8bd * -0x2 + 0xce7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5abe7 + -0x989e7 + 0x182929));
const I = {};
I[L(0x1ad)] = !![], Object[M(0x1b0) + M(0x1c5)](exports, M(0x1a2), I);
const sequelize_1 = require(L(0x1c2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x127e + -0x1bd7 + 0xaf7);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[M(0x1bc)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0x1cb)] = N(0x19f), h[O(0x1c0)] = O(0x1c8), h[O(0x1ac)] = O(0x1b1), h[O(0x1be)] = N(0x1a9), h[O(0x19e)] = N(0x1c9), h[O(0x1c1)] = N(0x1b4), h[N(0x1a1)] = N(0x1c7);
        const i = h, j = {};
        j[O(0x1a8)] = sequelize_1[O(0x1a0)][O(0x1ba)], j[O(0x1b5)] = !![], j[N(0x1bd) + N(0x1b3)] = !![], j[O(0x1c4)] = ![];
        const k = {};
        k[O(0x1a8)] = sequelize_1[N(0x1a0)][N(0x1aa)], k[O(0x1c4)] = ![];
        const l = {};
        return l[N(0x1a8)] = sequelize_1[N(0x1a0)][O(0x1af)], l[N(0x1c4)] = ![], Promise[N(0x1c3)]([g[O(0x1a5) + 'e'](i[O(0x1cb)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[N(0x1a0)][O(0x1aa)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x1c0)]
                },
                'sessionId': {
                    'type': sequelize_1[O(0x1a0)][O(0x1ba)],
                    'references': {
                        'model': i[N(0x1ac)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x1be)],
                    'onDelete': i[O(0x19e)]
                },
                'message1': {
                    'type': sequelize_1[O(0x1a0)][N(0x1a3)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[N(0x1a0)][N(0x1a3)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0x1a0)][N(0x1a3)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0x1a0)][O(0x1aa)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0x1a0)][O(0x1aa)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x1a0)][O(0x1ba)],
                    'references': {
                        'model': i[O(0x1c1)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x1be)],
                    'onDelete': i[N(0x19e)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0x1a0)][N(0x1ba)],
                    'references': {
                        'model': i[N(0x1a1)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x1be)],
                    'onDelete': i[O(0x1be)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0x1a0)][N(0x1af)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[N(0x1a0)][O(0x1af)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = L, e = {};
        e[P(0x1b9)] = Q(0x19f);
        const f = e;
        return Promise[P(0x1c3)]([d[P(0x1bb)](f[P(0x1b9)])]);
    }
};
function a() {
    const R = [
        'tDbjL',
        'value',
        '9oYmQqe',
        'DATE',
        'defineProp',
        'Whatsapps',
        '12Rexrsb',
        'ent',
        'Users',
        'primaryKey',
        '780DTzHkX',
        '2779805XnJGWo',
        '118929niAhgw',
        'OMOkM',
        'INTEGER',
        'dropTable',
        'exports',
        'autoIncrem',
        'XajYG',
        '21271877EnevOZ',
        'cIsud',
        'fTIfC',
        'sequelize',
        'all',
        'allowNull',
        'erty',
        '6gBAdmq',
        'Tenants',
        'pending',
        'SET\x20NULL',
        '3281190RThrco',
        'VugKY',
        'SoZFU',
        'Campaigns',
        'DataTypes',
        'alFzB',
        '__esModule',
        'TEXT',
        '68567gKycpn',
        'createTabl',
        '9012616EdAFae',
        '2CFzDef',
        'type',
        'CASCADE',
        'STRING',
        '6685KojgHe'
    ];
    a = function () {
        return R;
    };
    return a();
}