'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xa1)) / (-0x53 * -0x3 + 0x13ef + -0x14e7) + -parseInt(p(0x8d)) / (-0x21b0 + 0xb16 + 0x169c * 0x1) + parseInt(p(0x82)) / (0x5f0 + -0x2554 + 0x1f67) * (-parseInt(p(0x9a)) / (0x1dca + 0x11a8 + -0x2f6e)) + -parseInt(p(0x86)) / (0x7a1 + -0x1 * -0x991 + -0x112d * 0x1) + -parseInt(q(0x7f)) / (-0xc * 0x93 + 0x66 * -0x3d + -0x534 * -0x6) * (-parseInt(p(0x9d)) / (0x1645 + 0xc * 0x31 + 0x2 * -0xc45)) + parseInt(q(0x8f)) / (-0x14d * -0x2 + 0xe1 * -0x19 + 0x1367 * 0x1) + parseInt(p(0x9c)) / (-0x25df + -0x17 * -0x2 + 0x25ba) * (parseInt(p(0x9e)) / (0x1 * -0xe37 + 0x1 * -0xfac + 0x1ded));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x578dc + -0xbc5 * 0x17 + 0x29a9 * 0x16));
function a() {
    const x = [
        'value',
        'UsersQueue',
        'VNYgl',
        'DATE',
        'eIGgW',
        '659740MsENui',
        'sequelize',
        '1367832YxofPF',
        'erty',
        'DataTypes',
        'CASCADE',
        'defineProp',
        'Users',
        'createTabl',
        'exports',
        'type',
        'DPzJv',
        'UsersGroup',
        '46280ZuKBzB',
        'autoIncrem',
        '7884qUFLvT',
        '28cGflaL',
        '7790BZBsby',
        '__esModule',
        'INTEGER',
        '569539IIiqfv',
        'allowNull',
        '213456TJGltL',
        'ZTStB',
        'NjKPX',
        '15ZNvgvL',
        'dropTable',
        'primaryKey',
        'Groups',
        '3267775KZKgQI',
        'ent'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3ce * 0x2 + 0x2245 + -0x2962);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x88)] = !![], Object[r(0x93) + s(0x90)](exports, s(0x9f), o);
const sequelize_1 = require(s(0x8e));
module[r(0x96)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x8c)] = t(0x99) + 's', f[t(0x81)] = t(0x85), f[t(0x80)] = u(0x92), f[u(0x98)] = u(0x94);
        const g = f, h = {};
        return h[t(0x97)] = sequelize_1[t(0x91)][u(0xa0)], h[t(0x84)] = !![], h[t(0x9b) + u(0x87)] = !![], h[t(0xa2)] = ![], e[u(0x95) + 'e'](g[u(0x8c)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x91)][u(0xa0)],
                'references': {
                    'model': g[t(0x81)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x80)],
                'onDelete': g[t(0x80)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x91)][t(0xa0)],
                'references': {
                    'model': g[u(0x98)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x80)],
                'onDelete': g[u(0x80)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x91)][t(0x8b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x91)][u(0x8b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x8a)] = w(0x89) + 's';
        const f = e;
        return d[v(0x83)](f[w(0x8a)]);
    }
};