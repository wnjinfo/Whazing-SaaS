'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2315 + 0x1677 + 0x1 * -0x3835);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x161)) / (-0x130d + -0x1ed1 + 0x31df * 0x1) + -parseInt(q(0x166)) / (-0x1109 + -0x1c2c * -0x1 + -0xb21) + parseInt(p(0x16c)) / (0x1bfc + 0x2a * -0xc7 + 0x4ad) + parseInt(q(0x169)) / (0x1 * 0x1af + -0x22e6 + -0xb5 * -0x2f) + parseInt(q(0x15c)) / (-0x161 * -0x1 + -0x54d * -0x4 + -0x1690) + parseInt(p(0x17b)) / (0x1f * -0x2e + 0x5db * 0x1 + 0x43 * -0x1) + parseInt(q(0x15e)) / (-0x2088 + 0x1f9c + 0xf3) * (-parseInt(p(0x15d)) / (0x1a52 + -0xa98 + -0x52 * 0x31));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc06d0 + -0x60501 + 0x107 * 0x18b1));
function a() {
    const x = [
        '__esModule',
        'defineProp',
        'value',
        'primaryKey',
        '582384dvNiar',
        'LKYQt',
        'sequelize',
        'qAmwS',
        'SET\x20NULL',
        'allowNull',
        'CASCADE',
        '3250435sUKopm',
        '56etxxcx',
        '1204679OSXFKE',
        'jOKFx',
        'DataTypes',
        '602759cpdnnf',
        'createTabl',
        'ReadMessag',
        'DMrOR',
        'ssage',
        '612440erflge',
        'dropTable',
        'exports',
        '1756596iLLYWq',
        'BIGINT',
        'INTEGER',
        '604770ZzDrVJ',
        'ent',
        'erty',
        'rLoMJ',
        'eGroups',
        'tqBLK',
        'InternalMe',
        'type',
        'DATE',
        'UsersGroup',
        'autoIncrem'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x179)] = !![], Object[r(0x178) + s(0x16e)](exports, r(0x177), o);
const sequelize_1 = require(r(0x157));
module[r(0x168)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x158)] = t(0x163) + t(0x170), f[t(0x15f)] = t(0x172) + u(0x165), f[t(0x171)] = t(0x15b), f[t(0x16f)] = t(0x159), f[u(0x164)] = t(0x175) + 's';
        const g = f, h = {};
        return h[u(0x173)] = sequelize_1[t(0x160)][u(0x16b)], h[t(0x17a)] = !![], h[u(0x176) + u(0x16d)] = !![], h[u(0x15a)] = ![], e[t(0x162) + 'e'](g[u(0x158)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[u(0x160)][u(0x16a)],
                'references': {
                    'model': g[t(0x15f)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x171)],
                'onDelete': g[u(0x16f)]
            },
            'userGroupId': {
                'type': sequelize_1[t(0x160)][u(0x16b)],
                'references': {
                    'model': g[u(0x164)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x171)],
                'onDelete': g[u(0x171)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x160)][t(0x174)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x160)][t(0x174)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x17c)] = w(0x163) + v(0x170);
        const f = e;
        return d[v(0x167)](f[w(0x17c)]);
    }
};