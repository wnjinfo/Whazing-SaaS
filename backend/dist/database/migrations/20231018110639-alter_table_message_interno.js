'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1da)) / (-0x8f1 * 0x4 + -0x452 + 0x2817) * (parseInt(n(0x1ec)) / (-0xa13 + 0x47 * 0x1d + -0x1d * -0x12)) + parseInt(n(0x1e2)) / (0x1f2 * 0x13 + -0x1 * -0x1129 + -0x361c) * (-parseInt(o(0x1e4)) / (0x1 * 0x213b + 0x83 * -0x46 + 0x29b)) + -parseInt(n(0x1ea)) / (0xd * -0x56 + -0x12 + -0x475 * -0x1) + parseInt(o(0x1f6)) / (0x1 * -0x1b7f + -0x2f6 + 0x1e7b) + -parseInt(o(0x1e5)) / (0x792 + 0x2331 + 0x223 * -0x14) * (parseInt(n(0x1f3)) / (0x1ae9 + -0xb * -0x358 + 0x1 * -0x3fa9)) + parseInt(o(0x1f1)) / (-0x19e1 + -0xc92 + 0x267c) * (-parseInt(o(0x1d4)) / (-0x1767 + 0x16 * -0xef + 0x2bfb)) + parseInt(n(0x1f7)) / (0xbf * -0x27 + 0x329 * -0x9 + -0x1 * -0x3995) * (parseInt(o(0x1f9)) / (0x8 * 0xda + 0x22b6 + 0x1 * -0x297a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x4a5d0 + -0x9fa32 + 0x194825 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x108 + 0x525 + 0x87e * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x1cf)] = !![], Object[p(0x1e1) + p(0x1e0)](exports, p(0x1eb), m);
function a() {
    const v = [
        'yDCyj',
        'sequelize',
        'Users',
        'QHzBU',
        '86382AEwQmc',
        'ssage',
        '28344RlOnYM',
        'changeColu',
        'dHPso',
        '4798794cwvIqg',
        '6589VCHEIV',
        'InternalMe',
        '101628sRpMAM',
        'hAXqn',
        'value',
        'Groups',
        'vrDKD',
        'CASCADE',
        'GTfKs',
        '1450vQBtwf',
        'fjxvL',
        'receiverId',
        'DataTypes',
        'mfWIE',
        'hOuFE',
        '2QPJFJn',
        'vIbUM',
        'SET\x20NULL',
        'volQO',
        'exports',
        'INTEGER',
        'erty',
        'defineProp',
        '3esKFBA',
        'Rmivx',
        '5249988PZSaZo',
        '2149uwKVzd',
        'all',
        'BdGUI',
        'Kafnv',
        'groupId',
        '5381175tvPplQ',
        '__esModule',
        '306184eUIMvN'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x1ee));
module[p(0x1de)] = {
    'up': d => {
        const r = q, s = p, e = {};
        e[r(0x1ed)] = r(0x1f8) + r(0x1f2), e[s(0x1d8)] = s(0x1e9), e[s(0x1d9)] = r(0x1d0), e[s(0x1fa)] = s(0x1d2), e[r(0x1e8)] = r(0x1d6), e[r(0x1e7)] = r(0x1ef), e[s(0x1e3)] = r(0x1dc);
        const f = e;
        return Promise[s(0x1e6)]([
            d[s(0x1f4) + 'mn'](f[s(0x1ed)], f[r(0x1d8)], {
                'type': sequelize_1[r(0x1d7)][s(0x1df)],
                'references': {
                    'model': f[r(0x1d9)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1fa)],
                'onDelete': f[s(0x1fa)],
                'allowNull': !![]
            }),
            d[s(0x1f4) + 'mn'](f[r(0x1ed)], f[r(0x1e8)], {
                'type': sequelize_1[r(0x1d7)][r(0x1df)],
                'references': {
                    'model': f[s(0x1e7)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1fa)],
                'onDelete': f[s(0x1e3)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x1dd)] = t(0x1f8) + u(0x1f2), e[u(0x1d1)] = t(0x1e9), e[u(0x1f0)] = u(0x1d0), e[u(0x1d5)] = t(0x1d2), e[u(0x1d3)] = u(0x1d6), e[t(0x1f5)] = t(0x1ef), e[t(0x1db)] = t(0x1dc);
        const f = e;
        return Promise[t(0x1e6)]([
            d[t(0x1f4) + 'mn'](f[u(0x1dd)], f[t(0x1d1)], {
                'type': sequelize_1[u(0x1d7)][u(0x1df)],
                'references': {
                    'model': f[u(0x1f0)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x1d5)],
                'onDelete': f[t(0x1d5)],
                'allowNull': !![]
            }),
            d[t(0x1f4) + 'mn'](f[t(0x1dd)], f[u(0x1d3)], {
                'type': sequelize_1[t(0x1d7)][u(0x1df)],
                'references': {
                    'model': f[u(0x1f5)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x1d5)],
                'onDelete': f[t(0x1db)],
                'allowNull': !![]
            })
        ]);
    }
};