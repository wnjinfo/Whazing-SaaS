'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1b9)) / (0x1f98 * -0x1 + 0x2451 + 0x4 * -0x12e) + -parseInt(q(0x1b6)) / (-0x2452 + -0x44e + 0x28a2) * (parseInt(p(0x1ca)) / (-0x1016 + -0xb61 + -0x1b7a * -0x1)) + parseInt(p(0x1c8)) / (-0x641 + -0x31 * -0x1d + 0xb8) + -parseInt(p(0x1c3)) / (0x13 * 0x1f3 + 0x1d3a + -0x423e) * (-parseInt(p(0x1d1)) / (0x265d + 0xe48 + -0x349f)) + -parseInt(p(0x1bd)) / (0x124 + 0x1 * -0x178d + 0x1670) + parseInt(p(0x1b1)) / (0x158 + -0x903 + 0x291 * 0x3) * (parseInt(q(0x1c6)) / (-0x1 * -0xb3e + -0x4a * 0xa + 0x851 * -0x1)) + -parseInt(q(0x1be)) / (0x5be + 0x9bd + 0x3b * -0x43);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x3d036 + 0x52293 * 0x2 + -0x8bed1));
const o = {};
o[r(0x1ce)] = !![], Object[s(0x1c9) + r(0x1c4)](exports, s(0x1bc), o);
const sequelize_1 = require(s(0x1cc));
function a() {
    const x = [
        'sequelize',
        'nUneV',
        'value',
        'ent',
        'INTEGER',
        '1877646ZWrpKG',
        'exports',
        'allowNull',
        'createTabl',
        '8hDkLld',
        'primaryKey',
        'Xfhet',
        'DataTypes',
        'CASCADE',
        '2PAtUNT',
        'UsersQueue',
        'type',
        '127065LcXQSX',
        'Users',
        'IorSw',
        '__esModule',
        '304808VOzQnh',
        '3699890ZIMDBq',
        'dropTable',
        'DATE',
        'UsersGroup',
        'autoIncrem',
        '10piUozN',
        'erty',
        'vuDIf',
        '60633ZjvaWy',
        'dOuDt',
        '2483156qcefDC',
        'defineProp',
        '1088925TYaOnO',
        'Groups'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5f2 + -0x16e0 * -0x1 + -0xf3e);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[s(0x1d2)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x1c5)] = t(0x1c1) + 's', f[u(0x1cd)] = u(0x1cb), f[t(0x1bb)] = t(0x1b5), f[t(0x1b3)] = t(0x1ba);
        const g = f, h = {};
        return h[u(0x1b8)] = sequelize_1[t(0x1b4)][u(0x1d0)], h[t(0x1b2)] = !![], h[t(0x1c2) + u(0x1cf)] = !![], h[u(0x1d3)] = ![], e[t(0x1b0) + 'e'](g[u(0x1c5)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[u(0x1b4)][u(0x1d0)],
                'references': {
                    'model': g[u(0x1cd)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1bb)],
                'onDelete': g[t(0x1bb)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x1b4)][t(0x1d0)],
                'references': {
                    'model': g[u(0x1b3)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1bb)],
                'onDelete': g[t(0x1bb)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1b4)][t(0x1c0)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1b4)][t(0x1c0)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x1c7)] = w(0x1b7) + 's';
        const f = e;
        return d[v(0x1bf)](f[w(0x1c7)]);
    }
};