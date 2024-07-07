'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x18c)) / (0x2239 + -0x56d * -0x3 + 0x3 * -0x10d5) * (-parseInt(u(0x189)) / (-0x15ff * 0x1 + 0x106b + -0xa * -0x8f)) + parseInt(u(0x17a)) / (0x25fc + 0x1 * 0x1e8a + -0x1 * 0x4483) + -parseInt(u(0x177)) / (-0x799 * 0x1 + -0x2374 * -0x1 + -0x1bd7) * (-parseInt(t(0x173)) / (-0x104b * -0x1 + -0xf7d + -0xc9)) + -parseInt(u(0x174)) / (-0x1c3d + -0x8e7 * 0x1 + -0x1295 * -0x2) + -parseInt(u(0x179)) / (0x24 * -0x6c + -0x1 * -0x1e29 + -0xef2) + -parseInt(u(0x185)) / (-0x26ef + 0xd * 0x2bb + 0x378) + parseInt(t(0x18b)) / (-0x2335 + -0x546 + -0x2 * -0x1442);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1715a * -0x10 + 0x2a4 * 0x233 + 0x1f131b));
function a() {
    const B = [
        '9326232HYULSn',
        'SET\x20NULL',
        'CASCADE',
        '4loFvXO',
        'Users',
        '9138906BdVNEH',
        '1697265MPDwwf',
        'Tenants',
        'pKNyU',
        'TEXT',
        'YUkIb',
        'type',
        'value',
        'DATE',
        'INTEGER',
        'erty',
        'sequelize',
        '10362512CsEoLQ',
        'DataTypes',
        'dropTable',
        'allowNull',
        '2OaIEjR',
        'autoIncrem',
        '38165364rWAEIf',
        '34149WDBpMw',
        'fKSTY',
        'Zixbu',
        '__esModule',
        'STRING',
        'defineProp',
        'XSiyq',
        'primaryKey',
        'FastReply',
        'Znqvc',
        'exports',
        'ent',
        'createTabl',
        '1094875XMvBfT'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc3b + 0x2 * 0x2a7 + -0x101d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x180)] = !![], Object[w(0x191) + w(0x183)](exports, v(0x18f), s);
const sequelize_1 = require(w(0x184));
module[v(0x170)] = {
    'up': g => {
        const x = w, y = w, h = {};
        h[x(0x17e)] = y(0x16e), h[x(0x18d)] = x(0x178), h[y(0x16c)] = x(0x176), h[x(0x18e)] = y(0x175), h[y(0x17c)] = x(0x17b);
        const i = h, j = {};
        j[x(0x17f)] = sequelize_1[y(0x186)][y(0x182)], j[y(0x18a) + y(0x171)] = !![], j[x(0x16d)] = !![], j[y(0x188)] = ![];
        const k = {};
        k[y(0x17f)] = sequelize_1[y(0x186)][x(0x190)], k[x(0x188)] = ![];
        const l = {};
        return l[y(0x17f)] = sequelize_1[y(0x186)][x(0x17d)], l[y(0x188)] = ![], g[x(0x172) + 'e'](i[x(0x17e)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x186)][x(0x182)],
                'references': {
                    'model': i[x(0x18d)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x16c)],
                'onDelete': i[x(0x18e)]
            },
            'tenantId': {
                'type': sequelize_1[x(0x186)][y(0x182)],
                'references': {
                    'model': i[x(0x17c)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x16c)],
                'onDelete': i[x(0x16c)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[y(0x186)][y(0x181)](-0xb * -0x2a7 + 0x1d08 + -0x14b * 0x2d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x186)][y(0x181)](0xe * -0x53 + -0x2532 + -0x5 * -0x85a),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x16f)] = z(0x16e);
        const f = e;
        return d[A(0x187)](f[z(0x16f)]);
    }
};