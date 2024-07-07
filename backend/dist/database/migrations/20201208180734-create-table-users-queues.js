'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1833 + 0x1996 + -0x30ac);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x131)) / (-0x1d23 + -0x2064 * 0x1 + -0x58 * -0xb3) + parseInt(q(0x126)) / (-0x89d + 0x18 * -0xb9 + 0x19f7 * 0x1) * (parseInt(q(0x13a)) / (0x20ad + 0x1 * -0x244d + 0x3a3)) + -parseInt(q(0x11e)) / (-0x25ec + -0x12b5 + 0x38a5) * (-parseInt(p(0x128)) / (-0x213b + -0xbb2 + -0x2cf2 * -0x1)) + -parseInt(p(0x13d)) / (-0x172f + -0x1 * -0xfc1 + 0xd4 * 0x9) + -parseInt(p(0x13c)) / (0x3f4 * 0x3 + 0x11cd + -0x1da2) * (parseInt(q(0x120)) / (-0x24fa + 0x84b * 0x3 + -0x3 * -0x40b)) + parseInt(q(0x122)) / (0xbc * 0x1 + -0x9ba + 0x907) + -parseInt(p(0x12a)) / (0x209f * 0x1 + 0xf74 + 0x3009 * -0x1) * (-parseInt(q(0x12e)) / (-0x2e * -0xc3 + -0x22b1 + -0x4e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5649 + -0x20b * -0x16d + 0x4ee1 * 0x9));
function a() {
    const x = [
        'value',
        '639NXIbjl',
        'usFQS',
        '49WXIwJU',
        '137070yRRRwr',
        'ent',
        'CASCADE',
        'defineProp',
        'sequelize',
        '4fJUiAk',
        'rFmQx',
        '558152PjgHhi',
        '__esModule',
        '3355002wbfOKC',
        'createTabl',
        'allowNull',
        'type',
        '2194ovucSI',
        'INTEGER',
        '1125530fpjPtd',
        'CDgfZ',
        '42590USPwWY',
        'erty',
        'RFYaV',
        'Queues',
        '176GVdksx',
        'primaryKey',
        'dropTable',
        '37918USkbmk',
        'UsersQueue',
        'DataTypes',
        'UuVyJ',
        'Users',
        'DATE',
        'autoIncrem',
        'exports'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x139)] = !![], Object[s(0x140) + r(0x12b)](exports, s(0x121), o);
const sequelize_1 = require(s(0x11d));
module[r(0x138)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0x11f)] = t(0x132) + 's', f[t(0x134)] = u(0x12d), f[u(0x12c)] = t(0x13f), f[t(0x129)] = t(0x135);
        const g = f, h = {};
        return h[t(0x125)] = sequelize_1[t(0x133)][t(0x127)], h[u(0x12f)] = !![], h[t(0x137) + t(0x13e)] = !![], h[u(0x124)] = ![], e[u(0x123) + 'e'](g[u(0x11f)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[u(0x133)][t(0x127)],
                'references': {
                    'model': g[u(0x134)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x12c)],
                'onDelete': g[t(0x12c)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x133)][u(0x127)],
                'references': {
                    'model': g[u(0x129)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x12c)],
                'onDelete': g[u(0x12c)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x133)][u(0x136)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x133)][u(0x136)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x13b)] = v(0x132) + 's';
        const f = e;
        return d[v(0x130)](f[w(0x13b)]);
    }
};