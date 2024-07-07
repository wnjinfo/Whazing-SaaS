'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x1a6)) / (0x1 * 0x20f9 + 0xec8 + -0x2fc0) * (-parseInt(H(0x1b8)) / (0x1 * -0x782 + 0xec7 + 0x8f * -0xd)) + parseInt(I(0x1c6)) / (0x1a * -0xd6 + -0x2335 * -0x1 + -0x1 * 0xd76) * (-parseInt(H(0x1b3)) / (-0x1f05 * 0x1 + 0x26fd + -0x7f4)) + parseInt(H(0x1c5)) / (0x7 * -0x16b + 0x278 * 0xd + -0x1626) * (parseInt(I(0x1a4)) / (-0xe20 + 0x250c * -0x1 + -0x1 * -0x3332)) + -parseInt(H(0x1bd)) / (0x1 * -0x115f + -0x1 * 0x2650 + 0x37b6) * (-parseInt(I(0x1b4)) / (0x1215 + 0x1739 + -0x496 * 0x9)) + parseInt(H(0x1b9)) / (0x2 * 0xf35 + 0x2522 + 0x1681 * -0x3) + parseInt(I(0x1b0)) / (0x2b * 0x19 + 0x5e * -0x28 + 0xa87) * (parseInt(H(0x1ba)) / (0x329 + 0x854 * -0x3 + 0x137 * 0x12)) + -parseInt(H(0x1a9)) / (0x16 * 0x18d + 0x1c9e + 0x44 * -0xec);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15c5 * -0x1 + -0x234a9 + 0x4e9de));
const G = {};
function a() {
    const P = [
        'FKYxr',
        'value',
        'WvlNm',
        'HDeDI',
        'INTEGER',
        'oFhVM',
        'Tickets',
        'fnayu',
        'exports',
        '__esModule',
        'lhavv',
        'nvlio',
        'AutoReply',
        'removeColu',
        'Settings',
        'zlPZT',
        'eQdum',
        '138dtUhww',
        'DataTypes',
        '43787BLCkyA',
        'yxuCu',
        'CASCADE',
        '7458408vlmWgd',
        'Contacts',
        'xpeHr',
        'DGTEW',
        'FNFls',
        'tenantId',
        'WSjwq',
        '1653350LxPFNy',
        'CPwjs',
        'restrict',
        '68RHczxQ',
        '8iINPOQ',
        'sequelize',
        'addColumn',
        'SsDwb',
        '2ebyZJv',
        '2296359jsweeG',
        '11ImGXpa',
        'all',
        'gkCiy',
        '2228317QgUaCP',
        'Whatsapps',
        'Queues',
        'jDUrl',
        'defineProp',
        'erty',
        'Tenants',
        'Users',
        '58845SZzPHK',
        '30405wziboJ',
        'VSBjf'
    ];
    a = function () {
        return P;
    };
    return a();
}
G[J(0x1c9)] = !![], Object[K(0x1c1) + J(0x1c2)](exports, J(0x19c), G);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1607 + -0x6f * 0x47 + 0xa59);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(J(0x1b5));
module[K(0x19b)] = {
    'up': d => {
        const L = J, M = J, e = {};
        e[L(0x19d)] = L(0x199), e[M(0x1ad)] = L(0x1ae), e[M(0x19e)] = L(0x1c3), e[L(0x19a)] = M(0x1a8), e[M(0x1a2)] = L(0x1b2), e[M(0x1ca)] = L(0x1aa), e[M(0x1a7)] = M(0x1bf), e[M(0x1a3)] = M(0x1a1), e[L(0x1ac)] = M(0x19f), e[M(0x1ab)] = L(0x1c4), e[L(0x1c0)] = M(0x1be);
        const f = e;
        return Promise[L(0x1bb)]([
            d[M(0x1b6)](f[M(0x19d)], f[M(0x1ad)], {
                'type': sequelize_1[M(0x1a5)][M(0x197)],
                'references': {
                    'model': f[M(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x19a)],
                'onDelete': f[L(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1b6)](f[L(0x1ca)], f[L(0x1ad)], {
                'type': sequelize_1[L(0x1a5)][L(0x197)],
                'references': {
                    'model': f[L(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x19a)],
                'onDelete': f[M(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1b6)](f[L(0x1a7)], f[L(0x1ad)], {
                'type': sequelize_1[M(0x1a5)][M(0x197)],
                'references': {
                    'model': f[L(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x19a)],
                'onDelete': f[L(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1b6)](f[M(0x1a3)], f[L(0x1ad)], {
                'type': sequelize_1[L(0x1a5)][M(0x197)],
                'references': {
                    'model': f[M(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x19a)],
                'onDelete': f[M(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1b6)](f[M(0x1ac)], f[M(0x1ad)], {
                'type': sequelize_1[L(0x1a5)][M(0x197)],
                'references': {
                    'model': f[L(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x19a)],
                'onDelete': f[M(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1b6)](f[M(0x1ab)], f[M(0x1ad)], {
                'type': sequelize_1[L(0x1a5)][M(0x197)],
                'references': {
                    'model': f[L(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x19a)],
                'onDelete': f[M(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1b6)](f[M(0x1c0)], f[L(0x1ad)], {
                'type': sequelize_1[L(0x1a5)][M(0x197)],
                'references': {
                    'model': f[L(0x19e)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x19a)],
                'onDelete': f[M(0x1a2)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = J, O = K, e = {};
        e[N(0x1c7)] = N(0x199), e[O(0x198)] = O(0x1ae), e[O(0x1bc)] = O(0x1aa), e[O(0x1af)] = N(0x1bf), e[N(0x1c8)] = O(0x1a1), e[N(0x1b1)] = O(0x19f), e[N(0x1b7)] = O(0x1c4), e[O(0x1cb)] = N(0x1be);
        const f = e;
        return Promise[O(0x1bb)]([
            d[N(0x1a0) + 'mn'](f[N(0x1c7)], f[N(0x198)]),
            d[N(0x1a0) + 'mn'](f[O(0x1bc)], f[O(0x198)]),
            d[O(0x1a0) + 'mn'](f[O(0x1af)], f[N(0x198)]),
            d[N(0x1a0) + 'mn'](f[O(0x1c8)], f[O(0x198)]),
            d[N(0x1a0) + 'mn'](f[O(0x1b1)], f[O(0x198)]),
            d[N(0x1a0) + 'mn'](f[O(0x1b7)], f[N(0x198)]),
            d[N(0x1a0) + 'mn'](f[N(0x1cb)], f[N(0x198)])
        ]);
    }
};