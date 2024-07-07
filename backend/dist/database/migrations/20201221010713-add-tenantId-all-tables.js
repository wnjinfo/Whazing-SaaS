'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x20d)) / (-0x10c * -0x1a + 0x10 * 0x137 + -0x1 * 0x2ea7) + -parseInt(I(0x1fe)) / (-0xace + 0x1 * 0x281 + -0x3 * -0x2c5) + parseInt(H(0x20c)) / (0x1 * 0x222b + -0x5 * 0x4c + 0xf6 * -0x22) + -parseInt(I(0x211)) / (0x1133 + -0x1341 + 0x5 * 0x6a) + parseInt(I(0x217)) / (0x3 * -0x22e + 0x1952 + -0x12c3 * 0x1) * (-parseInt(I(0x21a)) / (0x209f * 0x1 + -0xb3 * -0x6 + 0x1 * -0x24cb)) + -parseInt(I(0x1ee)) / (-0x1 * 0x3e5 + -0x20a9 + 0x751 * 0x5) * (-parseInt(I(0x202)) / (0xa93 + 0x1042 + -0x1acd)) + parseInt(H(0x20a)) / (-0x9 * -0x41c + 0x1eed + -0x43e0) * (parseInt(I(0x20e)) / (-0x422 * -0x1 + -0x1 * 0xa55 + -0x63d * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x80d3 * 0x4 + -0x1fc0 * 0x35 + -0x1 * -0x104699));
const G = {};
function a() {
    const P = [
        'exports',
        '__esModule',
        '27172116esFnxH',
        'mivNW',
        '67560WzxKBj',
        '999838IVIFFT',
        '10NSHLEW',
        'Tenants',
        'dhuHx',
        '3162612PYEonP',
        'Queues',
        'ZUjKk',
        'koZli',
        'OKMYs',
        'vWzGa',
        '10zosGOH',
        'restrict',
        'INTEGER',
        '277878kzfJsk',
        'defineProp',
        'AutoReply',
        'Tickets',
        'yNmdd',
        'XveDX',
        'Contacts',
        '3423AgAkGS',
        'CASCADE',
        'all',
        'HmohM',
        'Settings',
        'vBcBY',
        'PtWsu',
        'jJEiT',
        'RErOu',
        'eCcTe',
        'tenantId',
        'value',
        'nWOvB',
        'yGmGm',
        'Users',
        'addColumn',
        '1949746rxKKeC',
        'sequelize',
        'izBsJ',
        'qdczx',
        '5240sqHAkx',
        'DataTypes',
        'erty',
        'Whatsapps',
        'pfjYC',
        'removeColu'
    ];
    a = function () {
        return P;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xe98 + -0x22d * -0x1 + -0x5 * 0x2f9);
        let h = e[f];
        return h;
    }, b(c, d);
}
G[J(0x1f9)] = !![], Object[K(0x1e8) + J(0x204)](exports, J(0x209), G);
const sequelize_1 = require(K(0x1ff));
module[K(0x208)] = {
    'up': d => {
        const L = K, M = J, e = {};
        e[L(0x1f6)] = M(0x1ea), e[L(0x200)] = M(0x1f8), e[L(0x213)] = M(0x20f), e[M(0x201)] = M(0x1ef), e[L(0x1fa)] = M(0x218), e[M(0x214)] = L(0x1ed), e[M(0x215)] = M(0x212), e[M(0x210)] = L(0x1f2), e[L(0x216)] = L(0x1e9), e[M(0x1f5)] = M(0x1fc), e[M(0x1f4)] = L(0x205);
        const f = e;
        return Promise[M(0x1f0)]([
            d[L(0x1fd)](f[M(0x1f6)], f[M(0x200)], {
                'type': sequelize_1[M(0x203)][M(0x219)],
                'references': {
                    'model': f[M(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x201)],
                'onDelete': f[M(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1fd)](f[L(0x214)], f[L(0x200)], {
                'type': sequelize_1[L(0x203)][M(0x219)],
                'references': {
                    'model': f[M(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x201)],
                'onDelete': f[L(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1fd)](f[M(0x215)], f[L(0x200)], {
                'type': sequelize_1[M(0x203)][M(0x219)],
                'references': {
                    'model': f[L(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x201)],
                'onDelete': f[L(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1fd)](f[L(0x210)], f[M(0x200)], {
                'type': sequelize_1[M(0x203)][L(0x219)],
                'references': {
                    'model': f[L(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x201)],
                'onDelete': f[L(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1fd)](f[M(0x216)], f[M(0x200)], {
                'type': sequelize_1[M(0x203)][L(0x219)],
                'references': {
                    'model': f[L(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x201)],
                'onDelete': f[L(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1fd)](f[L(0x1f5)], f[M(0x200)], {
                'type': sequelize_1[L(0x203)][L(0x219)],
                'references': {
                    'model': f[M(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x201)],
                'onDelete': f[L(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1fd)](f[L(0x1f4)], f[L(0x200)], {
                'type': sequelize_1[M(0x203)][M(0x219)],
                'references': {
                    'model': f[L(0x213)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x201)],
                'onDelete': f[M(0x1fa)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0x1f1)] = N(0x1ea), e[O(0x1f7)] = O(0x1f8), e[N(0x1fb)] = O(0x1ed), e[O(0x1f3)] = O(0x212), e[O(0x20b)] = N(0x1f2), e[O(0x1ec)] = O(0x1e9), e[N(0x206)] = O(0x1fc), e[O(0x1eb)] = N(0x205);
        const f = e;
        return Promise[O(0x1f0)]([
            d[N(0x207) + 'mn'](f[O(0x1f1)], f[N(0x1f7)]),
            d[O(0x207) + 'mn'](f[N(0x1fb)], f[N(0x1f7)]),
            d[O(0x207) + 'mn'](f[O(0x1f3)], f[N(0x1f7)]),
            d[N(0x207) + 'mn'](f[O(0x20b)], f[O(0x1f7)]),
            d[O(0x207) + 'mn'](f[N(0x1ec)], f[O(0x1f7)]),
            d[O(0x207) + 'mn'](f[N(0x206)], f[O(0x1f7)]),
            d[O(0x207) + 'mn'](f[N(0x1eb)], f[N(0x1f7)])
        ]);
    }
};