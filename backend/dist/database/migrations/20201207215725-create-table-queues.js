'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9 * 0x2b3 + 0x1bf0 + -0x2dc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xd8)) / (0x9 * -0x2ad + -0x1 * 0xba + 0x18d0) * (parseInt(q(0xe8)) / (0x10 * 0x200 + 0x5dc + -0x25da)) + -parseInt(p(0xd7)) / (0x71 * -0x35 + 0x279 * 0x3 + -0xffd * -0x1) * (-parseInt(p(0xdf)) / (-0x907 + -0x12f7 + 0x1c02)) + -parseInt(q(0xd0)) / (0xb87 + -0x6 * 0x5ce + 0x255 * 0xa) + parseInt(p(0xd6)) / (-0x10c * -0x23 + -0xc94 + -0x180a) * (parseInt(q(0xdc)) / (0xa * -0xb3 + -0x225 + -0x3 * -0x30e)) + parseInt(q(0xdd)) / (0x35 * -0x86 + 0x15d0 * -0x1 + 0x3196) * (parseInt(p(0xe7)) / (-0x2411 + 0x1074 + -0x9d3 * -0x2)) + -parseInt(q(0xc9)) / (-0x3 * 0xcbd + 0x6ce + 0x1f73) + parseInt(q(0xcd)) / (-0x1 * -0xdaf + -0xe9d + 0xf9) * (-parseInt(p(0xe2)) / (0x6d3 + 0x1ed + -0x8b4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4de02 + 0x30f59 * 0x1 + -0x7 * 0x5f4a));
const o = {};
function a() {
    const x = [
        'Users',
        'primaryKey',
        'type',
        'lompK',
        'DATE',
        '5961770AaZDRf',
        'Queues',
        'allowNull',
        'erty',
        '15213yuntAd',
        'createTabl',
        'sequelize',
        '3365850IRutUe',
        'ent',
        'exports',
        'GbmFe',
        'lqomv',
        'eNCeK',
        '30FPybzZ',
        '3saDkdK',
        '53XUJmkE',
        'STRING',
        'SET\x20NULL',
        'CASCADE',
        '489013EoYeqb',
        '82016VSUkia',
        'DataTypes',
        '2426236uqkRQn',
        'value',
        'autoIncrem',
        '276JEBWkn',
        '__esModule',
        'FHfDO',
        'INTEGER',
        'dropTable',
        '279BBnkCE',
        '14198FmngJe',
        'defineProp'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0xe0)] = !![], Object[s(0xe9) + r(0xcc)](exports, r(0xe3), o);
const sequelize_1 = require(s(0xcf));
module[r(0xd2)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0xd3)] = u(0xca), g[t(0xd4)] = u(0xea), g[u(0xed)] = u(0xdb), g[t(0xd5)] = u(0xda);
        const h = g, i = {};
        i[u(0xec)] = sequelize_1[u(0xde)][u(0xe5)], i[u(0xeb)] = !![], i[t(0xe1) + t(0xd1)] = !![], i[t(0xcb)] = ![];
        const j = {};
        return j[u(0xec)] = sequelize_1[u(0xde)][u(0xd9)], j[t(0xcb)] = ![], f[u(0xce) + 'e'](h[t(0xd3)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[u(0xde)][t(0xe5)],
                'references': {
                    'model': h[u(0xd4)],
                    'key': 'id'
                },
                'onUpdate': h[t(0xed)],
                'onDelete': h[t(0xd5)]
            },
            'createdAt': {
                'type': sequelize_1[t(0xde)][t(0xee)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0xde)][t(0xee)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0xe4)] = v(0xca);
        const f = e;
        return d[w(0xe6)](f[w(0xe4)]);
    }
};