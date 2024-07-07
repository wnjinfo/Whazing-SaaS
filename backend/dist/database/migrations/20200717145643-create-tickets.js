'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x107)) / (0x1be5 * -0x1 + 0x13c3 + 0x823) * (-parseInt(t(0x106)) / (0x15 * 0x75 + -0x1d11 + -0x67e * -0x3)) + parseInt(u(0x103)) / (-0x9f9 + -0xcbe + 0x16ba) + parseInt(u(0x109)) / (-0xf7e + 0x42d + 0xb55 * 0x1) * (-parseInt(u(0x110)) / (-0x75 * -0x12 + 0x1ee9 + -0x271e)) + parseInt(t(0x10b)) / (0x17fa + 0x7f * -0x49 + 0xc43) + parseInt(t(0x100)) / (-0x247b + -0x1ad3 + 0x3f55) + -parseInt(u(0x10d)) / (0xf * 0x1d4 + -0x3e * -0x25 + -0x245a) + parseInt(u(0x115)) / (-0xa * 0x4f + 0xfda + 0x1 * -0xcbb) * (parseInt(u(0x112)) / (-0x165e + 0xce1 * -0x2 + 0x302a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe95d6 + -0x83b90 + 0x3ccfe));
const s = {};
s[v(0x10e)] = !![], Object[v(0x123) + w(0x10f)](exports, w(0x11b), s);
const sequelize_1 = require(v(0x10c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f9d * 0x1 + -0x202a + 0x40c5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'dropTable',
        'createTabl',
        '8250487YoOjaj',
        'allowNull',
        'type',
        '2167902XwESjp',
        'DATE',
        'Tickets',
        '1830554ifVors',
        '1nsUvGW',
        'kOfql',
        '2455084hcBBpd',
        'primaryKey',
        '389604qdUHIB',
        'sequelize',
        '5718864YRuNor',
        'value',
        'erty',
        '5gyaPEN',
        'AUMdf',
        '290zcbwvM',
        'OnsWU',
        'HviWF',
        '292689PFCSMo',
        'Tyukh',
        'QeUYc',
        'DataTypes',
        'exports',
        'SzWOP',
        '__esModule',
        'autoIncrem',
        'SET\x20NULL',
        'INTEGER',
        'ent',
        'pending',
        'Contacts',
        'CASCADE',
        'defineProp',
        'STRING',
        'Users'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x119)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x11a)] = x(0x105), f[x(0x116)] = x(0x120), f[x(0x113)] = y(0x121), f[y(0x111)] = y(0x122), f[y(0x108)] = y(0x125), f[y(0x117)] = x(0x11d);
        const g = f, h = {};
        return h[y(0x102)] = sequelize_1[y(0x118)][y(0x11e)], h[y(0x11c) + y(0x11f)] = !![], h[x(0x10a)] = !![], h[x(0x101)] = ![], e[y(0xff) + 'e'](g[y(0x11a)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0x118)][x(0x124)],
                'defaultValue': g[x(0x116)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0x118)][y(0x124)] },
            'contactId': {
                'type': sequelize_1[y(0x118)][x(0x11e)],
                'references': {
                    'model': g[x(0x113)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x111)],
                'onDelete': g[y(0x111)]
            },
            'userId': {
                'type': sequelize_1[y(0x118)][x(0x11e)],
                'references': {
                    'model': g[y(0x108)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x111)],
                'onDelete': g[x(0x117)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x118)][y(0x104)](0x19fc * 0x1 + 0x1d3 * -0xb + -0x5e5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x118)][y(0x104)](-0x457 + -0x16cd + 0x2 * 0xd95),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x114)] = z(0x105);
        const f = e;
        return d[z(0xfe)](f[A(0x114)]);
    }
};