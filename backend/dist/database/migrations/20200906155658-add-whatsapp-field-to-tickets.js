'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x188)) / (-0x138 * 0x10 + -0x1d3 + 0x1554) + parseInt(j(0x189)) / (-0x1a9c + 0x268 + 0x1836) * (-parseInt(j(0x19d)) / (0x10b * 0xb + 0x21c7 + 0x2d3d * -0x1)) + parseInt(j(0x18b)) / (0x14a + -0x1115 + 0xfcf) * (-parseInt(j(0x1a5)) / (0xb63 + 0x2ee + -0x4c4 * 0x3)) + -parseInt(j(0x19e)) / (-0x690 + -0x2599 + -0x2c2f * -0x1) * (parseInt(j(0x196)) / (-0x19 * 0xde + 0x3 * -0xaff + 0x1b59 * 0x2)) + parseInt(j(0x1a4)) / (0x1 * -0x2554 + -0x20d * 0x1 + 0x2769) * (parseInt(j(0x187)) / (-0xe56 + 0x1 * -0x12c3 + 0x2122)) + parseInt(i(0x191)) / (0xd * 0x2db + -0xeef * 0x2 + -0x737) * (-parseInt(j(0x1a2)) / (0x1 * -0x1323 + -0x1cf + 0x14fd)) + parseInt(i(0x193)) / (-0x4 * 0x815 + 0xb * -0x245 + 0x3957);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b349 * 0x4 + 0x743 * -0x153 + 0x1 * 0xe1545));
function a() {
    const q = [
        'xgBvq',
        '24peyZih',
        '75180JcterE',
        '__esModule',
        'whatsappId',
        'WLxJu',
        '3758715WAPWfQ',
        '362218fLiQHG',
        '18486FPQDqn',
        'defineProp',
        '12VmHKYz',
        'BpObe',
        'SmFel',
        'INTEGER',
        'addColumn',
        'CASCADE',
        '3610120pAYxyT',
        'CIOIy',
        '42078252vEPNRJ',
        'DataTypes',
        'erty',
        '5287751iBtJvu',
        'removeColu',
        'sequelize',
        'Whatsapps',
        'SET\x20NULL',
        'hXldR',
        'value',
        '459hDMcIn',
        '6UuCpwV',
        'exports',
        'lSrXz',
        'Tickets',
        '44tfPFgQ'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x19c)] = !![], Object[l(0x18a) + l(0x195)](exports, l(0x1a6), g);
const sequelize_1 = require(k(0x198));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e6b + 0x5 * 0x162 + 0x1 * -0x23ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x19f)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x18d)] = n(0x1a1), e[n(0x18c)] = n(0x1a7), e[m(0x1a3)] = n(0x199), e[n(0x1a8)] = n(0x190), e[m(0x192)] = n(0x19a);
        const f = e;
        return d[m(0x18f)](f[m(0x18d)], f[m(0x18c)], {
            'type': sequelize_1[m(0x194)][m(0x18e)],
            'references': {
                'model': f[m(0x1a3)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1a8)],
            'onDelete': f[n(0x192)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1a0)] = p(0x1a1), e[p(0x19b)] = p(0x1a7);
        const f = e;
        return d[o(0x197) + 'mn'](f[o(0x1a0)], f[p(0x19b)]);
    }
};