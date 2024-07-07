'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x185)) / (0x11f1 + -0x7bd + 0xa33 * -0x1) + -parseInt(J(0x1a0)) / (-0x22ee + -0x68b + 0x297b) * (parseInt(J(0x17d)) / (0xbf1 + 0x3b * -0x59 + 0xa9 * 0xd)) + -parseInt(J(0x193)) / (0x649 * 0x3 + -0xe * -0x2b + -0x1531 * 0x1) + parseInt(K(0x191)) / (0x14 * -0x8e + 0x14e0 + -0x9c3) * (-parseInt(J(0x187)) / (0x657 + 0x4a * -0x47 + 0xe35)) + -parseInt(J(0x199)) / (0xeeb + -0x2698 + 0x17b4) * (-parseInt(K(0x181)) / (0x117 * -0x2 + 0x1fa3 + -0x1d6d)) + -parseInt(J(0x19b)) / (-0x170b + 0xb42 + 0xbd2) + parseInt(K(0x197)) / (0x178b + 0x190e + 0x191 * -0x1f) * (parseInt(J(0x1a2)) / (-0x15ec + 0x12ea * 0x1 + -0xb * -0x47));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11103 * -0x2 + 0x406 * 0xef + -0x1 * -0x284dd));
const I = {};
function a() {
    const R = [
        'all',
        'KWGCy',
        'value',
        '1332445tXQizl',
        'exports',
        '825220oeiLyS',
        'DataTypes',
        'sequelize',
        'defineProp',
        '134410xmQjDx',
        'TEXT',
        '7VovAHH',
        'type',
        '1718568dWXyIn',
        'CASCADE',
        'giSUs',
        'wvOaH',
        'DATE',
        '6248rXRTsi',
        'dropTable',
        '451RnuxhW',
        'erty',
        'pending',
        'Whatsapps',
        'createTabl',
        'unvVb',
        'MrfXv',
        'autoIncrem',
        '459hjBMkL',
        'ent',
        'Tenants',
        'Users',
        '3961488KRMzOK',
        'EXEuA',
        'primaryKey',
        'INTEGER',
        '366924oJYhvj',
        'kjxSX',
        '6xiirij',
        'Campaigns',
        'SET\x20NULL',
        'STRING',
        'fAoMY',
        'allowNull',
        '__esModule'
    ];
    a = function () {
        return R;
    };
    return a();
}
I[L(0x190)] = !![], Object[M(0x196) + M(0x1a3)](exports, L(0x18d), I);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdf * 0x20 + -0x2336 * -0x1 + -0x3d9a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(L(0x195));
module[L(0x192)] = {
    'up': g => {
        const N = L, O = M, h = {};
        h[N(0x1a8)] = O(0x188), h[O(0x18b)] = O(0x1a4), h[O(0x182)] = N(0x1a5), h[O(0x18f)] = O(0x19c), h[N(0x186)] = N(0x189), h[O(0x1a7)] = N(0x180), h[O(0x19e)] = N(0x17f);
        const i = h, j = {};
        j[N(0x19a)] = sequelize_1[N(0x194)][O(0x184)], j[N(0x183)] = !![], j[O(0x17c) + O(0x17e)] = !![], j[O(0x18c)] = ![];
        const k = {};
        k[O(0x19a)] = sequelize_1[N(0x194)][O(0x18a)], k[O(0x18c)] = ![];
        const l = {};
        return l[O(0x19a)] = sequelize_1[O(0x194)][O(0x19f)], l[O(0x18c)] = ![], Promise[O(0x18e)]([g[O(0x1a6) + 'e'](i[N(0x1a8)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[N(0x194)][N(0x18a)],
                    'allowNull': ![],
                    'defaultValue': i[N(0x18b)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0x194)][O(0x184)],
                    'references': {
                        'model': i[O(0x182)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x18f)],
                    'onDelete': i[N(0x186)]
                },
                'message1': {
                    'type': sequelize_1[N(0x194)][O(0x198)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[N(0x194)][N(0x198)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0x194)][N(0x198)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0x194)][O(0x18a)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0x194)][O(0x18a)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x194)][N(0x184)],
                    'references': {
                        'model': i[N(0x1a7)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x18f)],
                    'onDelete': i[O(0x186)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0x194)][O(0x184)],
                    'references': {
                        'model': i[O(0x19e)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x18f)],
                    'onDelete': i[O(0x18f)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0x194)][O(0x19f)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0x194)][O(0x19f)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = M, Q = M, e = {};
        e[P(0x19d)] = P(0x188);
        const f = e;
        return Promise[P(0x18e)]([d[P(0x1a1)](f[P(0x19d)])]);
    }
};