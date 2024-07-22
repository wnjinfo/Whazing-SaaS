'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x15f)) / (0x4b1 * -0x7 + 0xa * 0x397 + 0x17 * -0x22) + -parseInt(k(0x14b)) / (0x23de + -0x161 + -0x227b) * (parseInt(l(0x155)) / (-0x2f * -0x35 + -0x229b + -0x115 * -0x17)) + -parseInt(k(0x15a)) / (-0x4 * -0x392 + 0x2 * -0x1032 + 0x1220) + -parseInt(l(0x140)) / (0x12e4 + -0x18ae + 0x5cf) + -parseInt(l(0x147)) / (0xf3c + 0x9 * 0x2d3 + -0x28a1) + parseInt(k(0x15b)) / (-0x5 * 0xf4 + -0xc45 * 0x2 + -0x3 * -0x9c7) * (-parseInt(l(0x15e)) / (-0xead * 0x1 + -0x2511 + 0x2 * 0x19e3)) + parseInt(k(0x164)) / (0x2 * 0x86b + 0x17b3 + 0x510 * -0x8);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x97a * 0x1ed + -0x1 * 0x11a59f + 0x3cee2 * 0xc));
function a() {
    const s = [
        'aKemC',
        'HByuD',
        '4897455VuDUOJ',
        'Tenants',
        'ble',
        'allowNull',
        'exports',
        'describeTa',
        'PLsjk',
        '3593550RBvhWp',
        'jzkdF',
        'defineProp',
        'yUpzx',
        '528422tTpeTE',
        'type',
        'Groups',
        'BOOLEAN',
        'Ynylf',
        'HpCFY',
        'isActive',
        'CASCADE',
        'value',
        'restrict',
        '9jhBFvT',
        'defaultVal',
        'tenantId',
        'zJxYf',
        '__esModule',
        '1076604ucfljS',
        '334201XhoOzM',
        'erty',
        'INTEGER',
        '104eFoaAJ',
        '1216692XdNgTU',
        'addColumn',
        'sequelize',
        'removeColu',
        'DataTypes',
        '46078758NabZHr',
        'IPYZg'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x153)] = !![], Object[m(0x149) + m(0x15c)](exports, m(0x159), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa5d * -0x1 + 0x1 * 0x1f06 + -0x136b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(n(0x161));
module[m(0x144)] = {
    'up': async f => {
        const o = m, p = n, g = {};
        g[o(0x13f)] = p(0x14d), g[o(0x146)] = p(0x157), g[p(0x14f)] = p(0x141), g[o(0x165)] = p(0x152), g[o(0x158)] = o(0x154), g[o(0x148)] = o(0x151);
        const h = g, i = await f[p(0x145) + o(0x142)](h[p(0x13f)]);
        (!i || !i[h[p(0x146)]]) && await f[o(0x160)](h[o(0x13f)], h[p(0x146)], {
            'type': sequelize_1[o(0x163)][o(0x15d)],
            'references': {
                'model': h[o(0x14f)],
                'key': 'id'
            },
            'onUpdate': h[o(0x165)],
            'onDelete': h[o(0x158)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[o(0x148)]]) {
            const j = {};
            j[p(0x14c)] = sequelize_1[o(0x163)][o(0x14e)], j[o(0x143)] = ![], j[p(0x156) + 'ue'] = !![], await f[p(0x160)](h[p(0x13f)], h[o(0x148)], j);
        }
    },
    'down': async e => {
        const q = m, r = m, f = {};
        f[q(0x13e)] = r(0x14d), f[q(0x14a)] = q(0x157), f[q(0x150)] = q(0x151);
        const g = f;
        await e[r(0x162) + 'mn'](g[q(0x13e)], g[r(0x14a)]), await e[r(0x162) + 'mn'](g[r(0x13e)], g[q(0x150)]);
    }
};