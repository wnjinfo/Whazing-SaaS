'use strict';
function a() {
    const x = [
        '1129010JyUBPF',
        'BmyMz',
        'Esymq',
        'allowNull',
        'sioBq',
        'sequelize',
        'type',
        'iQSEJ',
        '11BncPxb',
        'defineProp',
        '1sXrWvG',
        '797008HpBUmy',
        '715212eXDlRm',
        'CASCADE',
        '332678QJJVIg',
        'ent',
        'khdSO',
        '106323zAiCQi',
        '5YcMAjv',
        '1000089jDEtMw',
        'SET\x20NULL',
        'Groups',
        '31748goLMvZ',
        'Users',
        'exports',
        'autoIncrem',
        'DATE',
        'primaryKey',
        '__esModule',
        'DataTypes',
        'erty',
        'STRING',
        'INTEGER',
        'dropTable',
        '3uUmZXC',
        'createTabl',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1b1)) / (-0x1886 + -0x6ba + 0x1f41) * (parseInt(q(0x1b5)) / (-0x511 + -0x1d87 * -0x1 + -0xa * 0x272)) + -parseInt(q(0x1c9)) / (0x1d3 * -0x5 + 0x1398 + -0xa76) * (parseInt(q(0x1bd)) / (0x9 * -0x276 + 0x1 * -0x1d6a + -0x3394 * -0x1)) + parseInt(p(0x1b9)) / (0x29 * 0x9e + -0x4 * 0x93a + 0xb9f) * (-parseInt(q(0x1b3)) / (0x682 + 0x5 * 0x1f6 + 0x8b * -0x1e)) + parseInt(p(0x1b8)) / (0x1 * 0xf1b + 0x11aa + -0x20be) + parseInt(q(0x1b2)) / (0x918 + 0x169 * 0x5 + -0x4b * 0x37) + -parseInt(p(0x1ba)) / (-0x355 + -0x4b * -0x26 + -0x3e2 * 0x2) + -parseInt(q(0x1cc)) / (0x1e6a + 0x1766 + 0x1ae3 * -0x2) * (-parseInt(q(0x1af)) / (-0x1637 + -0x3 * -0x427 + 0x9cd * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x75c * -0x22 + 0x2d26a + 0x8861));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x139d + 0x5 * -0xf0 + 0x1 * -0xd3f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x1cb)] = !![], Object[r(0x1b0) + s(0x1c5)](exports, s(0x1c3), o);
const sequelize_1 = require(r(0x1d1));
module[r(0x1bf)] = {
    'up': f => {
        const t = s, u = r, g = {};
        g[t(0x1d0)] = t(0x1bc), g[u(0x1b7)] = u(0x1be), g[u(0x1cd)] = u(0x1b4), g[t(0x1ce)] = u(0x1bb);
        const h = g, i = {};
        i[u(0x1d2)] = sequelize_1[t(0x1c4)][t(0x1c7)], i[t(0x1c2)] = !![], i[u(0x1c0) + u(0x1b6)] = !![], i[t(0x1cf)] = ![];
        const j = {};
        return j[t(0x1d2)] = sequelize_1[u(0x1c4)][t(0x1c6)], j[t(0x1cf)] = ![], f[u(0x1ca) + 'e'](h[u(0x1d0)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0x1c4)][u(0x1c7)],
                'references': {
                    'model': h[t(0x1b7)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x1cd)],
                'onDelete': h[u(0x1ce)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1c4)][t(0x1c1)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1c4)][t(0x1c1)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x1ae)] = v(0x1bc);
        const f = e;
        return d[w(0x1c8)](f[v(0x1ae)]);
    }
};