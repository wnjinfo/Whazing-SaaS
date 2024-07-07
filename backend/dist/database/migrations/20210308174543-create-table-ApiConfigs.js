'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x139)) / (-0x17 * -0x161 + -0x3 * -0x1b9 + -0x24e1) * (parseInt(F(0x147)) / (0x22d8 + 0x1989 + -0x3c5f)) + parseInt(F(0x13c)) / (0x30d + 0x26a1 + -0x29ab) * (-parseInt(G(0x145)) / (-0x1b * -0xe5 + -0x24f * -0x1 + -0x1a72)) + -parseInt(F(0x13b)) / (0x2b0 + -0x4 * 0x19d + 0x3c9) * (parseInt(G(0x123)) / (0x1b5a + -0x247d + 0x5 * 0x1d5)) + -parseInt(G(0x14c)) / (-0x1d99 + -0x134 * -0xb + 0x832 * 0x2) + parseInt(F(0x13f)) / (-0x25ae + 0x1 * 0x194d + 0xc69) + parseInt(F(0x124)) / (0xc * -0x2f5 + 0xb2c + 0x1859) * (-parseInt(F(0x150)) / (-0x7b6 + 0x256c + -0x1dac)) + parseInt(F(0x12f)) / (0x74d + -0x2 * 0x612 + -0x19 * -0x32) * (parseInt(F(0x14e)) / (-0xf * 0x233 + -0x2bd + 0x23c6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8c0f5 + -0x132298 + 0x168fb7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15d0 + -0x125 * -0x21 + -0xed3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = {};
E[H(0x122)] = !![], Object[H(0x148) + H(0x14a)](exports, H(0x127), E);
function a() {
    const N = [
        'XIMDA',
        'CASCADE',
        'pbOya',
        'literal',
        '12034NTpzXZ',
        'STRING',
        'DATE',
        'BOOLEAN',
        'Sequelize',
        'Whatsapps',
        'CFPbb',
        'tnAEW',
        'DataTypes',
        'TEXT',
        '411TUXjui',
        'QMRjj',
        '5cJQuOO',
        '1455LzMXeH',
        'Tenants',
        'gen_random',
        '349296yMzVci',
        'SET\x20NULL',
        'all',
        'exports',
        '_uuid()',
        'isUrl',
        '12116hVlvYg',
        'sequelize',
        '1714dbPGYT',
        'defineProp',
        'UxMKu',
        'erty',
        'INTEGER',
        '9006697YIaPGg',
        'dropTable',
        '72084tIlhvz',
        'UUID',
        '2809630qPHXqy',
        'value',
        '9511662gOrKzx',
        '36pfbblJ',
        'HjjEe',
        'sUKQJ',
        '__esModule',
        'createTabl',
        'ApiConfigs',
        'Users'
    ];
    a = function () {
        return N;
    };
    return a();
}
const sequelize_1 = require(H(0x146));
module[I(0x142)] = {
    'up': f => {
        const J = H, K = H, g = {};
        g[J(0x149)] = J(0x129), g[J(0x135)] = J(0x13e) + K(0x143), g[J(0x13a)] = K(0x134), g[J(0x12b)] = K(0x12c), g[J(0x125)] = K(0x140), g[J(0x12d)] = J(0x12a), g[J(0x126)] = J(0x13d);
        const h = g, i = {};
        i[J(0x144)] = !![];
        const j = {};
        return j[J(0x144)] = !![], Promise[J(0x141)]([f[J(0x128) + 'e'](h[J(0x149)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x137)][J(0x14f)],
                    'defaultValue': sequelize_1[J(0x133)][K(0x12e)](h[K(0x135)])
                },
                'sessionId': {
                    'type': sequelize_1[J(0x137)][K(0x14b)],
                    'references': {
                        'model': h[J(0x13a)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x12b)],
                    'onDelete': h[J(0x125)]
                },
                'name': {
                    'type': sequelize_1[K(0x137)][J(0x130)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x137)][K(0x132)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[K(0x137)][K(0x130)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[K(0x137)][K(0x14b)],
                    'references': {
                        'model': h[J(0x12d)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x12b)],
                    'onDelete': h[K(0x125)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x137)][K(0x14b)],
                    'references': {
                        'model': h[K(0x126)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x12b)],
                    'onDelete': h[J(0x12b)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[J(0x137)][J(0x138)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[K(0x137)][K(0x138)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x137)][J(0x131)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x137)][K(0x131)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = H, e = {};
        e[L(0x136)] = M(0x129);
        const f = e;
        return Promise[M(0x141)]([d[M(0x14d)](f[L(0x136)])]);
    }
};