'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x7a)) / (-0xb * -0x12d + 0x195 + 0x1 * -0xe83) + -parseInt(j(0x8d)) / (-0x787 * -0x2 + 0x1136 + -0x2042) * (-parseInt(j(0x8f)) / (-0x1663 + -0xbc6 * 0x1 + 0x2d9 * 0xc)) + parseInt(k(0x9b)) / (0x1 * 0x222b + -0x22e3 + 0x1 * 0xbc) + -parseInt(k(0x8a)) / (-0x1 * 0x66c + -0x459 * 0x1 + 0xaca) + -parseInt(k(0x97)) / (-0x4 * 0x7f9 + -0x3 * -0xcb5 + -0x635) + parseInt(j(0x8c)) / (-0x24b8 + 0x627 * 0x4 + 0xc23) * (-parseInt(k(0x96)) / (0x8c3 * 0x2 + 0x2 * 0x12d1 + 0x24 * -0x188)) + parseInt(k(0x7b)) / (0x570 + -0xd * 0x153 + -0x38 * -0x36);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x1b * -0x52dc + -0x36e6a + -0x5e8));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x598 + -0xe69 + 0x2ed * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[l(0x81)] = !![], Object[l(0x7d) + m(0x7e)](exports, m(0x90), c);
function a() {
    const r = [
        '__esModule',
        'CPjCx',
        'iEmBR',
        'sequelize',
        'queue',
        'juqFU',
        '320qksUSa',
        '868260elNuHb',
        'uWlzM',
        'RKaDp',
        'exports',
        '1718596ZjCqsK',
        '299995smhhPj',
        '5573862dKTppE',
        'dFqpG',
        'defineProp',
        'erty',
        'allowNull',
        'defaultVal',
        'value',
        'type',
        'removeColu',
        'Queues',
        'CASCADE',
        'DataTypes',
        'restrict',
        'INTEGER',
        'Tickets',
        '3084065HyyGAM',
        'addColumn',
        '71309NgtofF',
        '332758SiPjCb',
        'unQUg',
        '3ciQzkH'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(l(0x93));
module[m(0x9a)] = {
    'up': async e => {
        const n = m, o = l, f = {};
        f[n(0x8e)] = n(0x89), f[o(0x7c)] = n(0x94), f[n(0x91)] = n(0x84), f[n(0x99)] = o(0x85), f[o(0x92)] = n(0x87);
        const g = f;
        await e[n(0x83) + 'mn'](g[n(0x8e)], g[o(0x7c)]), await e[n(0x8b)](g[o(0x8e)], g[o(0x7c)], {
            'type': sequelize_1[o(0x86)][n(0x88)],
            'references': {
                'model': g[o(0x91)],
                'key': 'id'
            },
            'onUpdate': g[n(0x99)],
            'onDelete': g[n(0x92)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0x95)] = p(0x89), g[p(0x98)] = q(0x94);
        const h = g;
        await f[q(0x83) + 'mn'](h[p(0x95)], h[q(0x98)]);
        const i = {};
        i[q(0x82)] = sequelize_1[q(0x86)][q(0x88)], i[p(0x80) + 'ue'] = null, i[q(0x7f)] = !![], await f[p(0x8b)](h[p(0x95)], h[p(0x98)], i);
    }
};