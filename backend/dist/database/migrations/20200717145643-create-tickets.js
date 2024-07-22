'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5d9 * -0x3 + -0x7cf + 0x3c7 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x134)) / (0x13f9 + 0x8 * 0x20a + 0x2 * -0x1224) + parseInt(t(0x130)) / (-0x1 * 0x1093 + -0x1 * 0x200a + 0x309f) + -parseInt(t(0x13d)) / (0xea8 * 0x2 + 0x8 * 0x2a4 + -0x326d * 0x1) + -parseInt(u(0x13b)) / (0x15e + 0x2 * 0x468 + -0x515 * 0x2) + -parseInt(u(0x121)) / (-0x1e17 + -0x25a1 + -0x1 * -0x43bd) + -parseInt(t(0x13a)) / (0x15c4 + 0xa90 + -0x204e) * (-parseInt(t(0x128)) / (0x300 * -0x1 + -0x2623 + -0x1 * -0x292a)) + -parseInt(u(0x138)) / (-0x2346 + 0x1 * -0x1f3f + 0x428d) * (-parseInt(t(0x12d)) / (0x193d + 0x191c + -0x14 * 0x284));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb918a + -0x3539 + -0x51bec));
const s = {};
s[v(0x13c)] = !![], Object[w(0x125) + v(0x129)](exports, w(0x122), s);
function a() {
    const B = [
        '1050224UTHRaX',
        'dropTable',
        'STRING',
        'primaryKey',
        '126454VacbZj',
        'DATE',
        'YaQNJ',
        'nXfLp',
        '7636744NXdvqu',
        'NUUXT',
        '1153518vSoSmY',
        '1871988OudbJz',
        'value',
        '1967892GzCJwR',
        'Contacts',
        'czuKv',
        'pending',
        'FFngb',
        'exports',
        'Tickets',
        'type',
        'createTabl',
        'autoIncrem',
        'CASCADE',
        '1020475NImrqe',
        '__esModule',
        'Users',
        'SET\x20NULL',
        'defineProp',
        'OcyqG',
        'DataTypes',
        '14ceNdsJ',
        'erty',
        'sequelize',
        'ent',
        'toJWU',
        '9AOwMXK',
        'allowNull',
        'INTEGER'
    ];
    a = function () {
        return B;
    };
    return a();
}
const sequelize_1 = require(w(0x12a));
module[v(0x11b)] = {
    'up': e => {
        const x = w, y = w, f = {};
        f[x(0x118)] = x(0x11c), f[y(0x139)] = x(0x119), f[y(0x126)] = y(0x117), f[y(0x137)] = y(0x120), f[x(0x136)] = x(0x123), f[x(0x12c)] = y(0x124);
        const g = f, h = {};
        return h[y(0x11d)] = sequelize_1[y(0x127)][y(0x12f)], h[x(0x11f) + x(0x12b)] = !![], h[x(0x133)] = !![], h[x(0x12e)] = ![], e[x(0x11e) + 'e'](g[y(0x118)], {
            'id': h,
            'status': {
                'type': sequelize_1[y(0x127)][x(0x132)],
                'defaultValue': g[y(0x139)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0x127)][y(0x132)] },
            'contactId': {
                'type': sequelize_1[y(0x127)][x(0x12f)],
                'references': {
                    'model': g[x(0x126)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x137)],
                'onDelete': g[y(0x137)]
            },
            'userId': {
                'type': sequelize_1[x(0x127)][y(0x12f)],
                'references': {
                    'model': g[y(0x136)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x137)],
                'onDelete': g[x(0x12c)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x127)][x(0x135)](-0x15ca + 0x21b7 + -0xb * 0x115),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x127)][x(0x135)](0x5da + 0x231e + 0x3 * -0xda6),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x11a)] = z(0x11c);
        const f = e;
        return d[z(0x131)](f[z(0x11a)]);
    }
};