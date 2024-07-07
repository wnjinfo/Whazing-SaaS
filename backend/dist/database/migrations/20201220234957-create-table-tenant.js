'use strict';
const r = b, s = b;
function a() {
    const x = [
        '2631675YBOWKd',
        '284wuHZcW',
        '__esModule',
        '18prVFUs',
        '5881CYGAxA',
        '464680nmZqqr',
        'bxbaO',
        'sequelize',
        'type',
        'active',
        'Tenants',
        '1945273RcDoIi',
        'YJtPA',
        'INTEGER',
        'OcmmS',
        'createTabl',
        '25mxFRpU',
        '672078wubsed',
        'STRING',
        'allowNull',
        'sgHir',
        'CASCADE',
        '2147810pimYFR',
        'value',
        'DataTypes',
        'ent',
        'defineProp',
        'exports',
        'ABPoT',
        'Users',
        'NDvEO',
        'dropTable',
        'autoIncrem',
        'DATE',
        'erty',
        'primaryKey',
        '5039772ZvJBYe',
        'restrict',
        '30WNneEp'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d3)) / (-0x76 * 0x51 + -0x3 * -0xa9f + 0x57a) * (-parseInt(q(0x1d0)) / (-0x56f + 0x2 * -0x931 + 0x17d3)) + parseInt(p(0x1cf)) / (-0xf7a + -0x51d + -0x12 * -0x125) + -parseInt(q(0x1cc)) / (-0x5 * -0x1b7 + 0x32 * 0x47 + -0x166d) + -parseInt(p(0x1df)) / (-0x1aa8 + -0x1 * 0xb7f + -0x2 * -0x1316) * (-parseInt(q(0x1e0)) / (0x8f * 0x37 + 0x1a7f + -0x2 * 0x1c99)) + parseInt(p(0x1be)) / (-0x29f * -0x9 + -0xa9 * -0x28 + -0x18 * 0x215) + -parseInt(p(0x1d4)) / (-0x2106 + -0x409 + 0xf * 0x279) * (parseInt(p(0x1d2)) / (0x1cd4 + -0x20b6 + 0x3eb)) + parseInt(p(0x1ce)) / (0x4 * -0x794 + -0x926 * -0x1 + 0x1534) * (-parseInt(p(0x1da)) / (0x7 * 0x36d + 0xa1 * -0x39 + 0xbe9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f * 0x1325 + 0x16b7f * 0x1 + 0xec030));
const o = {};
o[r(0x1bf)] = !![], Object[r(0x1c2) + s(0x1ca)](exports, s(0x1d1), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x117a + -0xd * -0x2ea + -0x12ae);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(r(0x1d6));
module[s(0x1c3)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x1c4)] = t(0x1d9), f[u(0x1d5)] = u(0x1d8), f[t(0x1c6)] = t(0x1c5), f[t(0x1db)] = t(0x1bd), f[t(0x1bc)] = u(0x1cd);
        const g = f, h = {};
        return h[t(0x1d7)] = sequelize_1[t(0x1c0)][t(0x1dc)], h[u(0x1c8) + u(0x1c1)] = !![], h[t(0x1cb)] = !![], h[u(0x1bb)] = ![], e[u(0x1de) + 'e'](g[u(0x1c4)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x1c0)][t(0x1ba)],
                'defaultValue': g[t(0x1d5)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[u(0x1c0)][u(0x1dc)],
                'references': {
                    'model': g[u(0x1c6)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x1db)],
                'onDelete': g[t(0x1bc)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1c0)][t(0x1c9)](-0x404 * 0x4 + 0x12db * 0x1 + -0x2c5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1c0)][u(0x1c9)](0x1f27 + -0xcc9 * 0x2 + -0x58f * 0x1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x1dd)] = v(0x1d9);
        const f = e;
        return d[v(0x1c7)](f[w(0x1dd)]);
    }
};