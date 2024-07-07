'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2599 + 0x2 * 0x1001 + 0x70c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x180)) / (0xb36 + -0x9b3 * -0x3 + -0x284e) * (-parseInt(i(0x192)) / (0x64a + 0x19f9 + -0x2041)) + parseInt(j(0x186)) / (-0x10d9 + -0x371 + 0x144d) * (parseInt(i(0x187)) / (-0x2188 + 0x2350 + -0x1c4)) + -parseInt(i(0x181)) / (0x1854 + -0x1 * 0xb65 + -0x13 * 0xae) * (-parseInt(i(0x183)) / (0x2357 + 0xda5 * 0x1 + -0x30f6)) + -parseInt(j(0x18d)) / (-0x1132 + -0xf42 + -0x5 * -0x67f) + -parseInt(i(0x18e)) / (-0x1553 * -0x1 + -0xe54 + -0x6f7) + -parseInt(j(0x18c)) / (-0x3bd + -0x11e + 0x272 * 0x2) * (parseInt(i(0x17e)) / (-0x248d + 0x3 * 0x7de + 0x5f * 0x23)) + -parseInt(i(0x17f)) / (-0x1 * 0x1022 + 0x4b * -0x45 + 0x2464) * (-parseInt(i(0x185)) / (0x1acd + -0x1 * -0x57a + -0x25 * 0xdf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x43227 + -0x3 * 0x1052f + 0x1c94f * 0x2));
const g = {};
function a() {
    const q = [
        'INTEGER',
        'contactId',
        'exports',
        'CASCADE',
        '5389794klBmQH',
        '4179609wVHJVk',
        '4401168DLsNGi',
        'XYTdZ',
        '__esModule',
        'JrLvp',
        '781298rsAiIO',
        'value',
        'Contacts',
        'addColumn',
        'lOSxR',
        'erty',
        'DataTypes',
        'Ehcuy',
        'removeColu',
        'defineProp',
        'sequelize',
        'xwWJu',
        '10SkAMhR',
        '23545841grTfKr',
        '1HMCkoZ',
        '85BMCUbM',
        'Messages',
        '58062YRjfqy',
        'gDosq',
        '12DYLHyu',
        '348DPEJHw',
        '4836SKTOKc'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x193)] = !![], Object[k(0x17b) + l(0x177)](exports, l(0x190), g);
const sequelize_1 = require(l(0x17c));
module[k(0x18a)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x17d)] = n(0x182), e[m(0x184)] = n(0x189), e[n(0x179)] = n(0x194), e[m(0x176)] = n(0x18b);
        const f = e;
        return d[n(0x175)](f[m(0x17d)], f[n(0x184)], {
            'type': sequelize_1[n(0x178)][n(0x188)],
            'references': {
                'model': f[m(0x179)],
                'key': 'id'
            },
            'onUpdate': f[n(0x176)],
            'onDelete': f[m(0x176)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x191)] = o(0x182), e[p(0x18f)] = o(0x189);
        const f = e;
        return d[o(0x17a) + 'mn'](f[p(0x191)], f[o(0x18f)]);
    }
};