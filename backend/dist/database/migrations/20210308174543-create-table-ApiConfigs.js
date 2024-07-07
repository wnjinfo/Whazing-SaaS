'use strict';
function a() {
    const N = [
        '165AucIds',
        'Tenants',
        'Whatsapps',
        'Users',
        '15535449YvyzNt',
        '4CFDjWr',
        'PHHwf',
        'exports',
        '745610ZMzrWT',
        'DATE',
        'Cvvmk',
        'INTEGER',
        'ApiConfigs',
        '1012767aOFqmg',
        'DataTypes',
        'sequelize',
        'dropTable',
        'value',
        'gen_random',
        'ZAvpe',
        '_uuid()',
        'TEXT',
        'Oogyb',
        '1259760wyRGsz',
        'createTabl',
        'defineProp',
        'mtSce',
        '692681EemfDe',
        'literal',
        'Sequelize',
        'ALABX',
        'ZwwhC',
        '12AZZqdT',
        '1279430pgfLGh',
        'SET\x20NULL',
        'erty',
        'all',
        'ppanN',
        '1171723RGndrK',
        '4GJkXjS',
        '__esModule',
        'UUID',
        'isUrl',
        'CASCADE',
        'BOOLEAN',
        'STRING'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x13c)) / (0x1a96 + 0x1378 + -0x2e0d) * (-parseInt(G(0x148)) / (-0x63e * -0x6 + -0xcd3 + -0x189f)) + -parseInt(F(0x12e)) / (-0x1ef7 * 0x1 + 0x5 * 0x579 + 0x39d) * (parseInt(F(0x126)) / (-0x9 * 0x105 + 0xea7 * -0x1 + 0x17d8)) + -parseInt(G(0x142)) / (-0x9e1 + -0x13fd * 0x1 + 0x1de3 * 0x1) + -parseInt(F(0x141)) / (0x1e46 + -0x1 * 0x1258 + -0xc * 0xfe) * (parseInt(F(0x147)) / (0x21d9 + -0x76f + -0x5 * 0x547)) + -parseInt(G(0x138)) / (-0x10ad + -0x23f0 + 0x34a5) + parseInt(G(0x125)) / (-0x1215 + 0x139c + -0x17e) + -parseInt(F(0x129)) / (0x17f + -0x1b0e + 0x1999) * (parseInt(G(0x121)) / (0x157a * -0x1 + -0x7 * 0x323 + 0x2b7a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1aa2ba + 0x1a0c4f + -0x8 * 0x4dad2));
const E = {};
E[H(0x132)] = !![], Object[H(0x13a) + I(0x144)](exports, I(0x149), E);
const sequelize_1 = require(I(0x130));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x814 + 0x36 * 0x6 + 0x7f1 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[H(0x128)] = {
    'up': f => {
        const J = I, K = H, g = {};
        g[J(0x137)] = K(0x12d), g[K(0x134)] = K(0x133) + K(0x135), g[J(0x12b)] = K(0x123), g[J(0x146)] = J(0x14c), g[J(0x140)] = K(0x143), g[J(0x13f)] = K(0x124), g[K(0x13b)] = K(0x122);
        const h = g, i = {};
        i[K(0x14b)] = !![];
        const j = {};
        return j[K(0x14b)] = !![], Promise[J(0x145)]([f[K(0x139) + 'e'](h[J(0x137)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[J(0x12f)][J(0x14a)],
                    'defaultValue': sequelize_1[K(0x13e)][K(0x13d)](h[J(0x134)])
                },
                'sessionId': {
                    'type': sequelize_1[K(0x12f)][K(0x12c)],
                    'references': {
                        'model': h[J(0x12b)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x146)],
                    'onDelete': h[K(0x140)]
                },
                'name': {
                    'type': sequelize_1[K(0x12f)][K(0x14e)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x12f)][K(0x14d)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[K(0x12f)][J(0x14e)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[K(0x12f)][K(0x12c)],
                    'references': {
                        'model': h[K(0x13f)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x146)],
                    'onDelete': h[K(0x140)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x12f)][J(0x12c)],
                    'references': {
                        'model': h[J(0x13b)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x146)],
                    'onDelete': h[K(0x146)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[J(0x12f)][J(0x136)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x12f)][J(0x136)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x12f)][J(0x12a)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x12f)][J(0x12a)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x127)] = M(0x12d);
        const f = e;
        return Promise[M(0x145)]([d[L(0x131)](f[L(0x127)])]);
    }
};