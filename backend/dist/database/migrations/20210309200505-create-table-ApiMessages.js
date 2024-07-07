'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x171)) / (0xa01 + -0x25f2 + 0x7 * 0x3fe) * (-parseInt(L(0x16d)) / (-0x13f3 * 0x1 + 0x2 * 0x113d + -0x4d7 * 0x3)) + parseInt(L(0x16c)) / (0x8ed * -0x2 + 0x2 * -0xd00 + 0x1 * 0x2bdd) + -parseInt(M(0x16a)) / (-0x2 * -0x12ec + 0x33 * -0x26 + -0xa16 * 0x3) * (parseInt(L(0x15e)) / (0x2c3 + -0xb5c + 0x2 * 0x44f)) + -parseInt(L(0x162)) / (-0x4f0 + -0x1663 + 0x1b59) * (parseInt(L(0x155)) / (-0x2205 + 0x1 * -0xc2d + 0x2e39)) + -parseInt(L(0x15a)) / (0x206f + -0x52a * -0x7 + -0x448d) * (-parseInt(L(0x159)) / (-0x1d * 0x81 + 0x1bf6 * -0x1 + 0x2a9c)) + parseInt(M(0x146)) / (-0x1c * -0x6a + -0xd15 + 0x17 * 0x11) + -parseInt(L(0x164)) / (-0x1 * 0x16b5 + 0xb9d + 0xb23) * (-parseInt(M(0x172)) / (0xd * 0x37 + -0x17 * -0xaf + -0x1278));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x63a1f + 0xc2 * -0x38f + 0x306d9));
const K = {};
K[N(0x14f)] = !![], Object[N(0x156) + O(0x147)](exports, O(0x161), K);
function a() {
    const T = [
        'EaMGi',
        '394145NaTggb',
        'INTEGER',
        'vqmMR',
        '__esModule',
        '30Zrmkzx',
        '_uuid()',
        '107459qJrNHU',
        'Whatsapps',
        'dropTable',
        'Sequelize',
        'gen_random',
        'wMvZy',
        '28HYLNDP',
        'exports',
        '1244664ZZvscI',
        '21762ovznfa',
        'createTabl',
        'notEmpty',
        'rEfQo',
        '13DvSLAf',
        '948mmSarX',
        'TEXT',
        '2236740oDsFNH',
        'erty',
        'ApiMessage',
        'UUID',
        'FjsQV',
        'zbXsP',
        'JSONB',
        'literal',
        'SET\x20NULL',
        'value',
        'DataTypes',
        'DATE',
        'sequelize',
        'all',
        'CASCADE',
        '1014034xbwJuR',
        'defineProp',
        'len',
        'rbsQz',
        '1386621XIlUsH',
        '8SKXWYJ',
        'Tenants',
        'STRING'
    ];
    a = function () {
        return T;
    };
    return a();
}
const sequelize_1 = require(N(0x152));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe11 + -0x1b49 + 0x2aa0);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[N(0x16b)] = {
    'up': f => {
        const P = O, Q = O, g = {};
        g[P(0x160)] = P(0x148) + 's', g[Q(0x170)] = P(0x168) + P(0x163), g[Q(0x14b)] = Q(0x165), g[P(0x15d)] = Q(0x154), g[P(0x158)] = Q(0x14e), g[Q(0x14a)] = P(0x15b);
        const h = g, i = {};
        i[Q(0x16f)] = !![];
        const j = {};
        return j[P(0x16f)] = !![], j[Q(0x157)] = [
            0x19aa * 0x1 + 0x1718 + -0x30b6,
            0x42b * -0x9 + -0x24ce + 0x4f * 0xf1
        ], Promise[Q(0x153)]([f[P(0x16e) + 'e'](h[P(0x160)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x150)][P(0x149)],
                    'defaultValue': sequelize_1[P(0x167)][Q(0x14d)](h[Q(0x170)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x150)][P(0x15c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[Q(0x150)][Q(0x15c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x150)][P(0x173)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x150)][Q(0x15f)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x150)][P(0x15c)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[P(0x150)][Q(0x173)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x150)][Q(0x15f)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[Q(0x150)][Q(0x15f)],
                    'references': {
                        'model': h[Q(0x14b)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x15d)],
                    'onDelete': h[P(0x158)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x150)][Q(0x15f)],
                    'references': {
                        'model': h[Q(0x14a)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x15d)],
                    'onDelete': h[P(0x15d)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[Q(0x150)][Q(0x14c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x150)][P(0x14c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[Q(0x150)][Q(0x151)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x150)][P(0x151)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = N, S = N, e = {};
        e[R(0x169)] = S(0x148) + 's';
        const f = e;
        return Promise[R(0x153)]([d[R(0x166)](f[S(0x169)])]);
    }
};