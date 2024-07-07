'use strict';
function a() {
    const z = [
        'jRZVt',
        'dropTable',
        'INTEGER',
        '379716lbmHyp',
        'JSrxI',
        'Tags',
        '856605bJcWKx',
        'value',
        'DataTypes',
        'DATE',
        '__esModule',
        'oSlBc',
        'createTabl',
        '411039RwcVfV',
        'defineProp',
        'CASCADE',
        'LqkcQ',
        'primaryKey',
        'Contacts',
        'type',
        '3421304WoseQS',
        'exports',
        'RESTRICT',
        'YANPQ',
        '577100tLcYmf',
        'KdInO',
        '7qIQqJd',
        'allowNull',
        '405282ZJioDY',
        'Tenants',
        'sequelize',
        '144704kkOJSt',
        'autoIncrem',
        'erty',
        '5TGdKOG',
        'XQBJn',
        '2VLTeYe',
        'ContactTag',
        'ent'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xfd)) / (-0x3ec + -0x530 + 0x91d) + -parseInt(s(0xf7)) / (-0x2282 + 0x101 * -0x1 + 0x2385) * (-parseInt(r(0xd9)) / (-0x133 + -0x2 * -0x4c + 0x9e)) + -parseInt(s(0xf2)) / (-0x529 + 0x10c4 + 0x2b * -0x45) * (parseInt(r(0xf5)) / (0xc30 + -0x308 * 0xa + -0x5 * -0x3a1)) + parseInt(s(0xef)) / (0x2 * -0x1319 + 0x7f * -0x25 + -0x815 * -0x7) + -parseInt(r(0xed)) / (0x2445 + 0x823 + -0x7 * 0x657) * (-parseInt(s(0xe7)) / (-0x1ddc + -0x2b * 0x8d + 0x3593)) + -parseInt(s(0xe0)) / (0x352 + 0xd89 + 0x869 * -0x2) + -parseInt(r(0xeb)) / (0x1e39 * -0x1 + 0x1 * -0x2285 + 0x40c8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11851 * 0x2 + -0xe2fe + 0x2afbc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x321 + 0x19a5 + -0x1bee);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xda)] = !![], Object[u(0xe1) + t(0xf4)](exports, u(0xdd), q);
const sequelize_1 = require(t(0xf1));
module[u(0xe8)] = {
    'up': e => {
        const v = t, w = t, f = {};
        f[v(0xf6)] = w(0xf8) + 's', f[w(0xfa)] = w(0xd8), f[v(0xe3)] = w(0xe2), f[v(0xea)] = v(0xe9), f[v(0xec)] = v(0xe5), f[v(0xfe)] = w(0xf0);
        const g = f, h = {};
        return h[v(0xe6)] = sequelize_1[v(0xdb)][v(0xfc)], h[w(0xf3) + v(0xf9)] = !![], h[v(0xe4)] = !![], h[v(0xee)] = ![], e[w(0xdf) + 'e'](g[w(0xf6)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0xdb)][w(0xfc)],
                'references': {
                    'model': g[w(0xfa)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xe3)],
                'onDelete': g[v(0xea)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0xdb)][w(0xfc)],
                'references': {
                    'model': g[v(0xec)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xe3)],
                'onDelete': g[w(0xe3)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0xdb)][v(0xfc)],
                'references': {
                    'model': g[v(0xfe)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xe3)],
                'onDelete': g[v(0xe3)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xdb)][v(0xdc)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0xdb)][v(0xdc)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xde)] = y(0xf8) + 's';
        const f = e;
        return d[y(0xfb)](f[x(0xde)]);
    }
};