'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x122)) / (0x34 * -0x8 + -0x1 * 0x1387 + 0x1528) * (parseInt(H(0x14a)) / (-0x3 * -0xcd7 + -0xd5a + -0x1929)) + parseInt(H(0x14f)) / (-0x978 + 0x1 * 0xe45 + 0x2 * -0x265) * (parseInt(I(0x13c)) / (0x1835 + -0x1d * -0x136 + -0x3b4f)) + -parseInt(I(0x141)) / (-0xe96 + 0x1 * -0x120b + 0x1 * 0x20a6) * (-parseInt(I(0x14e)) / (-0x2323 + 0x5b4 + 0x1d75)) + -parseInt(I(0x137)) / (-0x2 * 0x79a + -0x79d * 0x1 + 0x158 * 0x11) + parseInt(H(0x123)) / (-0x167 + -0x81a + 0x989) + parseInt(H(0x13d)) / (0x7d * -0x29 + 0xaf4 + 0x91a) + parseInt(H(0x14d)) / (-0x4 * -0x8a9 + 0x2127 + -0x43c1) * (-parseInt(H(0x144)) / (0x1 * -0x1bb6 + 0x23bc + -0x7fb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x17319 + 0x1fbd + -0x48898 * -0x4));
const G = {};
G[J(0x131)] = !![], Object[K(0x12d) + J(0x121)](exports, K(0x147), G);
const sequelize_1 = require(K(0x14b));
module[J(0x13b)] = {
    'up': d => {
        const L = J, M = K, e = {};
        e[L(0x13f)] = L(0x134), e[M(0x146)] = L(0x129), e[M(0x150)] = L(0x130), e[M(0x140)] = M(0x13e), e[L(0x12b)] = L(0x125), e[M(0x135)] = L(0x132), e[M(0x148)] = M(0x120), e[M(0x139)] = M(0x11f), e[L(0x12a)] = L(0x142), e[M(0x12e)] = L(0x149), e[M(0x138)] = M(0x14c);
        const f = e;
        return Promise[L(0x143)]([
            d[M(0x127)](f[L(0x13f)], f[M(0x146)], {
                'type': sequelize_1[L(0x145)][L(0x136)],
                'references': {
                    'model': f[L(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x140)],
                'onDelete': f[L(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x127)](f[L(0x135)], f[M(0x146)], {
                'type': sequelize_1[L(0x145)][M(0x136)],
                'references': {
                    'model': f[M(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x140)],
                'onDelete': f[M(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x127)](f[M(0x148)], f[L(0x146)], {
                'type': sequelize_1[L(0x145)][M(0x136)],
                'references': {
                    'model': f[M(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x140)],
                'onDelete': f[L(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x127)](f[M(0x139)], f[M(0x146)], {
                'type': sequelize_1[L(0x145)][M(0x136)],
                'references': {
                    'model': f[M(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x140)],
                'onDelete': f[L(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x127)](f[M(0x12a)], f[M(0x146)], {
                'type': sequelize_1[M(0x145)][M(0x136)],
                'references': {
                    'model': f[L(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x140)],
                'onDelete': f[M(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x127)](f[M(0x12e)], f[M(0x146)], {
                'type': sequelize_1[M(0x145)][M(0x136)],
                'references': {
                    'model': f[M(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x140)],
                'onDelete': f[M(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x127)](f[M(0x138)], f[M(0x146)], {
                'type': sequelize_1[L(0x145)][L(0x136)],
                'references': {
                    'model': f[M(0x150)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x140)],
                'onDelete': f[M(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0x124)] = O(0x134), e[O(0x133)] = N(0x129), e[N(0x128)] = N(0x132), e[N(0x11d)] = N(0x120), e[N(0x11e)] = O(0x11f), e[N(0x13a)] = O(0x142), e[O(0x12f)] = O(0x149), e[N(0x126)] = O(0x14c);
        const f = e;
        return Promise[O(0x143)]([
            d[O(0x12c) + 'mn'](f[O(0x124)], f[N(0x133)]),
            d[O(0x12c) + 'mn'](f[N(0x128)], f[N(0x133)]),
            d[N(0x12c) + 'mn'](f[N(0x11d)], f[O(0x133)]),
            d[N(0x12c) + 'mn'](f[N(0x11e)], f[N(0x133)]),
            d[N(0x12c) + 'mn'](f[N(0x13a)], f[O(0x133)]),
            d[N(0x12c) + 'mn'](f[O(0x12f)], f[O(0x133)]),
            d[N(0x12c) + 'mn'](f[N(0x126)], f[N(0x133)])
        ]);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2d1 * -0x7 + -0x1b10 + 0x876);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        '55LkAOnq',
        'DataTypes',
        'ramZS',
        '__esModule',
        'golYj',
        'Users',
        '1362IesRlZ',
        'sequelize',
        'Whatsapps',
        '372030trvJxx',
        '18WLLziO',
        '1077OtjeeT',
        'aduwy',
        'VPpEs',
        'oCCeH',
        'Settings',
        'Queues',
        'erty',
        '1117DOnfRM',
        '1277864QiIpNw',
        'paQSx',
        'restrict',
        'lkYes',
        'addColumn',
        'VtjIU',
        'tenantId',
        'GLHdW',
        'TEyqg',
        'removeColu',
        'defineProp',
        'nDgti',
        'JAJHv',
        'Tenants',
        'value',
        'Contacts',
        'Akwyx',
        'Tickets',
        'YiQrm',
        'INTEGER',
        '4031405JWFdnN',
        'HmJXl',
        'vPkWN',
        'OZVrt',
        'exports',
        '7856mgfiDA',
        '10262340VIHNhY',
        'CASCADE',
        'lCWFx',
        'HEcMq',
        '715180cKZPQj',
        'AutoReply',
        'all'
    ];
    a = function () {
        return P;
    };
    return a();
}