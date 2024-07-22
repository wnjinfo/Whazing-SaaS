'use strict';
const H = b, I = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6cf + 0x503 + -0x9fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x1f8)) / (-0x57 * 0x5 + -0x2194 + 0x2348) * (-parseInt(G(0x1e6)) / (0x6a7 * 0x5 + 0x4 * 0x322 + -0x2dc9 * 0x1)) + -parseInt(F(0x1fc)) / (0x4 * 0x713 + 0x876 * 0x2 + -0x2d35 * 0x1) + parseInt(F(0x1f4)) / (0x1014 + -0x3 * -0x421 + -0x1c73) * (parseInt(G(0x204)) / (-0xaec * 0x3 + 0x559 * 0x5 + -0x6 * -0x102)) + -parseInt(G(0x1d8)) / (-0x1 * 0xa7d + -0xe2c + 0x18af) * (parseInt(F(0x1fd)) / (0xb5c * -0x2 + 0xaf5 * 0x1 + 0xbca)) + parseInt(F(0x1f6)) / (-0x13a5 + -0x2175 + 0x3522) * (-parseInt(G(0x1ef)) / (-0x3f * 0x1b + -0x1d37 + 0xbf7 * 0x3)) + parseInt(F(0x1d6)) / (0xb53 * 0x1 + -0x34 * -0x1 + -0xb7d) * (-parseInt(F(0x1fe)) / (0x36b + -0xf5b + -0x1 * -0xbfb)) + parseInt(G(0x1e0)) / (0x4 * 0x1fb + 0x1131 + -0x1911);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x258e3 + 0x89de + -0x1310e));
const E = {};
E[H(0x1f0)] = !![], Object[I(0x1d7) + I(0x1e1)](exports, I(0x1f2), E);
const sequelize_1 = require(I(0x1fb));
function a() {
    const N = [
        '81UDlALK',
        'value',
        'ApiConfigs',
        '__esModule',
        'all',
        '69884OQMDpA',
        'gen_random',
        '144952yfPsmu',
        '_uuid()',
        '1ySBtqt',
        'CASCADE',
        'kucgw',
        'sequelize',
        '401259vsZsPs',
        '10213LCPKgJ',
        '11ltxeRp',
        'TEXT',
        'createTabl',
        'exports',
        'INTEGER',
        'STRING',
        '55KbWBTj',
        '569550Ebljcd',
        'defineProp',
        '762VFNNcc',
        'jCHqB',
        'okjRR',
        'isUrl',
        'dropTable',
        'BOOLEAN',
        'RkkOr',
        'SET\x20NULL',
        '5760492AdnnON',
        'erty',
        'Tenants',
        'DATE',
        'Users',
        'Whatsapps',
        '44246jiPQck',
        'VmJmh',
        'SZUkX',
        'UUID',
        'Gkxvs',
        'literal',
        'Sequelize',
        'jzxux',
        'DataTypes'
    ];
    a = function () {
        return N;
    };
    return a();
}
module[H(0x201)] = {
    'up': f => {
        const J = I, K = H, g = {};
        g[J(0x1e8)] = K(0x1f1), g[K(0x1de)] = J(0x1f5) + J(0x1f7), g[J(0x1d9)] = K(0x1e5), g[J(0x1fa)] = K(0x1f9), g[J(0x1e7)] = J(0x1df), g[J(0x1ed)] = J(0x1e4), g[J(0x1da)] = J(0x1e2);
        const h = g, i = {};
        i[J(0x1db)] = !![];
        const j = {};
        return j[J(0x1db)] = !![], Promise[K(0x1f3)]([f[J(0x200) + 'e'](h[J(0x1e8)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x1ee)][K(0x1e9)],
                    'defaultValue': sequelize_1[J(0x1ec)][J(0x1eb)](h[J(0x1de)])
                },
                'sessionId': {
                    'type': sequelize_1[K(0x1ee)][K(0x202)],
                    'references': {
                        'model': h[J(0x1d9)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x1fa)],
                    'onDelete': h[J(0x1e7)]
                },
                'name': {
                    'type': sequelize_1[J(0x1ee)][J(0x203)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[K(0x1ee)][K(0x1dd)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x1ee)][K(0x203)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x1ee)][J(0x202)],
                    'references': {
                        'model': h[K(0x1ed)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x1fa)],
                    'onDelete': h[K(0x1e7)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x1ee)][K(0x202)],
                    'references': {
                        'model': h[J(0x1da)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x1fa)],
                    'onDelete': h[K(0x1fa)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0x1ee)][K(0x1ff)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[K(0x1ee)][K(0x1ff)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x1ee)][J(0x1e3)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x1ee)][K(0x1e3)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x1ea)] = L(0x1f1);
        const f = e;
        return Promise[L(0x1f3)]([d[M(0x1dc)](f[L(0x1ea)])]);
    }
};