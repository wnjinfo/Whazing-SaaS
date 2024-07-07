'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1981 + 0x201a + 0x1 * -0x57a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x12e)) / (0x142b + 0x1c * 0x7 + -0x14ee) + parseInt(r(0x12c)) / (-0x4 * 0x94d + 0x48 * 0x20 + -0xe1b * -0x2) + parseInt(r(0x125)) / (0x434 * -0x6 + 0x1ef3 + -0x8 * 0xb7) + -parseInt(s(0x132)) / (0x3a1 * -0x2 + 0x1 * 0x23c5 + -0x1c7f) * (-parseInt(s(0x11f)) / (-0x1 * 0xc0b + 0x1608 + -0x9f8)) + -parseInt(s(0x13b)) / (0x1ed6 + -0x2108 + 0x8 * 0x47) + parseInt(s(0x143)) / (-0xae7 + -0x2e8 + 0xa1 * 0x16) * (-parseInt(r(0x138)) / (0x3f * 0x64 + 0x88 * -0x13 + -0x26a * 0x6)) + parseInt(r(0x13d)) / (0x91 * -0x3a + 0x244c * 0x1 + 0x9 * -0x61) * (-parseInt(s(0x142)) / (-0x1 * -0x394 + -0x1 * -0x18c1 + -0x1c4b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a2 * -0x3b + 0x21195 + 0x1256d));
const q = {};
function a() {
    const z = [
        'OsvoE',
        'primaryKey',
        'tUPTi',
        'ContactWal',
        '3510wIyDdW',
        '65849EpabUu',
        'WOrFl',
        '5pkxqNn',
        'autoIncrem',
        'ent',
        'createTabl',
        'DataTypes',
        'Contacts',
        '276282XIEjKK',
        'defineProp',
        'CASCADE',
        'allowNull',
        'YukjY',
        'exports',
        'sequelize',
        '322830lSSRFQ',
        'DATE',
        '111297EaIrAS',
        'lets',
        'value',
        'HFeAH',
        '484888qlVeIm',
        'INTEGER',
        'biWhO',
        'Tenants',
        'type',
        'dropTable',
        '8gHMwTe',
        '__esModule',
        'erty',
        '844266yBgrxc',
        'Users',
        '72KggqYT'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x130)] = !![], Object[t(0x126) + u(0x13a)](exports, u(0x139), q);
const sequelize_1 = require(t(0x12b));
module[t(0x12a)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0x140)] = w(0x141) + w(0x12f), f[w(0x129)] = v(0x13c), f[v(0x13e)] = w(0x127), f[v(0x131)] = w(0x124), f[w(0x144)] = v(0x135);
        const g = f, h = {};
        return h[w(0x136)] = sequelize_1[v(0x123)][w(0x133)], h[v(0x120) + w(0x121)] = !![], h[w(0x13f)] = !![], h[v(0x128)] = ![], e[v(0x122) + 'e'](g[w(0x140)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x123)][v(0x133)],
                'references': {
                    'model': g[v(0x129)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x13e)],
                'onDelete': g[w(0x13e)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x123)][v(0x133)],
                'references': {
                    'model': g[v(0x131)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x13e)],
                'onDelete': g[w(0x13e)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x123)][w(0x133)],
                'references': {
                    'model': g[w(0x144)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x13e)],
                'onDelete': g[w(0x13e)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x123)][v(0x12d)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x123)][w(0x12d)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x134)] = x(0x141) + x(0x12f);
        const f = e;
        return d[y(0x137)](f[y(0x134)]);
    }
};