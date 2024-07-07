'use strict';
function a() {
    const q = [
        '344RvsAKl',
        '3XVsOBp',
        'erty',
        'addColumn',
        '120XbbTHL',
        'defineProp',
        'LZVjq',
        '9258435HfScvN',
        '799436yyouXc',
        '35164ExwLyi',
        '768430LOcNeT',
        'sequelize',
        'DataTypes',
        '__esModule',
        'CASCADE',
        'Whatsapps',
        'chatFlowId',
        'SET\x20NULL',
        'KYXFX',
        '1796492WcVCSS',
        '51dMWaBy',
        'INTEGER',
        '121499CyKYKt',
        'HArsu',
        'DEcdf',
        'cydwo',
        'value',
        'rKaex',
        'exports',
        'ChatFlow',
        '4027968fieqJO',
        'removeColu',
        'TlNUr'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x14f)) / (-0x27 * 0x7f + -0x35 * -0x8e + -0xa0c) * (-parseInt(i(0x144)) / (-0x7cf * 0x2 + -0x2423 + -0x15 * -0x277)) + -parseInt(i(0x13c)) / (-0x1 * 0x1d5d + 0x1797 + 0x5c9) * (parseInt(j(0x14e)) / (-0xad6 * 0x3 + -0x2067 + -0x40ed * -0x1)) + -parseInt(j(0x145)) / (0x13f9 + -0x22d8 + -0x3b9 * -0x4) + -parseInt(i(0x138)) / (0x59 * -0x47 + -0xfb * 0x4 + -0x3 * -0x98b) + parseInt(i(0x151)) / (-0x5d6 + -0x10c3 + 0x16a0) * (parseInt(j(0x13b)) / (-0x124 * 0x12 + 0x1bd * -0x2 + 0xb5 * 0x22)) + parseInt(i(0x142)) / (0xbdd + 0x161 * -0x1 + -0x1 * 0xa73) + -parseInt(j(0x13f)) / (-0x2 * 0x104a + -0x1 * -0x1f2d + 0x171) * (parseInt(i(0x143)) / (0x1a4 + 0x1b02 + 0x1c9b * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2df37 + 0x1dfa5 * -0x1 + 0xcc397));
const g = {};
g[k(0x155)] = !![], Object[l(0x140) + l(0x13d)](exports, k(0x148), g);
const sequelize_1 = require(l(0x146));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0xb9 + 0x45 * 0x4d + -0x1161);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x136)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x154)] = n(0x14a), e[n(0x135)] = n(0x14b), e[m(0x141)] = m(0x137), e[m(0x152)] = n(0x149), e[m(0x153)] = n(0x14c);
        const f = e;
        return d[n(0x13e)](f[n(0x154)], f[m(0x135)], {
            'type': sequelize_1[m(0x147)][n(0x150)],
            'references': {
                'model': f[n(0x141)],
                'key': 'id'
            },
            'onUpdate': f[n(0x152)],
            'onDelete': f[n(0x153)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x13a)] = o(0x14a), e[p(0x14d)] = p(0x14b);
        const f = e;
        return d[p(0x139) + 'mn'](f[o(0x13a)], f[p(0x14d)]);
    }
};