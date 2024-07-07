'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf * -0x32 + -0xdf5 + -0xd * -0xf5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x17e)) / (-0x1 * 0x18b3 + -0x4 * -0x9a7 + 0xa * -0x164) + parseInt(j(0x187)) / (-0x11b3 * -0x1 + 0x24bd + -0x366e) * (-parseInt(j(0x18a)) / (0x19c9 + -0x6 * -0xae + -0x2 * 0xeed)) + parseInt(j(0x16d)) / (-0x2 * -0x31d + -0x1fa1 + 0x196b) * (parseInt(j(0x17d)) / (0x5 * 0x1d2 + -0x35 * -0xa6 + -0x2b73 * 0x1)) + parseInt(j(0x16e)) / (0x62f + 0x4 * -0x6f3 + 0x15a3 * 0x1) * (-parseInt(j(0x172)) / (-0x1 * 0x1ff7 + -0xa41 + 0x2a3f)) + parseInt(j(0x18d)) / (0xa3 * 0x13 + 0x1 * -0x1136 + 0x525) * (-parseInt(j(0x180)) / (-0x649 + -0xce * 0x2b + 0x28ec)) + -parseInt(k(0x179)) / (0x1dca + 0x1312 + -0x30d2) * (-parseInt(j(0x190)) / (-0x15b9 + -0x2236 * 0x1 + 0x1bfd * 0x2)) + parseInt(j(0x181)) / (-0x1a5 * 0x1 + -0x2273 + 0x2424);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x69f9b + -0x866f2 + 0x65bef));
function a() {
    const r = [
        'restrict',
        '2319755BEwGVj',
        '487911krfwWi',
        'DataTypes',
        '3546UoASfX',
        '1121556dseiYB',
        'GrzJd',
        'erty',
        'defineProp',
        'tZOaT',
        'LbfPn',
        '36jTGVDV',
        'type',
        'queueId',
        '62910RMGMMK',
        'removeColu',
        'queue',
        '11288JuJFZO',
        'ZxWta',
        'value',
        '22LVKKLM',
        'CHGqj',
        'INTEGER',
        'mBSsN',
        'CfySl',
        '4AWJPkF',
        '76086cevRlw',
        'exports',
        'Tickets',
        '__esModule',
        '175QIsXgL',
        'allowNull',
        'addColumn',
        'CASCADE',
        'ixMFK',
        'sequelize',
        'yrqUO',
        '2526390tbNTnL',
        'Queues',
        'defaultVal'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0x18f)] = !![], Object[m(0x184) + l(0x183)](exports, m(0x171), c);
const sequelize_1 = require(m(0x177));
module[m(0x16f)] = {
    'up': async e => {
        const n = l, o = m, f = {};
        f[n(0x176)] = o(0x170), f[n(0x191)] = o(0x18c), f[o(0x186)] = o(0x189), f[n(0x18e)] = o(0x17a), f[o(0x16c)] = o(0x175), f[o(0x182)] = o(0x17c);
        const g = f;
        await e[n(0x18b) + 'mn'](g[o(0x176)], g[n(0x191)]), await e[n(0x174)](g[o(0x176)], g[o(0x186)], {
            'type': sequelize_1[o(0x17f)][n(0x16a)],
            'references': {
                'model': g[o(0x18e)],
                'key': 'id'
            },
            'onUpdate': g[o(0x16c)],
            'onDelete': g[n(0x182)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = m, g = {};
        g[p(0x16b)] = p(0x170), g[q(0x185)] = q(0x189), g[p(0x178)] = p(0x18c);
        const h = g;
        await f[q(0x18b) + 'mn'](h[p(0x16b)], h[p(0x185)]);
        const i = {};
        i[q(0x188)] = sequelize_1[p(0x17f)][p(0x16a)], i[p(0x17b) + 'ue'] = null, i[q(0x173)] = !![], await f[q(0x174)](h[q(0x16b)], h[q(0x178)], i);
    }
};