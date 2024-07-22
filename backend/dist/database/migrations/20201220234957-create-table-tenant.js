'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x14b)) / (0x1cf2 + 0x26e5 + -0x2 * 0x21eb) + -parseInt(p(0x15a)) / (0x7 * -0x17 + -0x13f8 + 0x149b) + -parseInt(p(0x148)) / (0x1b7 * 0x6 + -0x7d2 + 0x11 * -0x25) + parseInt(p(0x15b)) / (0x1f07 + 0x1 * 0x1089 + -0x2f8c) + -parseInt(q(0x152)) / (-0x185 + 0xa3d * 0x1 + -0x8b3) + -parseInt(q(0x158)) / (0x9 * -0x3c2 + 0x77e + 0x1a5a) * (parseInt(p(0x157)) / (0x2 * 0xf0b + -0x55 * -0x22 + 0x5 * -0x845)) + parseInt(q(0x15e)) / (-0xb9d * -0x1 + 0x1d84 * -0x1 + 0x11ef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x178ee * 0x3 + -0x2 * -0x31e9d + -0x1cb43));
const o = {};
function a() {
    const x = [
        'oSLZk',
        'jeTco',
        '1131690bJvgkV',
        'Tenants',
        '__esModule',
        'DATE',
        'createTabl',
        '6989227tJOKgQ',
        '6UvrGVr',
        'erty',
        '1274170bQhexe',
        '254556eAYjwk',
        'exports',
        'dropTable',
        '28910936fYZVAq',
        'primaryKey',
        'CASCADE',
        'autoIncrem',
        'MToOX',
        'Users',
        'STRING',
        'value',
        'defineProp',
        'allowNull',
        'ent',
        'active',
        'DataTypes',
        'sequelize',
        '2214216JhKQsW',
        'INTEGER',
        'type',
        '496749UkuOkg',
        'restrict',
        'wIayt',
        'yHJMe',
        'yjIgk'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x644 + -0x1 * 0x1c5e + 0x175b);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x141)] = !![], Object[r(0x142) + s(0x159)](exports, s(0x154), o);
const sequelize_1 = require(r(0x147));
module[s(0x15c)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x150)] = u(0x153), f[t(0x162)] = u(0x145), f[u(0x14f)] = u(0x163), f[t(0x151)] = t(0x160), f[u(0x14d)] = u(0x14c);
        const g = f, h = {};
        return h[u(0x14a)] = sequelize_1[u(0x146)][t(0x149)], h[t(0x161) + t(0x144)] = !![], h[t(0x15f)] = !![], h[t(0x143)] = ![], e[t(0x156) + 'e'](g[u(0x150)], {
            'id': h,
            'status': {
                'type': sequelize_1[t(0x146)][t(0x164)],
                'defaultValue': g[u(0x162)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[u(0x146)][t(0x149)],
                'references': {
                    'model': g[t(0x14f)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x151)],
                'onDelete': g[t(0x14d)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x146)][t(0x155)](0x1 * -0x1d39 + -0x1d * -0x139 + -0x636),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x146)][u(0x155)](0x1 * -0x1f9 + -0x2 * -0x1042 + 0x1e85 * -0x1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x14e)] = w(0x153);
        const f = e;
        return d[w(0x15d)](f[v(0x14e)]);
    }
};