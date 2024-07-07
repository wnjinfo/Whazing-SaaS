'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x139)) / (0x209b + 0x1b39 + -0x3bd3) + -parseInt(j(0x141)) / (-0x79 * -0x49 + -0x4f * 0x76 + -0x1 * -0x1eb) + parseInt(j(0x13e)) / (0x1726 + 0x1 * -0x15d7 + -0x14c) * (parseInt(i(0x133)) / (-0x18db + -0x189 * -0x4 + -0x2ad * -0x7)) + -parseInt(i(0x13f)) / (0x1e99 + 0xe2 * -0x29 + 0x2cf * 0x2) + parseInt(i(0x134)) / (0x4e1 + 0x2223 + 0x137f * -0x2) + parseInt(j(0x14a)) / (-0x20f8 + 0x56b * -0x3 + -0x2 * -0x18a0) + -parseInt(j(0x13d)) / (0x164c + 0x1b09 + -0x314d) * (parseInt(j(0x137)) / (-0x1 * -0x12f6 + 0xd59 + -0x2046));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x550 * 0x27c + 0xbe6b1 + -0xf754a));
function a() {
    const q = [
        'hFQaq',
        'nextStep',
        'value',
        'sequelize',
        '4aoCnBx',
        '5226780NWxSgO',
        'CASCADE',
        'DlBmc',
        '231651CVJZHc',
        'HQpWl',
        '1155916EWZsgr',
        'defineProp',
        'StepsReply',
        'removeColu',
        '104hfwlyt',
        '355029pDrfYm',
        '5067095NHOzFI',
        'gAnTr',
        '538372WDixvf',
        'jVQEY',
        'EnRaa',
        'DataTypes',
        'INTEGER',
        'erty',
        'Actions',
        '__esModule',
        'addColumn',
        '725690twIjAC',
        'exports'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1213 + 0x176c + -0x42b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x131)] = !![], Object[k(0x13a) + k(0x146)](exports, k(0x148), g);
const sequelize_1 = require(k(0x132));
module[k(0x12e)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x136)] = m(0x13b) + n(0x147), e[m(0x138)] = m(0x130), e[m(0x140)] = n(0x13b), e[n(0x142)] = m(0x135);
        const f = e;
        return d[m(0x149)](f[n(0x136)], f[n(0x138)], {
            'type': sequelize_1[m(0x144)][m(0x145)],
            'references': {
                'model': f[n(0x140)],
                'key': 'id'
            },
            'onUpdate': f[m(0x142)],
            'onDelete': f[n(0x142)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x143)] = p(0x13b) + p(0x147), e[o(0x12f)] = p(0x130);
        const f = e;
        return d[o(0x13c) + 'mn'](f[p(0x143)], f[o(0x12f)]);
    }
};