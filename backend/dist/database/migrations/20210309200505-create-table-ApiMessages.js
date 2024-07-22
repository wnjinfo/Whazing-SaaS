'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0xb9)) / (0x550 * -0x7 + -0xb4 * 0x5 + -0x11 * -0x265) + parseInt(M(0xdc)) / (-0x6ae * -0x2 + 0x19fa + -0x13aa * 0x2) * (-parseInt(M(0xbd)) / (-0x1 * -0x6a6 + -0x144c + 0xd * 0x10d)) + -parseInt(M(0xda)) / (-0x1 * 0xe61 + 0xa * 0x2e7 + -0x1 * 0xea1) + parseInt(M(0xbc)) / (-0x3 * 0xc79 + -0x58d + 0x2afd) * (parseInt(L(0xd1)) / (-0x1 * 0x1db6 + 0x149e + 0x91e)) + parseInt(M(0xba)) / (0x1 * 0x1eb3 + 0x1d17 + 0x3bc3 * -0x1) * (-parseInt(L(0xbb)) / (0xf34 + -0x1 * 0x1101 + 0x1 * 0x1d5)) + -parseInt(M(0xcb)) / (0x18ba + -0x1aaa * -0x1 + -0x335b) + parseInt(L(0xc9)) / (-0x10 * 0xa4 + -0x1 * 0x4a9 + -0xef3 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x65519 + -0xa4cb1 * 0x1 + 0x9cdfb));
function a() {
    const T = [
        'defineProp',
        'UUID',
        'Sequelize',
        '169352tyjrmm',
        '2656143fIzRfc',
        '8TQHRzL',
        '25zQgIzw',
        '12VMFnst',
        'notEmpty',
        'rwwYn',
        'sequelize',
        'createTabl',
        'DataTypes',
        'STRING',
        'dropTable',
        'GbQNr',
        'erty',
        'QEnVX',
        'JSONB',
        '19965150UNnvbF',
        '_uuid()',
        '5012955rJIzuJ',
        'ApiMessage',
        '__esModule',
        'len',
        'IVGib',
        'rOxxY',
        '577050WEFZHj',
        'wNFSs',
        'literal',
        'CASCADE',
        'Whatsapps',
        'all',
        'DATE',
        'SET\x20NULL',
        'TEXT',
        '2003596fzoyCO',
        'ibFaX',
        '244066OskGrA',
        'Tenants',
        'INTEGER',
        'exports',
        'value',
        'gen_random'
    ];
    a = function () {
        return T;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2704 + -0x1fc5 * 0x1 + -0x68c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = {};
K[N(0xb4)] = !![], Object[N(0xb6) + N(0xc6)](exports, N(0xcd), K);
const sequelize_1 = require(N(0xc0));
module[N(0xb3)] = {
    'up': f => {
        const P = O, Q = O, g = {};
        g[P(0xbf)] = Q(0xcc) + 's', g[Q(0xdb)] = Q(0xb5) + P(0xca), g[P(0xc5)] = Q(0xd5), g[P(0xcf)] = P(0xd4), g[P(0xc7)] = Q(0xd8), g[P(0xd0)] = Q(0xdd);
        const h = g, i = {};
        i[P(0xbe)] = !![];
        const j = {};
        return j[P(0xbe)] = !![], j[P(0xce)] = [
            -0x1 * 0x244 + 0x259d * 0x1 + -0x234d,
            0x265a * -0x1 + -0x143d + 0x3aa5
        ], Promise[Q(0xd6)]([f[Q(0xc1) + 'e'](h[Q(0xbf)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0xc2)][Q(0xb7)],
                    'defaultValue': sequelize_1[Q(0xb8)][Q(0xd3)](h[Q(0xdb)])
                },
                'messageId': {
                    'type': sequelize_1[P(0xc2)][P(0xc3)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[Q(0xc2)][P(0xc3)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0xc2)][P(0xd9)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0xc2)][P(0xde)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0xc2)][P(0xc3)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0xc2)][P(0xd9)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[P(0xc2)][Q(0xde)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0xc2)][Q(0xde)],
                    'references': {
                        'model': h[Q(0xc5)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0xcf)],
                    'onDelete': h[Q(0xc7)]
                },
                'tenantId': {
                    'type': sequelize_1[P(0xc2)][Q(0xde)],
                    'references': {
                        'model': h[P(0xd0)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0xcf)],
                    'onDelete': h[P(0xcf)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0xc2)][Q(0xc8)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[Q(0xc2)][P(0xc8)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[Q(0xc2)][P(0xd7)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0xc2)][P(0xd7)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = N, S = N, e = {};
        e[R(0xd2)] = R(0xcc) + 's';
        const f = e;
        return Promise[S(0xd6)]([d[S(0xc4)](f[R(0xd2)])]);
    }
};