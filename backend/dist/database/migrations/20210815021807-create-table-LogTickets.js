'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbd2 + 0xa * 0xb + 0x1 * 0xc87);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x129)) / (0x1c2e + -0x1 * 0x225b + 0x62e) + -parseInt(u(0x147)) / (0xf26 + 0x16 * -0xa9 + -0x9e) + parseInt(u(0x132)) / (0x9c0 + 0x2288 + -0x2c45) + parseInt(u(0x140)) / (-0x19 * 0x136 + -0x13 * 0x11 + 0x1f8d) * (parseInt(u(0x128)) / (0x322 * -0xb + -0x1 * -0x875 + 0x1a06)) + -parseInt(t(0x146)) / (-0x1b * 0x11d + -0x3 * -0x5c7 + 0xcc0) + parseInt(u(0x144)) / (-0x129b * -0x1 + 0x297 * 0xa + 0x1 * -0x2c7a) * (-parseInt(t(0x13d)) / (0x1f * -0xab + 0xaa4 + -0xa19 * -0x1)) + parseInt(u(0x131)) / (-0x251 * 0xd + -0x8fc * 0x2 + 0x301e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x40fba + 0xd936 * 0xd + 0x4816c));
function a() {
    const B = [
        'Tickets',
        '441300lHZUfx',
        '663893cTUrUW',
        'STRING',
        'Queues',
        'defineProp',
        'sequelize',
        'createTabl',
        'value',
        'jmsvF',
        '19210104Kydksj',
        '3526254lqRBdv',
        'ent',
        'pRmFe',
        'LogTickets',
        'allowNull',
        'wnAHb',
        'DataTypes',
        'DATE',
        'autoIncrem',
        'gAaaC',
        '__esModule',
        '2211208DqlFOG',
        'CASCADE',
        'type',
        '24OEqPHt',
        'primaryKey',
        'EEllO',
        'exports',
        '35EmqYbR',
        'Users',
        '4928610VfTIUy',
        '440234Qrobdh',
        'INTEGER',
        'CCGbs',
        'erty',
        'dropTable'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
s[v(0x12f)] = !![], Object[w(0x12c) + v(0x125)](exports, w(0x13c), s);
const sequelize_1 = require(w(0x12d));
module[v(0x143)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x13b)] = y(0x135), f[y(0x134)] = y(0x145), f[x(0x137)] = y(0x13e), f[x(0x142)] = y(0x127), f[x(0x130)] = y(0x12b);
        const g = f, h = {};
        return h[x(0x13f)] = sequelize_1[y(0x138)][x(0x123)], h[x(0x13a) + x(0x133)] = !![], h[y(0x141)] = !![], h[x(0x136)] = ![], e[y(0x12e) + 'e'](g[y(0x13b)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0x138)][y(0x123)],
                'references': {
                    'model': g[y(0x134)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x137)],
                'onDelete': g[y(0x137)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0x138)][y(0x123)],
                'references': {
                    'model': g[x(0x142)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x137)],
                'onDelete': g[y(0x137)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[x(0x138)][y(0x123)],
                'references': {
                    'model': g[x(0x130)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x137)],
                'onDelete': g[y(0x137)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[y(0x138)][y(0x12a)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x138)][x(0x139)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x138)][y(0x139)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x124)] = A(0x135);
        const f = e;
        return d[z(0x126)](f[z(0x124)]);
    }
};