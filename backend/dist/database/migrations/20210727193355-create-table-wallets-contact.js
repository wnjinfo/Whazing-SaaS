'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xc2)) / (0x1 * -0x171f + 0x21 * -0xe + -0x2 * -0xc77) + parseInt(s(0xc1)) / (-0x487 + 0xa * 0x166 + -0x973) + -parseInt(s(0xc9)) / (-0x2 * 0x305 + 0x16c0 + -0x10b3) * (parseInt(s(0xcf)) / (-0x801 * -0x1 + 0xe13 + -0x4 * 0x584)) + -parseInt(r(0xc0)) / (0x1f1 * -0x1 + 0x1 * -0xf2a + 0x1120) + parseInt(r(0xc6)) / (0x1666 + 0x15d4 + 0x75e * -0x6) * (parseInt(r(0xb9)) / (-0x24b2 + 0x100b + 0x14ae)) + -parseInt(r(0xb4)) / (-0x205e + -0x1 * -0x635 + 0x1a31) * (parseInt(s(0xb3)) / (-0x69d * -0x1 + -0x1de0 + 0x2a * 0x8e)) + parseInt(r(0xcd)) / (-0x3 * 0x78b + -0xc58 + 0x2303);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3a7 * -0x1af + -0x9 * -0xaa39 + -0x7 * -0x15cc2));
const q = {};
q[t(0xaf)] = !![], Object[u(0xbd) + t(0xc5)](exports, t(0xb7), q);
function a() {
    const z = [
        'cPYSp',
        '9mBJrdZ',
        'CASCADE',
        'Contacts',
        'type',
        '22338240nRFSsP',
        'kcGcc',
        '817240pKsgGj',
        'WwQhI',
        'ContactWal',
        'dropTable',
        'sequelize',
        'autoIncrem',
        'value',
        'lets',
        'vDHbj',
        'dyFhS',
        '9pVIaXX',
        '3402136lMYPIu',
        'DataTypes',
        'createTabl',
        '__esModule',
        'allowNull',
        '140308ANmafa',
        'primaryKey',
        'ACCJe',
        'ent',
        'defineProp',
        'Tenants',
        'INTEGER',
        '4395310uMYBas',
        '1515368uVWJRo',
        '800815ljntjx',
        'Users',
        'DATE',
        'erty',
        '102gCoxoK',
        'exports'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0xad));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13db + -0xdd2 * 0x2 + 0x876);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[u(0xc7)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0xbb)] = v(0xd1) + v(0xb0), f[w(0xb1)] = v(0xc3), f[v(0xc8)] = v(0xca), f[w(0xd0)] = w(0xcb), f[v(0xb2)] = w(0xbe);
        const g = f, h = {};
        return h[w(0xcc)] = sequelize_1[w(0xb5)][v(0xbf)], h[w(0xae) + w(0xbc)] = !![], h[w(0xba)] = !![], h[v(0xb8)] = ![], e[v(0xb6) + 'e'](g[v(0xbb)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[w(0xb5)][w(0xbf)],
                'references': {
                    'model': g[v(0xb1)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xc8)],
                'onDelete': g[w(0xc8)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0xb5)][w(0xbf)],
                'references': {
                    'model': g[v(0xd0)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xc8)],
                'onDelete': g[w(0xc8)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0xb5)][w(0xbf)],
                'references': {
                    'model': g[v(0xb2)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xc8)],
                'onDelete': g[w(0xc8)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xb5)][w(0xc4)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xb5)][w(0xc4)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xce)] = x(0xd1) + x(0xb0);
        const f = e;
        return d[x(0xd2)](f[y(0xce)]);
    }
};