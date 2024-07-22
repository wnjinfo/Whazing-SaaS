'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7ee + -0x12 * 0x9d + -0x1 * -0x441);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x12c)) / (-0x8d * -0x41 + -0x3 * 0x11b + -0x207b) * (-parseInt(j(0x13b)) / (-0x1f01 * 0x1 + 0x12af + 0x107 * 0xc)) + -parseInt(i(0x140)) / (0x2175 + -0x251f + 0x3ad) * (parseInt(j(0x12e)) / (-0x2d7 * 0x9 + -0x15 + 0x19a8)) + -parseInt(j(0x139)) / (-0x1916 + -0x3f2 + -0x1 * -0x1d0d) * (parseInt(j(0x142)) / (0x8 * 0x6b + -0x25 * 0x94 + 0x1212)) + -parseInt(j(0x138)) / (-0x1671 + 0xec * -0x13 + 0x27fc) * (parseInt(i(0x13d)) / (-0x70b * -0x1 + -0xd * 0x119 + 0x1 * 0x742)) + -parseInt(i(0x12b)) / (0x4 * 0x14c + 0x1 * -0x144a + -0xf23 * -0x1) + -parseInt(j(0x147)) / (-0x12ae + -0x3 * 0x4b4 + 0x20d4) * (-parseInt(i(0x13e)) / (0x1215 + 0x5fb * -0x4 + 0x5e2)) + parseInt(j(0x127)) / (-0x1 * 0x1993 + -0x2 * 0xc2e + 0x31fb) * (parseInt(j(0x12f)) / (0x1 * -0x24d9 + -0xdea + 0x32d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x33bf2 + -0x265 * -0x13d + 0x227b1));
const g = {};
g[k(0x13c)] = !![], Object[k(0x128) + k(0x131)](exports, k(0x134), g);
function a() {
    const q = [
        '246334WsELBu',
        'value',
        '16ZLGivJ',
        '11jQAnjm',
        'CASCADE',
        '3QeeIqF',
        'userId',
        '1356URBSmV',
        'Whatsapps',
        'IRGGv',
        'sequelize',
        'Users',
        '1594830llGIcl',
        'SET\x20NULL',
        'AnHrb',
        '1860888CBiXMS',
        'defineProp',
        'exports',
        'DIhjU',
        '921951WaqNiJ',
        '1kNomft',
        'NyMSO',
        '444932JrfVkK',
        '39zixuEc',
        'JfsBP',
        'erty',
        'INTEGER',
        'addColumn',
        '__esModule',
        'UhGAc',
        'DataTypes',
        'removeColu',
        '49707uItNdw',
        '3320XYcBzu',
        'trXlj'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x145));
module[k(0x129)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x126)] = m(0x143), e[m(0x12a)] = m(0x141), e[n(0x13a)] = m(0x146), e[m(0x144)] = n(0x13f), e[m(0x12d)] = m(0x125);
        const f = e;
        return d[n(0x133)](f[n(0x126)], f[n(0x12a)], {
            'type': sequelize_1[n(0x136)][n(0x132)],
            'references': {
                'model': f[m(0x13a)],
                'key': 'id'
            },
            'onUpdate': f[n(0x144)],
            'onDelete': f[m(0x12d)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x130)] = p(0x143), e[o(0x135)] = o(0x141);
        const f = e;
        return d[o(0x137) + 'mn'](f[p(0x130)], f[p(0x135)]);
    }
};