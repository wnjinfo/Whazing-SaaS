'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x20b)) / (0x26b6 + 0x1446 + -0x3afb) + -parseInt(q(0x20d)) / (-0x1 * 0x737 + -0x1 * -0x1a4d + -0x1314) + parseInt(p(0x205)) / (0x1725 + 0x8dd * 0x4 + 0x2 * -0x1d4b) + -parseInt(p(0x1fa)) / (-0x2 * 0x26c + -0xc9d + 0x1179) * (-parseInt(p(0x206)) / (-0xa * -0x1bb + 0x26cd + -0x3816)) + -parseInt(p(0x1f8)) / (-0x1c9d + -0x223e + 0x3ee1) * (-parseInt(p(0x207)) / (-0x205f + -0x8c * 0x3a + 0x1d * 0x236)) + -parseInt(q(0x204)) / (0x5 * -0x206 + -0x1161 * 0x1 + 0x1b87) * (parseInt(p(0x1f6)) / (0x14c7 + -0x5 * -0x2ba + -0x160 * 0x19)) + parseInt(q(0x203)) / (0x6c5 + 0xd15 + -0x13d0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x59eb * 0x13 + 0xe31f * 0x3 + 0xb5737));
const o = {};
o[r(0x1f4)] = !![], Object[s(0x1fb) + s(0x200)](exports, r(0x209), o);
function a() {
    const x = [
        'exports',
        'createTabl',
        'value',
        'FRppW',
        '10323vQwnXB',
        'sequelize',
        '3726cfwBJe',
        'type',
        '4ZzYAhw',
        'defineProp',
        'WmHgm',
        'CASCADE',
        'SfGvC',
        'SET\x20NULL',
        'erty',
        'NZcJb',
        'dropTable',
        '949600zWFGqU',
        '6024PfCdRD',
        '690123dtmyGu',
        '3814495VKWpOT',
        '6195vCExsa',
        'autoIncrem',
        '__esModule',
        'nHVfN',
        '136822lIqCYd',
        'INTEGER',
        '313362EUJTTm',
        'ent',
        'STRING',
        'Groups',
        'DataTypes',
        'Users',
        'DATE',
        'primaryKey',
        'allowNull'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c2f + -0x21b2 + -0x3 * -0x27d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(s(0x1f7));
module[r(0x216)] = {
    'up': f => {
        const t = s, u = s, g = {};
        g[t(0x1f5)] = t(0x210), g[t(0x1fe)] = t(0x212), g[t(0x20a)] = t(0x1fd), g[u(0x201)] = u(0x1ff);
        const h = g, i = {};
        i[u(0x1f9)] = sequelize_1[u(0x211)][t(0x20c)], i[u(0x214)] = !![], i[t(0x208) + u(0x20e)] = !![], i[u(0x215)] = ![];
        const j = {};
        return j[t(0x1f9)] = sequelize_1[t(0x211)][u(0x20f)], j[t(0x215)] = ![], f[u(0x217) + 'e'](h[t(0x1f5)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[u(0x211)][t(0x20c)],
                'references': {
                    'model': h[u(0x1fe)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x20a)],
                'onDelete': h[u(0x201)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x211)][t(0x213)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x211)][t(0x213)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x1fc)] = v(0x210);
        const f = e;
        return d[w(0x202)](f[v(0x1fc)]);
    }
};