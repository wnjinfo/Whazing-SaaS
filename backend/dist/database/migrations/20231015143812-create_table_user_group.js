'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x116)) / (-0x1248 + -0x1 * 0x16ed + 0x2936) * (parseInt(q(0x105)) / (0xf07 * -0x2 + 0x7 * 0x30 + 0x28 * 0xb8)) + -parseInt(q(0x10a)) / (0x1923 + 0xaae + -0x23ce) + -parseInt(q(0x102)) / (0x9eb + 0x1a8a + -0x2471) + parseInt(q(0x111)) / (0x137a + 0x23ba + -0x372f) + parseInt(q(0x103)) / (-0xa7d + -0x146b * 0x1 + 0x1eee) * (-parseInt(p(0x100)) / (-0x2301 + 0x21d + 0x20eb)) + -parseInt(q(0xfc)) / (-0x7a * -0x10 + 0x30 + -0x7c8) * (-parseInt(p(0x109)) / (-0x5 * 0x4d1 + 0x1c97 * -0x1 + 0x34b5)) + -parseInt(p(0xf9)) / (-0x9 * -0x4b + 0x1 * 0x15ac + 0x39 * -0x6d) * (-parseInt(p(0xff)) / (-0x11bd * -0x1 + -0x7cf * 0x2 + -0x214));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x28c1 * 0x31 + 0x504c + 0x7 * -0x24e2));
function a() {
    const x = [
        'cSJvV',
        '6gFJKGx',
        '__esModule',
        'DATE',
        'Users',
        '9JHbKGS',
        '1559055JEWfKm',
        'dropTable',
        'allowNull',
        'type',
        'DataTypes',
        'kQuXq',
        'Groups',
        '882045rXUEHP',
        'HmgCj',
        'CASCADE',
        'erty',
        'sequelize',
        '254593XjqbPx',
        'autoIncrem',
        'INTEGER',
        'ent',
        'defineProp',
        'zUonH',
        'primaryKey',
        'exports',
        '30AbpwFC',
        'UsersGroup',
        'XPsza',
        '2906888TmkDvA',
        'createTabl',
        'value',
        '2367013LVUCSr',
        '14tFceQp',
        'UsersQueue',
        '2577184GryORs',
        '958314MsPBnd'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0xfe)] = !![], Object[r(0xf5) + r(0x114)](exports, s(0x106), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1048 + 0x1 * -0xbc9 + -0x5 * -0x5ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(s(0x115));
module[s(0xf8)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0xf6)] = u(0xfa) + 's', f[t(0x10f)] = t(0x110), f[t(0x104)] = t(0x113), f[t(0xfb)] = t(0x108);
        const g = f, h = {};
        return h[u(0x10d)] = sequelize_1[u(0x10e)][t(0x118)], h[u(0xf7)] = !![], h[t(0x117) + u(0x119)] = !![], h[t(0x10c)] = ![], e[t(0xfd) + 'e'](g[t(0xf6)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x10e)][t(0x118)],
                'references': {
                    'model': g[t(0x10f)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x104)],
                'onDelete': g[t(0x104)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x10e)][u(0x118)],
                'references': {
                    'model': g[t(0xfb)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x104)],
                'onDelete': g[t(0x104)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x10e)][t(0x107)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x10e)][u(0x107)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x112)] = v(0x101) + 's';
        const f = e;
        return d[w(0x10b)](f[w(0x112)]);
    }
};