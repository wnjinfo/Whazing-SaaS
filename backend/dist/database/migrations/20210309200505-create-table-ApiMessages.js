'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(L(0x206)) / (-0x7e * -0x4f + 0x1 * 0x1f + -0x2700) + -parseInt(L(0x1ff)) / (0x2424 + 0x164e + -0x3a70) * (-parseInt(M(0x1fa)) / (-0xddc + -0x1ec3 + 0x2ca2)) + parseInt(M(0x208)) / (-0x13ae + 0x186c + 0x4ba * -0x1) + parseInt(L(0x200)) / (0x19 * 0xf5 + -0x1f53 + 0x76b) + parseInt(L(0x1f4)) / (-0x39b + -0x981 + 0xd22) + -parseInt(M(0x202)) / (-0x9 * -0x247 + 0x1440 + -0x28b8) * (-parseInt(L(0x209)) / (-0x1ca5 * -0x1 + 0xb65 * 0x2 + -0x3367 * 0x1)) + -parseInt(L(0x1f8)) / (-0xcca * 0x3 + -0x2296 + 0x48fd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x35797 * 0x5 + 0xbbf45 * 0x1 + -0x2 * 0x8ca01));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2410 + -0x4b * -0x39 + 0x7 * -0x745);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = {};
K[N(0x1f5)] = !![], Object[O(0x1eb) + N(0x1f0)](exports, N(0x203), K);
const sequelize_1 = require(N(0x1e8));
module[O(0x1e1)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x1ef)] = Q(0x1f9) + 's', g[P(0x1e6)] = P(0x1e9) + P(0x1f1), g[P(0x1f2)] = Q(0x201), g[P(0x205)] = P(0x1e7), g[P(0x1e5)] = Q(0x1fe), g[Q(0x1f7)] = P(0x1ed);
        const h = g, i = {};
        i[P(0x1fb)] = !![];
        const j = {};
        return j[P(0x1fb)] = !![], j[P(0x1f6)] = [
            -0x1f * 0x32 + 0x20d8 + -0x475 * 0x6,
            -0xf9 * 0x27 + -0x1c42 + 0x1615 * 0x3
        ], Promise[P(0x1fd)]([f[Q(0x1e2) + 'e'](h[Q(0x1ef)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x1e0)][P(0x1e4)],
                    'defaultValue': sequelize_1[P(0x207)][Q(0x1e3)](h[Q(0x1e6)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x1e0)][P(0x1ea)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x1e0)][P(0x1ea)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x1e0)][Q(0x1ec)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x1e0)][Q(0x1ee)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x1e0)][Q(0x1ea)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0x1e0)][P(0x1ec)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x1e0)][Q(0x1ee)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x1e0)][Q(0x1ee)],
                    'references': {
                        'model': h[P(0x1f2)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x205)],
                    'onDelete': h[P(0x1e5)]
                },
                'tenantId': {
                    'type': sequelize_1[P(0x1e0)][P(0x1ee)],
                    'references': {
                        'model': h[Q(0x1f7)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x205)],
                    'onDelete': h[Q(0x205)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x1e0)][Q(0x1fc)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x1e0)][Q(0x1fc)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x1e0)][P(0x204)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[Q(0x1e0)][Q(0x204)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = N, e = {};
        e[R(0x1f3)] = S(0x1f9) + 's';
        const f = e;
        return Promise[S(0x1fd)]([d[S(0x20a)](f[S(0x1f3)])]);
    }
};
function a() {
    const T = [
        'dropTable',
        'DataTypes',
        'exports',
        'createTabl',
        'literal',
        'UUID',
        'lwlFx',
        'nMaMM',
        'CASCADE',
        'sequelize',
        'gen_random',
        'STRING',
        'defineProp',
        'TEXT',
        'Tenants',
        'INTEGER',
        'HBvUO',
        'erty',
        '_uuid()',
        'DqUQd',
        'rtEGa',
        '100368DjoKTX',
        'value',
        'len',
        'vLcQO',
        '24063120CKklpy',
        'ApiMessage',
        '112176LXOOyW',
        'notEmpty',
        'JSONB',
        'all',
        'SET\x20NULL',
        '20YrtciN',
        '5382865jVBVwZ',
        'Whatsapps',
        '413FxvubE',
        '__esModule',
        'DATE',
        'RzIqp',
        '26497txoVVZ',
        'Sequelize',
        '2714316lFVmPX',
        '164664KIIqgv'
    ];
    a = function () {
        return T;
    };
    return a();
}