'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xfb)) / (-0x1561 + 0x1fc9 + -0x1 * 0xa67) * (-parseInt(u(0xfe)) / (0x226a + 0x2a0 + 0x18 * -0x18b)) + -parseInt(u(0xfa)) / (-0x1763 + 0x2498 + -0x233 * 0x6) * (parseInt(t(0x115)) / (-0x2 * -0x16f + -0xd2 * 0x2 + 0x1 * -0x136)) + parseInt(u(0xff)) / (0x165d + -0x74c * 0x2 + -0x7c0) * (-parseInt(t(0x10e)) / (0x122b * 0x1 + 0x17 * 0x76 + 0x1cbf * -0x1)) + -parseInt(t(0x109)) / (0x7ba + -0x18d7 + -0x449 * -0x4) + parseInt(u(0x106)) / (-0x120b + -0x1cfd + 0x3 * 0xfb0) + parseInt(t(0xfd)) / (-0xe3b + 0xed * 0x26 + -0x14ea) + parseInt(t(0x100)) / (0xa21 + -0xc27 + -0xb * -0x30);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2bc16 * -0x3 + 0x89d2e * 0x1 + -0x86fa9));
function a() {
    const B = [
        '5183072luIvmS',
        'STRING',
        'GyyIO',
        '796656MkIbeb',
        'INTEGER',
        'createTabl',
        'DATE',
        'exports',
        '4141776GzMrjn',
        'dropTable',
        'ent',
        'esByN',
        'type',
        'erty',
        'allowNull',
        '328484ZggTzF',
        'defineProp',
        'autoIncrem',
        'CASCADE',
        'xxKjY',
        'DataTypes',
        'primaryKey',
        'value',
        'Users',
        'sequelize',
        '36FMVdJk',
        '276852QzSZRB',
        '__esModule',
        '4643343TrRCNq',
        '6xeTEbJ',
        '5bbriMr',
        '3445080htlnEA',
        'sKbxw',
        'AutoReply',
        'defaultVal',
        'SET\x20NULL',
        'ePbSV'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1cf * -0x10 + -0x238d + 0x78f);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0xf7)] = !![], Object[w(0x116) + w(0x113)](exports, v(0xfc), s);
const sequelize_1 = require(w(0xf9));
module[v(0x10d)] = {
    'up': h => {
        const x = v, y = w, i = {};
        i[x(0x108)] = y(0x102), i[y(0x111)] = y(0xf8), i[x(0x105)] = x(0xf3), i[x(0xf4)] = y(0x104);
        const j = i, k = {};
        k[y(0x112)] = sequelize_1[y(0xf5)][y(0x10a)], k[x(0xf2) + y(0x110)] = !![], k[y(0xf6)] = !![], k[x(0x114)] = ![];
        const l = {};
        l[y(0x112)] = sequelize_1[x(0xf5)][x(0x107)], l[y(0x114)] = ![];
        const m = {};
        m[y(0x112)] = sequelize_1[y(0xf5)][y(0x107)], m[x(0x114)] = ![];
        const n = {};
        return n[y(0x112)] = sequelize_1[x(0xf5)][x(0x10a)], n[x(0x114)] = ![], n[y(0x103) + 'ue'] = 0x0, h[x(0x10b) + 'e'](j[y(0x108)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[y(0xf5)][y(0x10a)],
                'references': {
                    'model': j[y(0x111)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x105)],
                'onDelete': j[y(0xf4)]
            },
            'createdAt': {
                'type': sequelize_1[x(0xf5)][x(0x10c)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xf5)][y(0x10c)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x101)] = A(0x102);
        const f = e;
        return d[A(0x10f)](f[A(0x101)]);
    }
};