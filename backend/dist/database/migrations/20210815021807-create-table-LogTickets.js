'use strict';
function a() {
    const B = [
        'allowNull',
        'DATE',
        '6322968YfzmKW',
        'autoIncrem',
        '7oNfCJR',
        '11REEInh',
        'chzjN',
        'LUabG',
        'ent',
        'STRING',
        '7657389uoQwDb',
        '1586444qBOrkB',
        'erty',
        'Users',
        '155xgihCW',
        '10812kOqZZK',
        '__esModule',
        'Tickets',
        'defineProp',
        '1QodsPF',
        'primaryKey',
        'ZyTlw',
        'type',
        'sequelize',
        'value',
        'INTEGER',
        'gDwTu',
        '9009752DJxpll',
        'DataTypes',
        'EoEJd',
        '1710yajfCN',
        'Queues',
        'createTabl',
        'WThQX',
        'dropTable',
        '1677HPpHoI',
        'LogTickets',
        '17022040NVEdbr',
        'exports',
        'CASCADE'
    ];
    a = function () {
        return B;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x101)) / (0x3b * 0x49 + -0xc * 0x25e + 0xb96 * 0x1) * (-parseInt(u(0x121)) / (0xeeb + -0x55e + -0x98b)) + parseInt(t(0x111)) / (0xc * -0xce + 0x1bc3 + -0x182 * 0xc) * (-parseInt(u(0x125)) / (0x1c50 + 0x17c5 + -0x3411)) + -parseInt(t(0x124)) / (0x1c9e + -0x456 + -0x1843) * (-parseInt(u(0x10c)) / (0x2413 + -0x2249 + 0x1c4 * -0x1)) + -parseInt(t(0x11a)) / (0xa79 * -0x1 + 0x1f37 + -0x14b7) * (-parseInt(u(0x109)) / (-0x1737 + 0xaf * 0x39 + -0xfb8)) + parseInt(u(0x120)) / (0x3 * -0x485 + 0x6b5 * -0x4 + 0x286c) + -parseInt(u(0x113)) / (-0x16ee * -0x1 + -0x1989 + 0x2a5) * (-parseInt(t(0x11b)) / (0x1 * -0x2528 + 0x1d59 * -0x1 + 0x2 * 0x2146)) + -parseInt(u(0x118)) / (0x10d6 + 0x221d + -0x32e7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8ed * -0x242 + -0x3 * -0x29f39 + 0x1a907 * -0x9));
const s = {};
s[v(0x106)] = !![], Object[w(0x128) + v(0x122)](exports, v(0x126), s);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x261a + -0x59 * 0x41 + 0x4 * -0x3a0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(w(0x105));
module[v(0x114)] = {
    'up': e => {
        const x = w, y = v, f = {};
        f[x(0x108)] = x(0x112), f[y(0x10b)] = x(0x123), f[y(0x11c)] = y(0x115), f[y(0x10f)] = y(0x127), f[y(0x103)] = y(0x10d);
        const g = f, h = {};
        return h[x(0x104)] = sequelize_1[y(0x10a)][x(0x107)], h[y(0x119) + y(0x11e)] = !![], h[x(0x102)] = !![], h[x(0x116)] = ![], e[y(0x10e) + 'e'](g[x(0x108)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0x10a)][y(0x107)],
                'references': {
                    'model': g[y(0x10b)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x11c)],
                'onDelete': g[x(0x11c)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0x10a)][y(0x107)],
                'references': {
                    'model': g[x(0x10f)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x11c)],
                'onDelete': g[x(0x11c)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0x10a)][x(0x107)],
                'references': {
                    'model': g[x(0x103)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x11c)],
                'onDelete': g[y(0x11c)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[y(0x10a)][y(0x11f)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x10a)][x(0x117)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x10a)][y(0x117)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x11d)] = z(0x112);
        const f = e;
        return d[z(0x110)](f[z(0x11d)]);
    }
};