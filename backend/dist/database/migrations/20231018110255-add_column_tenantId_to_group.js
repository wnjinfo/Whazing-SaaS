'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x132)) / (0xf2a + -0x47f * 0x7 + 0x1050) * (parseInt(k(0x137)) / (-0x2 * 0xd57 + 0x6ea + 0x1 * 0x13c6)) + -parseInt(k(0x14e)) / (0x1 * 0xf75 + 0x202 * 0xc + -0x278a) + -parseInt(l(0x145)) / (0xdad + -0x38 * 0x9e + 0x1 * 0x14e7) + -parseInt(k(0x12c)) / (-0x7d * 0x2e + 0x2676 + -0xffb) + -parseInt(l(0x139)) / (0x1019 + -0x16b4 + -0x1 * -0x6a1) + -parseInt(k(0x135)) / (0x66d + -0x1 * 0x1a7e + -0x8 * -0x283) + parseInt(l(0x144)) / (0xbb6 + -0x3 * -0x464 + -0x1 * 0x18da);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x99900 + -0x1097ae + 0x26a604));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x24d7 + -0x2030 + 0x4630);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
function a() {
    const s = [
        '2608305rnPMdq',
        'removeColu',
        'tenantId',
        'describeTa',
        'DataTypes',
        '4687990SXkhOi',
        'defineProp',
        'CASCADE',
        'sequelize',
        '__esModule',
        'erty',
        '2liUrtb',
        'BOOLEAN',
        'IzYTg',
        '5360614bjacgp',
        'zvsfk',
        '126662agHwCa',
        'value',
        '1112328vMzGHw',
        'addColumn',
        'TxdoV',
        'eaJlF',
        'BwEYl',
        'MARAi',
        'INTEGER',
        'Groups',
        'defaultVal',
        'allowNull',
        'isActive',
        '38235432NnilPb',
        '4312296kGjlEa',
        'Tenants',
        'ble',
        'UaviX',
        'TLTAg',
        'type',
        'odImQ',
        'exports',
        'restrict'
    ];
    a = function () {
        return s;
    };
    return a();
}
c[m(0x138)] = !![], Object[n(0x12d) + m(0x131)](exports, m(0x130), c);
const sequelize_1 = require(m(0x12f));
module[n(0x14c)] = {
    'up': async f => {
        const o = m, p = n, g = {};
        g[o(0x13c)] = p(0x140), g[p(0x13d)] = p(0x129), g[p(0x13b)] = p(0x146), g[p(0x148)] = o(0x12e), g[p(0x13e)] = p(0x14d), g[p(0x149)] = o(0x143);
        const h = g, i = await f[p(0x12a) + o(0x147)](h[p(0x13c)]);
        (!i || !i[h[p(0x13d)]]) && await f[p(0x13a)](h[o(0x13c)], h[o(0x13d)], {
            'type': sequelize_1[o(0x12b)][o(0x13f)],
            'references': {
                'model': h[p(0x13b)],
                'key': 'id'
            },
            'onUpdate': h[o(0x148)],
            'onDelete': h[o(0x13e)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0x149)]]) {
            const j = {};
            j[o(0x14a)] = sequelize_1[p(0x12b)][p(0x133)], j[o(0x142)] = ![], j[p(0x141) + 'ue'] = !![], await f[o(0x13a)](h[o(0x13c)], h[p(0x149)], j);
        }
    },
    'down': async e => {
        const q = m, r = m, f = {};
        f[q(0x136)] = r(0x140), f[q(0x14b)] = r(0x129), f[q(0x134)] = r(0x143);
        const g = f;
        await e[q(0x14f) + 'mn'](g[r(0x136)], g[r(0x14b)]), await e[r(0x14f) + 'mn'](g[q(0x136)], g[q(0x134)]);
    }
};